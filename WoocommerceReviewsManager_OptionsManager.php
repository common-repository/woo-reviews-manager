<?php
/*
    "WordPress Plugin Template" Copyright (C) 2018 Michael Simpson  (email : michael.d.simpson@gmail.com)

    This file is part of WordPress Plugin Template for WordPress.

    WordPress Plugin Template is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    WordPress Plugin Template is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Contact Form to Database Extension.
    If not, see http://www.gnu.org/licenses/gpl-3.0.html
*/

class WoocommerceReviewsManager_OptionsManager
{

    public function getOptionNamePrefix()
    {
        return get_class($this) . '_';
    }


    /**
     * Define your options meta data here as an array, where each element in the array
     * @return array of key=>display-name and/or key=>array(display-name, choice1, choice2, ...)
     * key: an option name for the key (this name will be given a prefix when stored in
     * the database to ensure it does not conflict with other plugin options)
     * value: can be one of two things:
     *   (1) string display name for displaying the name of the option to the user on a web page
     *   (2) array where the first element is a display name (as above) and the rest of
     *       the elements are choices of values that the user can select
     * e.g.
     * array(
     *   'item' => 'Item:',             // key => display-name
     *   'rating' => array(             // key => array ( display-name, choice1, choice2, ...)
     *       'CanDoOperationX' => array('Can do Operation X', 'Administrator', 'Editor', 'Author', 'Contributor', 'Subscriber'),
     *       'Rating:', 'Excellent', 'Good', 'Fair', 'Poor')
     */
    public function getOptionMetaData()
    {
        return array();
    }

    /**
     * @return array of string name of options
     */
    public function getOptionNames()
    {
        return array_keys($this->getOptionMetaData());
    }

    /**
     * Override this method to initialize options to default values and save to the database with add_option
     * @return void
     */
    protected function initOptions()
    { }

    /**
     * Cleanup: remove all options from the DB
     * @return void
     */
    protected function deleteSavedOptions()
    {
        $optionMetaData = $this->getOptionMetaData();
        if (is_array($optionMetaData)) {
            foreach ($optionMetaData as $aOptionKey => $aOptionMeta) {
                $prefixedOptionName = $this->prefix($aOptionKey); // how it is stored in DB
                delete_option($prefixedOptionName);
            }
        }
    }

    /**
     * @return string display name of the plugin to show as a name/title in HTML.
     * Just returns the class name. Override this method to return something more readable
     */
    public function getPluginDisplayName()
    {
        return get_class($this);
    }

    /**
     * Get the prefixed version input $name suitable for storing in WP options
     * Idempotent: if $optionName is already prefixed, it is not prefixed again, it is returned without change
     * @param  $name string option name to prefix. Defined in settings.php and set as keys of $this->optionMetaData
     * @return string
     */
    public function prefix($name)
    {
        $optionNamePrefix = $this->getOptionNamePrefix();
        if (strpos($name, $optionNamePrefix) === 0) { // 0 but not false
            return $name; // already prefixed
        }
        return $optionNamePrefix . $name;
    }

    /**
     * Remove the prefix from the input $name.
     * Idempotent: If no prefix found, just returns what was input.
     * @param  $name string
     * @return string $optionName without the prefix.
     */
    public function &unPrefix($name)
    {
        $optionNamePrefix = $this->getOptionNamePrefix();
        if (strpos($name, $optionNamePrefix) === 0) {
            return substr($name, strlen($optionNamePrefix));
        }
        return $name;
    }

    /**
     * A wrapper function delegating to WP get_option() but it prefixes the input $optionName
     * to enforce "scoping" the options in the WP options table thereby avoiding name conflicts
     * @param $optionName string defined in settings.php and set as keys of $this->optionMetaData
     * @param $default string default value to return if the option is not set
     * @return string the value from delegated call to get_option(), or optional default value
     * if option is not set.
     */
    public function getOption($optionName, $default = null)
    {
        $prefixedOptionName = $this->prefix($optionName); // how it is stored in DB
        $retVal = get_option($prefixedOptionName);
        if (!$retVal && $default) {
            $retVal = $default;
        }
        return $retVal;
    }

    /**
     * A wrapper function delegating to WP delete_option() but it prefixes the input $optionName
     * to enforce "scoping" the options in the WP options table thereby avoiding name conflicts
     * @param  $optionName string defined in settings.php and set as keys of $this->optionMetaData
     * @return bool from delegated call to delete_option()
     */
    public function deleteOption($optionName)
    {
        $prefixedOptionName = $this->prefix($optionName); // how it is stored in DB
        return delete_option($prefixedOptionName);
    }

    /**
     * A wrapper function delegating to WP add_option() but it prefixes the input $optionName
     * to enforce "scoping" the options in the WP options table thereby avoiding name conflicts
     * @param  $optionName string defined in settings.php and set as keys of $this->optionMetaData
     * @param  $value mixed the new value
     * @return null from delegated call to delete_option()
     */
    public function addOption($optionName, $value)
    {
        $prefixedOptionName = $this->prefix($optionName); // how it is stored in DB
        return add_option($prefixedOptionName, $value);
    }

    /**
     * A wrapper function delegating to WP add_option() but it prefixes the input $optionName
     * to enforce "scoping" the options in the WP options table thereby avoiding name conflicts
     * @param  $optionName string defined in settings.php and set as keys of $this->optionMetaData
     * @param  $value mixed the new value
     * @return null from delegated call to delete_option()
     */
    public function updateOption($optionName, $value)
    {
        $prefixedOptionName = $this->prefix($optionName); // how it is stored in DB
        return update_option($prefixedOptionName, $value);
    }

    /**
     * A Role Option is an option defined in getOptionMetaData() as a choice of WP standard roles, e.g.
     * 'CanDoOperationX' => array('Can do Operation X', 'Administrator', 'Editor', 'Author', 'Contributor', 'Subscriber')
     * The idea is use an option to indicate what role level a user must minimally have in order to do some operation.
     * So if a Role Option 'CanDoOperationX' is set to 'Editor' then users which role 'Editor' or above should be
     * able to do Operation X.
     * Also see: canUserDoRoleOption()
     * @param  $optionName
     * @return string role name
     */
    public function getRoleOption($optionName)
    {
        $roleAllowed = $this->getOption($optionName);
        if (!$roleAllowed || $roleAllowed == '') {
            $roleAllowed = 'Administrator';
        }
        return $roleAllowed;
    }

    /**
     * Given a WP role name, return a WP capability which only that role and roles above it have
     * http://codex.wordpress.org/Roles_and_Capabilities
     * @param  $roleName
     * @return string a WP capability or '' if unknown input role
     */
    protected function roleToCapability($roleName)
    {
        switch ($roleName) {
            case 'Super Admin':
                return 'manage_options';
            case 'Administrator':
                return 'manage_options';
            case 'Editor':
                return 'publish_pages';
            case 'Author':
                return 'publish_posts';
            case 'Contributor':
                return 'edit_posts';
            case 'Subscriber':
                return 'read';
            case 'Anyone':
                return 'read';
        }
        return '';
    }

