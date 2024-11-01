<?php
/*
   Plugin Name: TheShark products importer for eBay and woocommerce
   Plugin URI: http://wordpress.org/extend/plugins/woocommerce-reviews-manager/
   Version: 1.5.6
   Author: zizou1988
   Description: Import Products from eBay to woocommerce using theShark dropshipping
   Text Domain: woocommerce-reviews-manager
   License: GPLv3
  */

/*
    "WordPress Plugin Template" Copyright (C) 2018 Michael Simpson  (email : michael.d.simpson@gmail.com)

    This following part of this file is part of WordPress Plugin Template for WordPress.

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

$WoocommerceReviewsManager_minimalRequiredPhpVersion = '5.0';

/**
 * Check the PHP version and give a useful error message if the user's version is less than the required version
 * @return boolean true if version check passed. If false, triggers an error which WP will handle, by displaying
 * an error message on the Admin page
 */
function WoocommerceReviewsManager_noticePhpVersionWrong()
{
    global $WoocommerceReviewsManager_minimalRequiredPhpVersion;
    echo '<div class="updated fade">' .
        __('Error: plugin "wooshark dropshipping for ebay and woocommerce" requires a newer version of PHP to be running.',  'woocommerce-reviews-manager') .
        '<br/>' . __('Minimal version of PHP required: ', 'woocommerce-reviews-manager') . '<strong>' . $WoocommerceReviewsManager_minimalRequiredPhpVersion . '</strong>' .
        '<br/>' . __('Your server\'s PHP version: ', 'woocommerce-reviews-manager') . '<strong>' . phpversion() . '</strong>' .
        '</div>';
}


function WoocommerceReviewsManager_PhpVersionCheck()
{
    global $WoocommerceReviewsManager_minimalRequiredPhpVersion;
    if (version_compare(phpversion(), $WoocommerceReviewsManager_minimalRequiredPhpVersion) < 0) {
        add_action('admin_notices', 'WoocommerceReviewsManager_noticePhpVersionWrong');
        return false;
    }
    return true;
}


/**
 * Initialize internationalization (i18n) for this plugin.
 * References:
 *      http://codex.wordpress.org/I18n_for_WordPress_Developers
 *      http://www.wdmac.com/how-to-create-a-po-language-translation#more-631
 * @return void
 */
function WoocommerceReviewsManager_i18n_init()
{
    $pluginDir = dirname(plugin_basename(__FILE__));
    load_plugin_textdomain('woocommerce-reviews-manager', false, $pluginDir . '/languages/');
}


//////////////////////////////////
// Run initialization
/////////////////////////////////

// Initialize i18n
add_action('plugins_loadedi', 'WoocommerceReviewsManager_i18n_init');



// Initialize i18n
add_action('plugins_loadedi', 'WoocommerceReviewsManager_i18n_init');


if (WoocommerceReviewsManager_PhpVersionCheck()) {
    include_once(base64_decode('d29vY29tbWVyY2UtcmV2aWV3cy1tYW5hZ2VyX2luaXQucGhw'));
    WoocommerceReviewsManager_init(__FILE__);
    initOriginalProductUrl_for_ebay();
}
function initOriginalProductUrl_for_ebay()
{
    add_action(base64_decode('cG9zdF9zdWJtaXRib3hfbWlzY19hY3Rpb25z'), base64_decode('d29vX2FkZF9jdXN0b21fZ2VuZXJhbF9maWVsZHNfb3JpZ2luYWxQcm9kdWN0VXJsX2Zvcl9lYmF5'), 20);
    function woo_add_custom_general_fields_originalProductUrl_for_ebay()
    {
        echo base64_decode('IA0KICAgICAgICA8YnV0dG9uIHR5cGU9ImJ1dHRvbiIgc3R5bGU9Im1hcmdpbjoxMHB4OyAiICBjbGFzcz0iYnRuIGJ0bi1wcmltYXJ5IiBpZD0ib3Blbk9yaWdpbmFsUHJvZHVjdFVybCIgZGF0YS10YXJnZXQ9Ii5iZC1leGFtcGxlLW1vZGFsLWxnIj4gT3BlbiBPcmlnaW5hbCBwcm9kdWN0IHVybCAod29vc2hhcmspPC9idXR0b24+DQogICAgICAgIDxkaXYgY2xhc3M9ImxvYWRlcjIiIHN0eWxlPSJkaXNwbGF5Om5vbmUiPjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PC9kaXY+');
    }
}
function my_admin_scripts_init_for_ebay($hook_suffix)
{
    if (base64_decode('cG9zdC5waHA=') == $hook_suffix || base64_decode('cG9zdC1uZXcucGhw') == $hook_suffix) {
        wp_enqueue_style(base64_decode('Ym9vdHN0cmFwQ3Nz'), plugin_dir_url(__FILE__) . base64_decode('Y3NzL2Jvb3RzdHJhcC5taW4uY3Nz'));
        wp_enqueue_script(base64_decode('b3JpZ2luYWw='), plugin_dir_url(__FILE__) . base64_decode('anMvb3JpZ2luYWwuanM='), array(base64_decode('anF1ZXJ5')), NULL, false);
        wp_localize_script(base64_decode('b3JpZ2luYWw='), base64_decode('d29vc2hhcmtfcGFyYW1z'), array(base64_decode('YWpheHVybA==') => admin_url(base64_decode('YWRtaW4tYWpheC5waHA=')), base64_decode('bm9uY2U=') => wp_create_nonce(base64_decode('YWpheC1ub25jZQ=='))));
    }
}
add_action(base64_decode('YWRtaW5fZW5xdWV1ZV9zY3JpcHRz'), base64_decode('bXlfYWRtaW5fc2NyaXB0c19pbml0X2Zvcl9lYmF5'));