    /**
     * @param $roleName string a standard WP role name like 'Administrator'
     * @return bool
     */
    public function isUserRoleEqualOrBetterThan($roleName)
    {
        if ('Anyone' == $roleName) {
            return true;
        }
        $capability = $this->roleToCapability($roleName);
        return current_user_can($capability);
    }

    /**
     * @param  $optionName string name of a Role option (see comments in getRoleOption())
     * @return bool indicates if the user has adequate permissions
     */
    public function canUserDoRoleOption($optionName)
    {
        $roleAllowed = $this->getRoleOption($optionName);
        if ('Anyone' == $roleAllowed) {
            return true;
        }
        return $this->isUserRoleEqualOrBetterThan($roleAllowed);
    }

    /**
     * see: http://codex.wordpress.org/Creating_Options_Pages
     * @return void
     */
    public function createSettingsMenu()
    {
        $pluginName = $this->getPluginDisplayName();
        //create new top-level menu
        add_menu_page(
            $pluginName . ' Plugin Settings',
            $pluginName,
            'administrator',
            get_class($this),
            array(&$this, 'settingsPage')
            /*,plugins_url('/images/icon.png', __FILE__)*/
        ); // if you call 'plugins_url; be sure to "require_once" it

        //call register settings function
        add_action('admin_init', array(&$this, 'registerSettings'));
    }

    public function registerSettings()
    {
        $settingsGroup = get_class($this) . '-settings-group';
        $optionMetaData = $this->getOptionMetaData();
        foreach ($optionMetaData as $aOptionKey => $aOptionMeta) {
            register_setting($settingsGroup, $aOptionMeta);
        }
    }



    /**
     * Creates HTML for the Administration page to set options for this plugin.
     * Override this method to create a customized page.
     * @return void
     */
    public function settingsPage()
    {
        wp_enqueue_script('startup', plugin_dir_url(__FILE__) . 'js/startup.js', array('jquery'), NULL, false);
        wp_enqueue_script('ebay', plugin_dir_url(__FILE__) . 'js/ebay-import.js', array('jquery'), NULL, false);
        wp_enqueue_script('toast', plugin_dir_url(__FILE__) . 'js/jquery.toast.min.js', array('jquery'), NULL, false);
        wp_enqueue_style('bootstrapCss', plugin_dir_url(__FILE__) . 'css/bootstrap.min.css');
        wp_enqueue_style('toastCss', plugin_dir_url(__FILE__) . 'css/jquery.toast.min.css');
        wp_enqueue_style('custom', plugin_dir_url(__FILE__) . 'css/main.css');
        wp_enqueue_script('bootstrap', plugin_dir_url(__FILE__) . 'js/bootstrap.min.js', array('jquery'), NULL, false);
        wp_enqueue_style('mdbcss', plugin_dir_url(__FILE__) . 'css/mdb.min.css');

        // wp_enqueue_script('bootstrap', plugin_dir_url(__FILE__) . 'js/bootstrap.min.js', array('jquery'), NULL, false);
        // wp_enqueue_script('toast', plugin_dir_url(__FILE__) . 'js/jquery.toast.min.js', array('jquery'), NULL, false);
        // wp_enqueue_style('bootstrapCss', plugin_dir_url(__FILE__) . 'css/bootstrap.min.css');
        // wp_enqueue_style('toastCss', plugin_dir_url(__FILE__) . 'css/jquery.toast.min.css');
        // wp_enqueue_style('custom', plugin_dir_url(__FILE__) . 'css/main.css');
        wp_enqueue_script('quill', plugin_dir_url(__FILE__) . 'js/quill.js', array('jquery'), NULL, false);
        wp_enqueue_style('quillCss', plugin_dir_url(__FILE__) . 'css/quill.css');
        wp_enqueue_script('math', plugin_dir_url(__FILE__) . 'js/math.js', array('jquery'), NULL, false);
        // wp_enqueue_script('sync', plugin_dir_url(__FILE__) . 'js/sync.js', array('jquery'), NULL, false);
        // wp_enqueue_script('startup', plugin_dir_url(__FILE__) . 'js/startup.js', array('jquery', 'math', 'toast'), NULL, false);



        wp_localize_script(
            'startup',
            'wooshark_params',
            array(
                'ajaxurl' => admin_url('admin-ajax.php'),
                'nonce' => wp_create_nonce('ajax-nonce')
            )
        );


        // HTML for the page
        $settingsGroup = get_class($this) . '-settings-group';
        

        ?>
        <script src="https://kit.fontawesome.com/45abdd2158.js" crossorigin="anonymous"></script>



        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist" style="padding-top:5px;margin-top:8px; background-color:5px; background-color:#62a1a4; border-top-left-radius:10px; border-top-right-radius:14px">
            <li class="nav-item active">
                <a class="nav-link active" style="margin-left: 5px" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">eBay import</a>
            </li>
            <!-- <li class="nav-item">

                <a class="nav-link" id="pills-connect-tab" data-toggle="pill" href="#pills-connect" role="tab" aria-controls="pills-connect" aria-selected="false">Connect to store</a>
            </li> -->
            <li class="nav-item">
                <a class="nav-link" id="pills-connect-products" data-toggle="pill" href="#pills-products" role="tab" aria-controls="pills-connect" aria-selected="false">Products - wooshark <i class="fa fa-refresh"> </i> </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="pills-config-tab" data-toggle="pill" href="#pills-config" role="tab" aria-controls="pills-config" aria-selected="false">Configuration <i class="fa fa-cogs"> </i></a>
            </li>

            <!-- <li class="nav-item">
                <a class="nav-link" id="pills-sync-tab" data-toggle="pill" href="#pills-sync" role="tab" aria-controls="pills-sync" aria-selected="false">Bulk update</a>
            </li> -->
            <li class="nav-item">
                <a class="nav-link" id="pills-draft-tab" data-toggle="pill" href="#pills-draft" role="tab" aria-controls="pills-draft" aria-selected="false"> Out of stock Products </a>
            </li>


            <li class="nav-item">
                <a class="nav-link" id="go-pro-tab" data-toggle="pill" href="#go-pro" role="tab" aria-controls="go-pro" aria-selected="false"> Go Pro </a>
            </li>


         
            <!-- <li class="nav-item">
                <a class="nav-link" id="pills-activation-tab" data-toggle="pill" href="#pills-activation" role="tab" aria-controls="pills-activation" aria-selected="false">Activation <i class="fa fa-refresh"> </i></a>
            </li>  -->

            <!-- <li class="nav-item">
                <a class="nav-link" id="pills-advanced-tab" data-toggle="pill" href="#pills-advanced" role="tab" aria-controls="pills-advanced" aria-selected="false">Pro features</a>
            </li> -->






        </ul>





        <!-- ///////////////////////////////////////////// -->
        <div class="tab-content" id="pills-tabContent" style="background-color:#f3f5f6">
            <div style="height:20px; color:grey"></div>




            <div class="tab-pane active in" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

                <div class="wrap">

                    <div class="first-line-search">




                        <div style="display:flex; padding:2%;  margin: 1%;border-radius: 10px; background-color:white">
                            <!-- <h4 style="font-weight:bold"> Import products From eBay to store</h4> -->


                            <div class="loader2" style="display:none">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>




                            <div class="loader3" style="display:none">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>

                            <div style="flex: 1 1 48%; margin-right:1%">
                                <h4 style="font-weight:bold" for="productSku"> Insert by Id :</h4>
                                <!-- <div style="display:flex"> -->

                                <div style="display:flex">
                                    <input style="flex: 1 1 65%; border-radius: 10px;" placeholder='paste eBay product Sku' type='text' class="custom-form-control" style="border: 1px solid grey;border-radius: 10px; !important" id="productSku">
                                    <button style="flex: 1 1 35%; margin:0; margin-left:5px; border-radius: 10px;    " class="btn btn-primary" id="importProductToShopBySky"> Import </button>
                                </div>

                            </div>




                            <div style="flex: 1 1 48%; margin-left:1%">

                                <h4 style="font-weight:bold" for="productUrl"> Insert by Url :</h4>



                                <div style="display:flex">
                                    <input style="flex: 1 1 65%; border-radius: 10px;" placeholder='paste eBay product url' type='text' class="custom-form-control" style="border: 1px solid grey;border-radius: 10px; !important" id="productUrl">
                                    <button style="flex: 1 1 35%; margin:0; margin-left:5px; border-radius: 10px;    " class="btn btn-primary" id="importProductToShopByUrl"> Import </button>
                                </div>

                            </div>






                        </div>


                        <div class="search-form" style=" padding:2%;  margin: 1%;border-radius: 10px; background-color:white">
                            <h4 style="font-weight:bold">Search by keyword</h4>

                            <div style="display:flex">
                                <input style="border-radius: 10px; flex: 1 1 83%" placeholder='Search keyword example, shoes, smartphones, etc..' type='text' class="custom-form-control" style="border: 1px solid grey;border-radius: 10px; !important" id="searchKeyword">
                                <button style="border-radius: 10px; flex: 1 1 17%; margin:0; margin-left:5px;     " class="btn btn-primary" id="seachProductsButton"> Search Products</button>
                            </div>


                            <!-- <div style="display:flex; margin-top:2%"> -->

                                <!-- <div style="flex: 1 1 50%"> -->
                                    <h4 style="color:blue; margin-top:10px; font-weight:bold">
                                    Sorting Preferences
                                    </h4>
                                    <div style="display:flex">
                                    
                                    <div style=" flex: 1 1 50%; padding:10px; margin-top:10px;    color: grey;"> <input type="radio" name="sort" value="WatchCountDecreaseSort"> Default<br></div>
                                        <div style=" flex: 1 1 50%; padding:10px; margin-top:10px;    color: grey;"> <input type="radio" name="sort" value="PricePlusShippingLowest"> Price ascending<br></div>
                                        <div style="flex: 1 1 50%; padding:10px; margin-top:10px;     color: grey;"><input type="radio" name="sort" value="CurrentPriceHighest"> Price descending<br></div>
                                        <div style=" flex: 1 1 50%; padding:10px; margin-top:10px;    color: grey;"> <input type="radio" name="sort" value="CountryAscending"> Country ascending<br></div>
                                    </div>
                                <!-- </div> -->

                                <!-- <div style="flex: 1 1 25%"> -->

                                    <!-- <h4 style="padding:10px;font-weight:bold">
                                        Sorting Preferences
                                    </h4> -->

                                    <!-- <div style="margin-left:10px">
                                        <span style="color: grey;"><input style="padding:10px; margin-top:10px" id="highQualityItems" type="checkbox" /> only high quality Items </span>
                                    </div> -->

                                <!-- </div> -->

                                <!-- <div style="flex: 1 1 25%"> -->

                                    <!-- <h4 style="padding:10px;font-weight:bold"> -->
                                        <!-- Preferences -->
                                    <!-- </h4> -->


                                    <h4 style="color:blue; margin-top:10px; font-weight:bold">Shipping preference</h4>

                                    <div style="margin-left:10px">
                                        <span style="color: grey;"><input style="padding:10px; margin-top:10px" id="isFreeShipping" type="checkbox" /> Free shipping</span>
                                    </div>


                                    <h4 style="color:blue; margin-top:10px; font-weight:bold">Price preferences</h4>

                                    <div style="margin-top:10px">
                                    <label>Min price</label>
                                        <span style="color: grey;"><input style="" id="minPrice" type="text"  placeholder="Min Price"/> </span>
                                    </div>

                                    <div style="margin-top:10px" >
                                    <label>Max price</label>
                                        <span style="color: grey;"><input style="" id="maxPrice" type="text"  placeholder="Max Price"/> </span>
                                    </div>


                                    <hr>

<div style="margin-top:10px; width:20%" >
<label>Seller name</label>
    <span style="color: grey;"><input style="" id="searchBySellername" type="text"  placeholder="search products only for this seller name"/> </span>
</div>

                                <!-- </div> -->


                                
                            <!-- </div> -->


                        </div>

                        <div class="currencyDetails" style=" padding:1%;  margin: 1%;border-radius: 10px; background-color:white">


                        </div>




                    </div>




                    <!-- <div style="border: rgba(1, 4, 12, 0.38) solid 1px;padding: 17px;border-radius: 5px;margin-bottom: 25px;"> -->
                    <div class="form-check">
                    </div>




                    <button id="importAllProductOnThisPage" class="btn btn-default btn-lg" style="border-radius: 10px;width:20%; margin-left: 41%; margin-top: 1%"> Import all products on this page </button>

                    <!-- </div> -->

                    <div id="product-search-container" style="display:flex; -justify-content: space-between;flex-wrap:wrap; margin-top:1%">

                    </div>

                    <nav aria-label="pagination" style="text-align:center;">
                        <ul id="pagination" class="pagination pagination-lg justify-content-center">
                        </ul>
                    </nav>




                    <hr>
                    <div style="display:flex">
                    </div>



                </div>




            </div>



            <!-- ///////////////////////////////////////////// -->
            <!-- ///////////////////////////////////////////// -->
            <!-- ///////////////////////////////////////////// -->
            <!-- ///////////////////////////////////////////// -->
            <!-- ///////////////////////////////////////////// -->
            <!-- ///////////////////////////////////////////// -->
            <!-- ///////////////////////////////////////////// -->
            <!-- ///////////////////////////////////////////// -->
            <!-- ///////////////////////////////////////////// -->
            <!-- ///////////////////////////////////////////// -->
            <!-- ///////////////////////////////////////////// -->




            <div class="tab-pane fade" id="pills-products" role="tabpanel" aria-labelledby="pills-products-products">

                <div class="loader2" style="display:none; z-index:9999">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>


                <div><label style="background-color:#f3f5f6;color:black;border-radius: 5px; padding:15px; width:98%"> Search product<label></div>



                <!-- <label>Search product by sku</label> -->

                <!-- <button style="width:100%; margin-top:20px; margin-bottom:20px" class="btn btn-danger" id="updateCurrentPage" >Update all products By Category</button> -->

                <div class="input-group">
                    <input type="text" style="width:99%" class="form-control" id="skusearchValue" placeholder='Search by sku' />

                    <span class="input-group-btn">
                        <button style="  margin-bottom:20px" class="btn btn-primary" id="searchBySku">Search by Sku</button>
                    </span>
                </div>
                <button style="width:20%; margin-left: 42%; margin-top:20px; margin-bottom:20px" class="btn btn-default btn-lg" id="updateCurrentPage">Update Stock and price on current page</button>
                <!-- <label class="currencyDetails" style="margin-top:10px; padding:10px; width:98%; background-color:#f3f5f6;color:black; border-radius: 5px;">
                           
                           </label> -->





                <div class="log-sync-product" style="background-color:white; padding:5px; max-height:500px; overflow-y:scroll">
                    <!-- <div><label style="background-color:#f3f5f6;color:black; padding:10px; width:98%"> Updaing product log<label></div> -->

                </div>
                <!-- <div><label style="background-color:#f3f5f6;color:black; padding:10px; width:98%"> List of products<label></div> -->

                <table id="products-wooshark" class="table table-striped">
                    <thead>
                        <tr>
                            <th width="10%">image</th>
                            <th width="10%">sku</th>
                            <th width="10%">id</th>
                            <th width="22%">title</th>
                            <th width="12%">link to original page</th>
                            <th width="12%">Update product price and quantity</th>
                            <th width="12%">Import Reviews and rating</th>
                            <th width="12%">Last updated</th>

                        </tr>
                    </thead>

                </table>


                <div class="loader2" style="display:none">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>



                <nav aria-label="product-pagination" style="text-align:center;">
                    <ul id="product-pagination" class="pagination pagination-lg justify-content-center">
                        <!-- <li id="product-page-1" class="-product-page-item"><a class="page-link active active">1</a></li> -->

                        <!-- <li class="page-item"><a class="page-link" href="#">2</a></li> -->
                        <!-- <li class="page-item"><a class="page-link" href="#">3</a></li> -->
                    </ul>
                </nav>



            </div>





            <!-- ///////////////////////////////////////////// -->
            <!-- ///////////////////////////////////////////// -->
            <!-- ///////////////////////////////////////////// -->
            <!-- ///////////////////////////////////////////// -->
            <!-- ///////////////////////////////////////////// -->
            <!-- ///////////////////////////////////////////// -->
            <!-- /////////////////////ORDER//////////////////////// -->
            <!-- //////////////////////////ORDER/////////////////// -->
            <!-- ///////////////////////////////ORDER////////////// -->
            <!-- ///////////////////////////////////////////// -->
            <!-- ///////////////////////////////////////////// -->




            <div class="tab-pane fade" id="pills-orders" role="tabpanel" aria-labelledby="pills-orders">

                <div class="loader2" style="display:none; z-index:9999">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <table id="orders" class="table table-striped">
                    <thead>
                        <tr>
                            <th width="10%">Order id</th>
                            <th width="10%">Status</th>
                            <th width="10%">date creation</th>
                            <th width="25%">Customer shipping name</th>
                            <th width="15%">Customer shipping country</th>
                            <th width="15%">Number of products</th>
                            <th width="15%">Action</th>
                        </tr>
                    </thead>

                </table>


                <div class="loader2" style="display:none">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>






            </div>



            

          

            <div class="tab-pane fade" id="pills-draft" role="tabpanel" aria-labelledby="pills-draft-products" style="background-color:#f3f5f6">
                <div style="height:20px; color:grey"></div>

                <div style="background-color:white; padding:2%; margin:2%">

                    <div class="loader2" style="display:none; z-index:9999">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                    <table id="products-wooshark-draft" class="table table-striped">
                        <thead>
                            <tr>
                                <th width="10%">image</th>
                                <th width="10%">sku</th>
                                <th width="10%">id</th>
                                <th width="25%">title</th>
                                <th width="15%">link to original page</th>
                                <th width="15%">Delete Product</th>
                                <!-- <th width="14%">Set to draft</th> -->

                            </tr>
                        </thead>

                    </table>


                    <div class="loader2" style="display:none">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>



                    <nav aria-label="product-pagination-draft" style="text-align:center;">
                        <ul id="product-pagination-draft" class="pagination pagination-lg justify-content-center">
                        </ul>
                    </nav>
                </div>
            </div>

            <div class="tab-pane fade" id="pills-config" role="tabpanel" aria-labelledby="pills-config-tab" style="background-color:#f3f5f6">
                <div class="global-configuration-section">

                    <div style="height:20px; color:grey"></div>


                    <!--  -->
                    <!--  FORMULA -->
                    <!--  -->
                    <!--  -->
                    <!--  -->
                    <!--  -->
                    <!--  -->
                    <!--  -->

                    <div class="switch-text" style="margin:2%; padding:3%; border-radius:10px; background-color:white">
                        <div style=display:flex>
                            <div style="flex: 1 1 40%">

                                <h4 style="font-weight:bold">
                                    Define Price markup formula
                                </h4>
                            </div>
                            <div style="flex: 1 1 48%">
                            </div>

                            <div style="flex: 1 1 10%;">
                                <label style="margin-right:3px">Add Intervall</label><button id="addInterval" class="btn btn-primary" style=" margin-dight:5px;color:black"> <i class="fa fa-plus"></i> </button>
                            </div>
                        </div>

                        <div class="">
                            <div id="formula">

                                <table id="table-formula" class="table table-striped" style="margin-top:20px">
                                    <thead>

                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th style='width:15%'> <input class="custom-form-control" name="min" placeholder="Min price"></th>
                                            <th style='width:2%'>-</th>
                                            <th style='width:15%'><input class="custom-form-control" name="max" placeholder="Max price"></th>


                                            <th style='width:16%'>
                                                <div style="display:flex"><button style="flex: 1 1 10%;border-radius: 1px;margin-top: 0;margin-bottom: 0;margin-right:5px" class="btn btn-light"> Increase by </button><input style="flex: 1 1 78%; border: 1px solid #ccc;" class="multiply custom-form-control" type="number" name="multiply" placeholder="Increase percentage"><button style="flex: 1 1 10%;border-radius: 1px;margin-top: 0;margin-bottom: 0;margin-right:5px" class="btn btn-light"> <i class="fa fa-percent fa-2x"></i> </button></div>
                                            </th>


                                            <th style='width:15%'>
                                                <div style="display:flex"><button style="flex: 1 1 10%;border-radius: 1px;margin-top: 0;margin-bottom: 0;margin-right:5px" class="btn btn-light"> <i class="fa fa-plus"></i> </button><input style="flex: 1 1 90%; border: 1px solid #ccc;" class="addition custom-form-control" type="number" name="addition" placeholder="Add number"></div>
                                            </th>
                                            <th style="width:3%"><button style="border-radius: 1px;margin-top: 0;margin-bottom: 0;margin-right:5px" id="removeFormulaLine" class="btn btn-danger"> <i class="fa fa-trash"></i> </button></th>

                                        </tr>
                                    </tbody>
                                </table>

                                <!-- <button  id="resetFormula" class="btn btn-primary" style="float:right"> Reset formula</button> -->
                                <!-- <input type="submit" class="btn btn-default" style="float:right" id="saveFormula" value="Save Formula section"> -->
                            </div>
                        </div>
                        <h4 style="display: none; color:red" id="reload"> Formula saved, reload product page</h4>
                        <!-- </div> -->
                    </div>

                    <div class="switch-text" style="margin-left:2%; margin-right:2%; margin-top:2%; padding:2%; border-radius:10px; background-color:white">

                        <h4 style="font-weight:bold">
                            Replace text in description and title
                        </h4>
                        <div style="display:flex">
                            <div style="flex:1 1 44%; margin-right:1%">
                                <label style="margin-bottom:10px; color:#899195">Text to be replaced</label>
                                <input id="textToBeReplaced" style="margin-bottom:10px" placeholder="text to replece" class="form  form-control" />
                            </div>
                            <div style="flex:1 1 44%;  margin-left:1%">
                                <label style="margin-bottom:10px; color:#899195">New text</label>
                                <input id="textToReplace" style="margin-bottom:10px" placeholder="text to replece" class="form  form-control" />
                            </div>


                        </div>
                    </div>






                    <!--  -->
                    <!--  -->
                    <!--  FIRST -->

                    <div class="first-level-section" style="display:flex;"> 

                        <div class="switch-text" style="flex: 1 1 99%; margin-right:2%; margin-left:1%; margin-top:2%;; padding:2%; border-radius:10px; background-color:white"> 

                            <h4 style="font-weight:bold">
                                Auto update price and stock (available on the premuim version)
                            </h4>

                             <div style="margin-bottom:15px">
                                <span style='padding:10px; color:#899195; font-size:'><input id="enableAutomaticUpdates" disabled type="checkbox" name="enableAutomaticUpdates"> Enable daily automatic updates of price and stock (this will run once each 24 hours)</span>
                            </div>



                            <div style="margin-bottom:15px;">
                                <span style='padding:10px; color:#899195; font-size:'><input id="onlyPublishProductWillSync" disabled type="checkbox" name="onlyPublishProductWillSync"> Only published products will sync </span>
                            </div>



                            <div style="margin-bottom:15px">
                                <span style='padding:10px; color:#899195; font-size:'><input id="applyPriceFormulaAutomaticUpdate" disabled type="checkbox" name="applyPriceFormulaAutomaticUpdate"> Apply price markup formula for automatic update </span>
                            </div>

                            <div style="margin-bottom:15px">
                                <span style='padding:10px; color:#899195; font-size:'><input id="syncRegularPrice" type="checkbox"  disabled name="syncRegularPrice"> Sync Regular price </span>
                            </div>
                            <div style="margin-bottom:15px">
                                <span style='padding:10px; color:#899195; font-size:'><input id="syncSalePrice" type="checkbox" disabled name="syncSalePrice"> Sync Sale price </span>
                            </div>
                            <div style="margin-bottom:15px">
                                <span style='padding:10px; color:#899195; font-size:'><input id="syncStock" type="checkbox" disabled name="syncStock"> Sync Stock </span>
                            </div>

                    </div>
                    </div>
                    <!--  -->
                    <!--  -->
                    <!--  -->
                    <!--  -->
                    <!--  -->
                    <!--  -->

                        <!-- <div class="switch-text" style="flex: 1 1 48%; margin-right:2%; margin-left:1%; margin-top:2%;; padding:2%; border-radius:10px; background-color:white"> -->

                            <!-- <h4 style="font-weight:bold">
                                Auto update price and stock (new feature in testing phase, can contains bugs)
                            </h4> -->

                            <!-- <div style="margin-bottom:15px">
                                <span style='padding:10px; color:#899195; font-size:'><input id="enableAutomaticUpdates" type="checkbox" name="enableAutomaticUpdates"> Enable daily automatic updates of price and stock (this will run once each 24 hours)</span>
                            </div>



                            <div style="margin-bottom:15px;">
                                <span style='padding:10px; color:#899195; font-size:'><input id="onlyPublishProductWillSync" type="checkbox" name="onlyPublishProductWillSync"> Only published products will sync </span>
                            </div>



                            <div style="margin-bottom:15px">
                                <span style='padding:10px; color:#899195; font-size:'><input id="applyPriceFormulaAutomaticUpdate" type="checkbox" name="applyPriceFormulaAutomaticUpdate"> Apply price markup formula for automatic update </span>
                            </div>

                            <div style="margin-bottom:15px">
                                <span style='padding:10px; color:#899195; font-size:'><input id="syncRegularPrice" type="checkbox" name="syncRegularPrice"> Sync Regular price </span>
                            </div>
                            <div style="margin-bottom:15px">
                                <span style='padding:10px; color:#899195; font-size:'><input id="syncSalePrice" type="checkbox" name="syncSalePrice"> Sync Sale price </span>
                            </div>
                            <div style="margin-bottom:15px">
                                <span style='padding:10px; color:#899195; font-size:'><input id="syncStock" type="checkbox" name="syncStock"> Sync Stock </span>
                            </div> -->







                        <!-- </div> -->

                    <!-- </div> -->

                    <div class="first-level-section" style="display:flex;">
                        <div class="update-product-configuration-section" style="flex: 1 1 48%; margin-left:2%; margin-right:1%; margin-top:2%;; padding:2%; border-radius:10px; background-color:white">


                        <h4 style="font-weight:bold"> Import configuration (Bulk and single)
                            </h4>
                             <div style="margin-bottom:15px; margin-top:20px">

                                <span style='color:#899195; font-size:'><input id="isImportReviewsSingleImport" type="checkbox" name="isImportReviewsSingleImport"> Import reviews (Not available for bulk import) </span>
                            </div>

                            <div style="margin-bottom:15px">

                                <span style='color:#899195; font-size:'><input id="isImportImageVariationsSingleImport" type="checkbox" name="isImportImageVariationsSingleImport"> Import image variations (note that this can drastically increase the time to insert the product and can result sometimes in product out of stock</span>
                            </div>

                            <div style="margin-bottom:15px">

                                <span style='color:#899195; font-size:'><input id="isImportProductSpecificationSingleImport" type="checkbox" name="isImportProductSpecificationSingleImport"> Import product specification </span>
                            </div>

                            <div style="margin-bottom:15px">

                                <span style='color:#899195; font-size:'><input id="isImportProductDescriptionSingleImport" type="checkbox" name="isImportProductDescriptionSingleImport"> Import product description </span>
                            </div>

                            <div style="margin-bottom:15px">

                                <span style='color:#899195; font-size:'><input id="isPublishProductSingleImport" type="checkbox" name="isPublishProductSingleImport"> Publish/draft (if option enabled, products will be published automatically to your shop) </span>
                            </div>

                            <div style="margin-bottom:15px">
                                <span style='color:#899195; font-size:'><input id="isFeaturedProduct" type="checkbox" name="isFeaturedProduct"> Is featured product </span>
                            </div>

                            <div style="margin-bottom:15px">
                                <span style='color:#899195; font-size:'><input id="applyPriceFormulawhileImporting" type="checkbox" name="applyPriceFormulawhileImporting"> Apply markup price formula </span>
                            </div>




                          



                        </div>


                        <div class="Global-import-configuration-section" style="flex: 1 1 48%; margin-left:1%; margin-right:2%; margin-top:2%;; padding:2%; border-radius:10px; background-color:white">

                            <h4 style="font-weight:bold">
                                Locale setting
                            </h4>
                            <div style='display:flex'>
                                <div style="flex: 1 1 24%;">
                                    <div style="padding:10px"> <input type="radio" name="language" value="EBAY-US" checked="checked"> United states<br></div>
                                    <div style="padding:10px"><input type="radio" name="language" value="EBAY-FR"> France<br></div>
                                    <div style="padding:10px"><input type="radio" name="language" value="EBAY-ES"> Espagne<br></div>
                                    <div style="padding:10px"><input type="radio" name="language" value="EBAY-IT"> Italia<br></div>
                                </div>

                                <div style="flex: 1 1 24%;">
                                    <div style="padding:10px"><input type="radio" name="language" value="EBAY-AT"> Australia<br></div>
                                    <div style="padding:10px"><input type="radio" name="language" value="EBAY-AU"> Austria<br></div>
                                    <div style="padding:10px"><input type="radio" name="language" value="EBAY-CH"> Swizerland<br></div>
                                    <div style="padding:10px"><input type="radio" name="language" value="EBAY-ENCA"> Canada<br></div>
                                </div>
                                <div style="flex: 1 1 24%;">

                                <div style="padding:10px"><input type="radio" name="language" value="EBAY-DE"> German<br></div>
                                    <div style="padding:10px"><input type="radio" name="language" value="EBAY-FRBE"> Belguim<br></div>
                                    <div style="padding:10px"><input type="radio" name="language" value="EBAY-FRCA"> Canada (french)<br></div>
                                    <div style="padding:10px"><input type="radio" name="language" value="EBAY-GB"> UK<br></div>
                                </div>
                                <div style="flex: 1 1 24%;">

                                <div style="padding:10px"><input type="radio" name="language" value="EBAY-HK"> Honk kong<br></div>
                                    <div style="padding:10px"><input type="radio" name="language" value="EBAY-IN"> Inde<br></div>
                                    <div style="padding:10px"><input type="radio" name="language" value="EBAY-MY"> Malaysia<br></div>
                                    <div style="padding:10px"><input type="radio" name="language" value="EBAY-PH"> Philippines<br></div>
                                </div>
                            </div>

                            <!-- <label> for additiona languages, please raise a custom support request </label> -->




                        </div>
                    </div>


                    <!--  -->
                    <!--  SECOND -->
                    <!--  -->
                    <!--  -->
                    <!--  -->
                    <!--  -->
                    <!--  -->
                    <!--  -->
                    <div class="second-level-section" style="display:flex">
                        <div class="single-import-configuration-section" style="flex: 1 1 48%; margin-left:2%; margin-right:1%; margin-top:2%; padding:2%; border-radius:10px; background-color:white">

                        <h4 style="font-weight:bold">
                                Update product configuration (page update)
                            </h4>


                            <div style="margin-bottom:15px; margin-top:20px">
                                <span style='color:#899195; font-size:'><input id="applyPriceFormulaWhileUpdatingProduct" id="group1" type="checkbox" /> Apply price formula when updating product Regular price and Sale price</span>
                            </div>





                            <div style="margin-bottom:15px">
                                <span style='color:#899195; font-size:'><input id="setVariationsToOutOfStock" id="group2" type="checkbox" /> Set varitions with stock = 0 to outOfStock</span>
                            </div>

                            <div style="margin-bottom:15px">
                                <span style='color:#899195; font-size:'><input id="updateSalePrice" id="group2" type="checkbox" /> Update Sale price</span>
                            </div>

                            <div style="margin-bottom:15px">
                                <span style='color:#899195; font-size:'><input id="updateRegularPrice" id="group2" type="checkbox" /> Update regular price</span>
                            </div>

                        </div>




                        <div class="update-additional-currencies-section" style="flex: 1 1 48%; margin-left: 1%; margin-right:2%; margin-top:2%; padding:2%; border-radius:10px; background-color:white">
                        <h4 style="font-weight:bold">
                                Auto update product availability (this will run once each 24 hours)
                            </h4>

                            <div style="margin-bottom:15px">
                                <span style='padding:10px; color:#899195; font-size:'><input id="isEnableAutomaticUpdateForAvailability" type="checkbox" name="isEnableAutomaticUpdateForAvailability"> Enable daily automatic availability check (products will be available as draft and not published anymore) </span>
                            </div>    
                        <!-- <h4 style="font-weight:bold"> Currency setting
                            </h4>
                            <div style="padding:10px"> <input type="radio" name="currency" value="USD" checked="checked"> USD<br></div>
                            <div style="padding:10px"><input type="radio" name="currency" value="EUR"> EURO<br></div>
                            <div style="padding:10px"><input type="radio" name="currency" value="AUD"> Australian dollar<br></div>
                            <div style="padding:10px"><input type="radio" name="currency" value="CAD"> Canadian dollar<br></div>
                            <div style="padding:10px"><input type="radio" name="currency" value="CNH"> Chinese renminbi<br></div>
                            <div style="padding:10px"><input type="radio" name="currency" value="JPY"> Japanese yen (JPY)<br></div> -->

                            <!-- <label> for additiona currencies, please raise a custom support request </label> -->
                        </div>

                    </div>

                    <!--  -->
                    <!--  THIRD -->
                    <!--  -->
                    <!--  -->
                    <!--  -->
                    <!--  -->
                    <!--  -->
                    <!--  -->




                    <div class="third-level-section" style="display:flex">










                        <div class="Global-import-configuration-section" style="flex: 1 1 48%; margin-right:2%; margin-left:1%; margin-top:2%; padding:2%; border-radius:10px; background-color:white">
                            <h4 style="font-weight:bold">
                                Bulk categories - these catgeories will be used for bulk import
                            </h4>

                            <div id="bulkCategories"></div>
                        </div>


                        <div class="bulk-import-configuration-section" style="flex: 1 1 48%; margin-right:1%; margin-left:2%; margin-top:2%; padding:2%; border-radius:10px; background-color:white">
                            <!-- <h4 style="font-weight:bold">
                                Global advanced congfiguration
                            </h4>

                            <div style="margin-bottom:15px">
                                <span style='padding:10px; color:#899195; font-size:'><input id="includeShippingCostIntoFinalPrice" type="checkbox" name="includeShippingCostIntoFinalPrice"> Use shipping methods from eBay on the order page </span>
                            </div> -->

                            <!-- <div style="margin-bottom:15px">
                                <span style='padding:10px; color:#899195; font-size:'><input id="removeShippingFrom" type="checkbox" name="removeShippingFrom"> Remove -shipping from- from products during import </span>
                            </div> -->



                            <!-- <h4 style="font-weight:bold">
                                Calculate shipping cost based on country:
                            </h4>

                            <div style='display:flex'>
                                <div style="flex: 1 1 24%;">
                                    <div style="padding:10px"> <input type="radio" name="destination" value="US" checked="checked"> United states<br></div>
                                    <div style="padding:10px"><input type="radio" name="destination" value="CA"> Canada<br></div>
                                    <div style="padding:10px"><input type="radio" name="destination" value="FR"> France<br></div>
                                    <div style="padding:10px"><input type="radio" name="destination" value="IT"> Germany<br></div>
                                </div>

                                <div style="flex: 1 1 24%;">
                                    <div style="padding:10px"><input type="radio" name="destination" value="DE"> Australia<br></div>
                                    <div style="padding:10px"><input type="radio" name="destination" value="RU"> Russia<br></div>
                                    <div style="padding:10px"><input type="radio" name="destination" value="IN"> Inde<br></div>
                                    <div style="padding:10px"><input type="radio" name="destination" value="CN"> Chine<br></div>
                                </div>
                                <div style="flex: 1 1 24%;">

                                    <div style="padding:10px"><input type="radio" name="destination" value="ES"> Espagne<br></div>
                                    <div style="padding:10px"><input type="radio" name="destination" value="IT"> Italy<br></div>
                                    <div style="padding:10px"><input type="radio" name="destination" value="UK"> UK<br></div>
                                    <div style="padding:10px"><input type="radio" name="destination" value="VI"> Vietnam<br></div>
                                </div>

                            </div> -->


                        </div>


                    </div>







                    <!-- <div class="Global-import-configuration-section" style="flex: 1 1 48%; margin-right:2%; margin-left:1%; margin-top:2%; padding:2%; border-radius:10px; background-color:white">
                        <h4 style="font-weight:bold">
                            Bulk categoories - these catgeories will be used for bulk import
                        </h4>

                        <div id="bulkCategories"></div>
                    </div> -->






















                </div>




                <button id="saveGlobalConfiguration" class="btn btn-primary" style="margin-top:20px; width:20%; margin-left:40%"> Save configuration</button>
                <div id="savedCorrectlySection" style="color:red; display: none"> Configuration has been saved correctly </div>



            </div>


            <div class="tab-pane fade" id="pills-activation" role="tabpanel" aria-labelledby="pills-activation-tab" style="background-color:#f3f5f6">
                <div style="height:20px; color:grey"></div>

                <div style="background-color:white; padding:2%; margin:2%">
                    <!-- <div id="SystemConfiguration" style="margin-top:10px; margin-bottom:10px; padding:25px; border:1px solid black"> -->
                        <!-- <div style="color:red"><u>Current Memory_limit <?php echo ini_get('memory_limit'); ?> </u> - Expected value >= 256M</div> -->
                        <!-- <div style="color:red"><u>Current Max_execution_time <?php echo ini_get('max_execution_time'); ?></u> - Expected value >= 100</div> -->
                        <!-- <div style="color:red"><u>Current Max_input_vars <?php echo ini_get('max_input_vars'); ?></u> - Expected value >= 10000</div> -->
                    <!-- </div> -->

                    <div style="margin-tpp:20px">
                        <h4> Activate your license from here</h4>
                        <input id="licenseValue" placeholder="please paste your license received by email here" class="form-control" style="width:100% margin-top:20px" />
                        <button class="btn btn-primary" style="width:100%" id="titiToto"> Check and Activate </button>
                    </div>
                </div>
                <div style="height:20px; color:grey"></div>

            </div>




            <div class="tab-pane fade" id="pills-sync" role="tabpanel" aria-labelledby="pills-sync-tab" style="background-color:#f3f5f6">
                <div style="height:20px; color:grey"></div>

                <div style="background-color:white; padding:2%; margin:2%">
                    <!-- <label style="padding:10px; width:98%; background-color:#337ab7; color:white; border-radius: 5px; margin-top: 20px; -->

                    <!-- Update products by categories -->
                    <!-- </label> -->
                    <!-- <label class="currencyDetails" style="margin-top:10px; padding:10px; width:98%; background-color:#f3f5f6;color:black; border-radius: 5px;">
                           
                    </label> -->
                    <!-- <div id='categories-to-update'></div> -->

                    <table id="table-categories" class="table table-striped">
                        <thead>
                            <tr>
                                <th>id</th>

                                <th>Name</th>
                                <th>Number of products</th>
                                <th>Update Products</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>


                </div>

                <!-- <div class="progress md-progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div> -->

                <h4 id="productUpdatedCount" style="margin-top:10px; margin-bottom:10px; color:green; padding:5px"></h4>

                <div class="log-sync-product" style="background-color:white; padding:5px; max-height:500px; overflow-y:scroll">


                </div>

            </div>














            <div class="tab-pane fade" id="go-pro" role="tabpanel" aria-labelledby="go-pro-products">




<button class="btn btn-primary" style="width:20%; margin-left:40%; margin-top:15px; "><a class="fa fa-star fa-3x" style="color:white" href="https://wooshark.com/ebay" target="_blank"> GO PRO from here</a> </button>



<div>
<iframe width="48%" height="315" src="https://www.youtube.com/embed/UNpZ0oQTJoE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    
    <iframe width="48%" height="315" src="https://www.youtube.com/embed/EoFKS9FOL4c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>


<div style="display:flex">
    <h4 style="    font-family: inherit; text-align:center; flex: 1 1 20%; margin:2%;    border: 1px solid #cbbfbf; padding:2%; border-radius:10px; background-color:white">
        chrome extension & wordpress plugin
    </h4>
    <h4 style="    font-family: inherit; text-align:center; flex: 1 1 20%; margin:2%;    border: 1px solid #cbbfbf; padding:2%; border-radius:10px; background-color:white">
        Multi stores support license
    </h4>
    <h4 style="    font-family: inherit; text-align:center; flex: 1 1 20%; margin:2%;    border: 1px solid #cbbfbf; padding:2%; border-radius:10px; background-color:white">
        Markup price formula
    </h4>
    <h4 style="    font-family: inherit; text-align:center; flex: 1 1 20%; margin:2%;    border: 1px solid #cbbfbf; padding:2%; border-radius:10px; background-color:white">
        reate and import reviews (content, images, rating, date, email and reviewer)
    </h4>
    <h4 style="    font-family: inherit; text-align:center; flex: 1 1 20%; margin:2%;    border: 1px solid #cbbfbf; padding:2%; border-radius:10px; background-color:white">
        Unlimited product import (no ROBOTS allowed max import 600 items per day)
    </h4>
</div>



<div style="display:flex">
    <h4 style="    font-family: inherit; text-align:center; flex: 1 1 20%; margin:2%;    border: 1px solid #cbbfbf; padding:2%; border-radius:10px; background-color:white">
        Modal to customize product details before import.
    </h4>
    <h4 style="    font-family: inherit; text-align:center; flex: 1 1 20%; margin:2%;    border: 1px solid #cbbfbf; padding:2%; border-radius:10px; background-color:white">
        Auto update stock and price
    </h4>
    <h4 style="    font-family: inherit; text-align:center; flex: 1 1 20%; margin:2%;    border: 1px solid #cbbfbf; padding:2%; border-radius:10px; background-color:white">
        Auto update product availability
    </h4>
    <h4 style="    font-family: inherit; text-align:center; flex: 1 1 20%; margin:2%;    border: 1px solid #cbbfbf; padding:2%; border-radius:10px; background-color:white">
        Bulk import with global import configuration
    </h4>
    <h4 style="    font-family: inherit; text-align:center; flex: 1 1 20%; margin:2%;    border: 1px solid #cbbfbf; padding:2%; border-radius:10px; background-color:white">
        import Shipping methods and cost
    </h4>
</div>



<div style="display:flex">
    <h4 style="    font-family: inherit; text-align:center; flex: 1 1 20%; margin:2%;    border: 1px solid #cbbfbf; padding:2%; border-radius:10px; background-color:white">

    Link to visit original product url
    </h4>
    <h4 style="    font-family: inherit; text-align:center; flex: 1 1 20%; margin:2%;    border: 1px solid #cbbfbf; padding:2%; border-radius:10px; background-color:white">
        support almost all ebay domains and currencies automatically
    </h4>
    <h4 style="    font-family: inherit; text-align:center; flex: 1 1 20%; margin:2%;    border: 1px solid #cbbfbf; padding:2%; border-radius:10px; background-color:white">
        apply charm pricing .99 and .00
    </h4>
    <h4 style="    font-family: inherit; text-align:center; flex: 1 1 20%; margin:2%;    border: 1px solid #cbbfbf; padding:2%; border-radius:10px; background-color:white">
        import variations images
    </h4>
    <h4 style="    font-family: inherit; text-align:center; flex: 1 1 20%; margin:2%;    border: 1px solid #cbbfbf; padding:2%; border-radius:10px; background-color:white">
        Edit images, crop, resize, add border using lunapic editor
    </h4>
</div>



<div style="display:flex">
    
    
    <h4 style="    font-family: inherit; text-align:center; flex: 1 1 20%; margin:2%;    border: 1px solid #cbbfbf; padding:2%; border-radius:10px; background-color:white">
        Edit description, remove images, remove text, add text, format text, etc ..
    </h4>
   
    <h4 style="    font-family: inherit; text-align:center; flex: 1 1 20%; margin:2%;    border: 1px solid #cbbfbf; padding:2%; border-radius:10px; background-color:white">
        Advanced error handling.
    </h4>
</div>

</div>







            <div id="modal-container"> </div>

            <!-- <button type="button" style="margin:10px; "  class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg"> Import reviews to product</button> -->
            <div class="modal fade bd-example-modal-lg" id="myModalReviews" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style="z-index:99999">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div class="modal-body">
                            <button type="button" style="width:25%; margin-top:10px; display:block" class="btn btn-primary" id="addReview" style="width:50%;margin-top:10px"> Add Review</button>

                            <div id="customReviews" style="overflow-y:scroll;height:500px">
                                <table id="table-reviews" class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Review</th>
                                            <th>Username</th>
                                            <th>email</th>
                                            <th>Date creation</th>
                                            <th>Rating</th>
                                            <th>Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" id="confirmReviewInsertion" class="btn btn-primary" data-dismiss="modal">Insert Reviews</button>

                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <?php

                }

                /**
                 * Helper-function outputs the correct form element (input tag, select tag) for the given item
                 * @param  $aOptionKey string name of the option (un-prefixed)
                 * @param  $aOptionMeta mixed meta-data for $aOptionKey (either a string display-name or an array(display-name, option1, option2, ...)
                 * @param  $savedOptionValue string current value for $aOptionKey
                 * @return void
                 */
                protected function createFormControl($aOptionKey, $aOptionMeta, $savedOptionValue)
                {
                    if (is_array($aOptionMeta) && count($aOptionMeta) >= 2) { // Drop-down list
                        $choices = array_slice($aOptionMeta, 1);
                        ?>
                <p><select name="<?php echo $aOptionKey ?>" id="<?php echo $aOptionKey ?>">
                        <?php
                                    foreach ($choices as $aChoice) {
                                        $selected = ($aChoice == $savedOptionValue) ? 'selected' : '';
                                        ?>
                            <option value="<?php echo $aChoice ?>" <?php echo $selected ?>><?php echo $this->getOptionValueI18nString($aChoice) ?></option>
                        <?php
                                    }
                                    ?>
                    </select></p>
            <?php

                    } else { // Simple input field
                        ?>
                <p><input type="text" name="<?php echo $aOptionKey ?>" id="<?php echo $aOptionKey ?>" value="<?php echo esc_attr($savedOptionValue) ?>" size="50" /></p>
        <?php

              

                }
            }

            /**
             * Override this method and follow its format.
             * The purpose of this method is to provide i18n display strings for the values of options.
             * For example, you may create a options with values 'true' or 'false'.
             * In the options page, this will show as a drop down list with these choices.
             * But when the the language is not English, you would like to display different strings
             * for 'true' and 'false' while still keeping the value of that option that is actually saved in
             * the DB as 'true' or 'false'.
             * To do this, follow the convention of defining option values in getOptionMetaData() as canonical names
             * (what you want them to literally be, like 'true') and then add each one to the switch statement in this
             * function, returning the "__()" i18n name of that string.
             * @param  $optionValue string
             * @return string __($optionValue) if it is listed in this method, otherwise just returns $optionValue
             */
            protected function getOptionValueI18nString($optionValue)
            {
                switch ($optionValue) {
                    case 'true':
                        return __('true', 'woocommerce-reviews-manager');
                    case 'false':
                        return __('false', 'woocommerce-reviews-manager');

                    case 'Administrator':
                        return __('Administrator', 'woocommerce-reviews-manager');
                    case 'Editor':
                        return __('Editor', 'woocommerce-reviews-manager');
                    case 'Author':
                        return __('Author', 'woocommerce-reviews-manager');
                    case 'Contributor':
                        return __('Contributor', 'woocommerce-reviews-manager');
                    case 'Subscriber':
                        return __('Subscriber', 'woocommerce-reviews-manager');
                    case 'Anyone':
                        return __('Anyone', 'woocommerce-reviews-manager');
                }
                return $optionValue;
            }

            /**
             * Query MySQL DB for its version
             * @return string|false
             */
            protected function getMySqlVersion()
            {
                global $wpdb;
                $rows = $wpdb->get_results('select version() as mysqlversion');
                if (!empty($rows)) {
                    return $rows[0]->mysqlversion;
                }
                return false;
            }

            /**
             * If you want to generate an email address like "no-reply@your-site.com" then
             * you can use this to get the domain name part.
             * E.g.  'no-reply@' . $this->getEmailDomain();
             * This code was stolen from the wp_mail function, where it generates a default
             * from "wordpress@your-site.com"
             * @return string domain name
             */
            public function getEmailDomain()
            {
                // Get the site domain and get rid of www.
                $sitename = strtolower($_SERVER['SERVER_NAME']);
                if (substr($sitename, 0, 4) == 'www.') {
                    $sitename = substr($sitename, 4);
                }
                return $sitename;
            }
        }
