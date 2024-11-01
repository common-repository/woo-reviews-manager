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

function WoocommerceReviewsManager_init($file)
{

  require_once('WoocommerceReviewsManager_Plugin.php');
  $aPlugin = new WoocommerceReviewsManager_Plugin();

  // Install the plugin
  // NOTE: this file gets run each time you *activate* the plugin.
  // So in WP when you "install" the plugin, all that does it dump its files in the plugin-templates directory
  // but it does not call any of its code.
  // So here, the plugin tracks whether or not it has run its install operation, and we ensure it is run only once
  // on the first activation
  if (!$aPlugin->isInstalled()) {
    $aPlugin->install();
  } else {
    // Perform any version-upgrade activities prior to activation (e.g. database changes)
    $aPlugin->upgrade();
  }

  // Add callbacks to hooks
  $aPlugin->addActionsAndFilters();

  if (!$file) {
    $file = __FILE__;
  }
  // Register the Plugin Activation Hook
  register_activation_hook($file, array(&$aPlugin, 'activate'));


  // Register the Plugin Deactivation Hook
  register_deactivation_hook($file, array(&$aPlugin, 'deactivate'));
}



// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
add_action('wp_ajax_getProductsCount_for_ebay', 'getProductsCount_FROM_WP_for_ebay');
add_action('wp_ajax_nopriv_getProductsCount_for_ebay', 'getProductsCount_FROM_WP_for_ebay');


function getProductsCount_FROM_WP_for_ebay()
{

  $args = array(
    'post_type'      => 'product',
    'post_status' => array('publish', 'draft'),
    'meta_query' => array(
      array(
        'key' => 'productUrl', //meta key name here
        'value' => '.ebay.',
        'compare' => 'LIKE',
      )
    ),
  );
  $query = new WP_Query($args);
  $total = $query->found_posts;
  wp_reset_postdata();
  wp_send_json($total);
}


function getCountOfProducts_for_ebay()
{
  $args = array(
    'post_type'      => 'product',
    'post_status' => array('publish', 'draft'),
    'meta_query' => array(
      array(
        'key' => 'isExpired',
        'value' => 'true',
        'compare' => 'LIKE',
      )
    ),
  );
  $query = new WP_Query($args);
  $total = $query['found_posts'];
  wp_reset_postdata();
  wp_send_json($total);
}


add_action('wp_ajax_getProductsCountDraft_for_ebay', 'getCountOfProducts_for_ebay');
add_action('wp_ajax_nopriv_getProductsCountDraft_for_ebay', 'getCountOfProducts_for_ebay');
add_action('wp_ajax_get_categories_for_ebay', 'get_categories_FROMWP_for_ebay');
add_action('wp_ajax_nopriv_get_categories_for_ebay', 'get_categories_FROMWP_for_ebay');

function get_categories_FROMWP_for_ebay()
{


  $categoriesArray = array();

  $orderby = 'name';
  $order = 'asc';
  $hide_empty = false;
  $cat_args = array(
    'orderby'    => $orderby,
    'order'      => $order,
    'hide_empty' => $hide_empty,
  );

  $product_categories = get_terms('product_cat', $cat_args);

  foreach ($product_categories as $product_category) {
    // if ($product_category->count > 0) {
    array_push($categoriesArray, array('name' => $product_category->name, 'count' => $product_category->count, 'term_id' => $product_category->term_id));
    // }
  }


  // $response['message'] = $post_id->get_error_message();
  wp_send_json($categoriesArray);
}






// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
function getProduct_FROMWP_for_ebay()
{
  $t0 = isset($_POST[base64_decode('cGFnZWQ=')]) ? sanitize_text_field($_POST[base64_decode('cGFnZWQ=')]) : '';
  $e1 = array(base64_decode('cG9zdF90eXBl') => base64_decode('cHJvZHVjdA=='), base64_decode('cG9zdHNfcGVyX3BhZ2U=') => 19, base64_decode('cGFnZWQ=') => $t0, base64_decode('bWV0YV9xdWVyeQ==') => array(array(base64_decode('a2V5') => base64_decode('cHJvZHVjdFVybA=='), base64_decode('dmFsdWU=') => base64_decode('ZWJheS4='), base64_decode('Y29tcGFyZQ==') => base64_decode('TElLRQ=='),)));
  $j2 = new WP_Query($e1);
  $c3 = array();
  if ($j2->have_posts()) {
    while ($j2->have_posts()) : $j2->the_post();
      $g4 = get_the_ID();
      $v5 = new WC_Product($g4);
      if (has_post_thumbnail()) {
        $p6 = get_post_thumbnail_id();
        $a7 = $p6 ? wp_get_attachment_url($p6) : '';
      }
      $c3[] = array(base64_decode('c2t1') => $v5->get_sku(), base64_decode('aWQ=') => $g4, base64_decode('aW1hZ2U=') => $a7, base64_decode('dGl0bGU=') => $v5->get_title(), base64_decode('cHJvZHVjdFVybA==') => get_post_meta($g4, base64_decode('cHJvZHVjdFVybA=='), true), base64_decode('bGFzdFVwZGF0ZWQ=') => get_post_meta($g4, base64_decode('bGFzdFVwZGF0ZWQ='), true), base64_decode('c3RhdHVz') => $v5->get_status());
    endwhile;
  } else {
    echo __(base64_decode('Tm8gcHJvZHVjdHMgZm91bmQ='));
  }
  wp_reset_postdata();
  wp_send_json($c3);
}
function insertProductInWoocommerce_for_ebay()
{
  $o8 = $_POST[base64_decode('bm9uY2U=')];
  if (isset($_POST)) {
    $o9 = isset($_POST[base64_decode('c2t1')]) ? sanitize_text_field($_POST[base64_decode('c2t1')]) : '';
    $r10 = isset($_POST[base64_decode('aW1hZ2Vz')]) ? $_POST[base64_decode('aW1hZ2Vz')] : array();
    $s11 = isset($_POST[base64_decode('Y2F0ZWdvcmllcw==')]) ? $_POST[base64_decode('Y2F0ZWdvcmllcw==')] : array();
    $d12 = isset($_POST[base64_decode('dGl0bGU=')]) ? sanitize_text_field($_POST[base64_decode('dGl0bGU=')]) : '';
    $z13 = isset($_POST[base64_decode('ZGVzY3JpcHRpb24=')]) ? $_POST[base64_decode('ZGVzY3JpcHRpb24=')] : '';
    $l14 = isset($_POST[base64_decode('cHJvZHVjdFR5cGU=')]) ? sanitize_text_field($_POST[base64_decode('cHJvZHVjdFR5cGU=')]) : base64_decode('c2ltcGxl');
    $q15 = isset($_POST[base64_decode('cmVndWxhclByaWNl')]) ? sanitize_text_field($_POST[base64_decode('cmVndWxhclByaWNl')]) : base64_decode('MA==');
    $l16 = isset($_POST[base64_decode('c2FsZVByaWNl')]) ? sanitize_text_field($_POST[base64_decode('c2FsZVByaWNl')]) : base64_decode('MA==');
    $t17 = isset($_POST[base64_decode('cXVhbnRpdHk=')]) ? sanitize_text_field($_POST[base64_decode('cXVhbnRpdHk=')]) : base64_decode('MA==');
    $q18 = isset($_POST[base64_decode('cG9zdFN0YXR1cw==')]) ? sanitize_text_field($_POST[base64_decode('cG9zdFN0YXR1cw==')]) : base64_decode('ZHJhZnQ=');
    $b19 = isset($_POST[base64_decode('dmFyaWF0aW9ucw==')]) ? $_POST[base64_decode('dmFyaWF0aW9ucw==')] : array();
    $x20 = isset($_POST[base64_decode('YXR0cmlidXRlcw==')]) ? $_POST[base64_decode('YXR0cmlidXRlcw==')] : array();
    $d21 = isset($_POST[base64_decode('cHJvZHVjdFVybA==')]) ? sanitize_text_field($_POST[base64_decode('cHJvZHVjdFVybA==')]) : '';
    $a22 = isset($_POST[base64_decode('c2hvcnREZXNjcmlwdGlvbg==')]) ? sanitize_text_field($_POST[base64_decode('c2hvcnREZXNjcmlwdGlvbg==')]) : '';
    $e23 = isset($_POST[base64_decode('aW1wb3J0VmFyaWF0aW9uSW1hZ2Vz')]) ? sanitize_text_field($_POST[base64_decode('aW1wb3J0VmFyaWF0aW9uSW1hZ2Vz')]) : '';
    $a24 = isset($_POST[base64_decode('cmV2aWV3cw==')]) ? $_POST[base64_decode('cmV2aWV3cw==')] : array();
    $c25 = isset($_POST[base64_decode('dGFncw==')]) ? $_POST[base64_decode('dGFncw==')] : array();
    $x26 = array(base64_decode('YQ==') => array(base64_decode('aHJlZg==') => array(),), base64_decode('aW1n') => array(),);
    $f27 = html_entity_decode($z13);
    if ($l14 == base64_decode('c2ltcGxl')) {
      $v5 = new WC_Product_Simple();
      if (isset($d12)) {
        $v5->set_name($d12);
      }
      if (isset($z13)) {
        $v5->set_description($z13);
      }
      if (isset($a22)) {
        $v5->set_short_description($a22);
      }
      if (isset($o9)) {
        $v5->set_sku($o9);
      }
      if (isset($q18)) {
        $v5->set_status($q18);
      }
      if (isset($q15)) {
        $v5->set_regular_price($q15);
        $v5->set_price($q15);
      }
      if (isset($t17)) {
        $v5->set_stock_quantity($t17);
        $v5->set_manage_stock(true);
      }
      if (is_array($s11) && count($s11)) {
        $v5->set_category_ids($s11);
      }
      save_product_images_for_ebay($v5, $r10);
      try {
        $y28 = $v5->save();
      } catch (Exception $h29) {
        $e30 = array(base64_decode('ZXJyb3I=') => true, base64_decode('ZXJyb3JfbXNn') => base64_decode('RXJyb3IgcmVjZWl2ZWQgd2hlbiB0cnlpbmcgdG8gaW5zZXJ0IHRoZSBwcm9kdWN0') . $h29->getMessage(), base64_decode('ZGF0YQ==') => '');
        wp_send_json($e30);
      }
      if (isset($d21)) {
        update_post_meta($y28, base64_decode('cHJvZHVjdFVybA=='), $d21);
      }
      if (isset($y28) && isset($c25) && count($c25)) {
        wp_set_object_terms($y28, $c25, base64_decode('cHJvZHVjdF90YWc='));
      }
      if (isset($y28) && isset($a24) && count($a24)) {
        foreach ($a24 as $m31) {
          $m32 = wp_insert_comment(array(base64_decode('Y29tbWVudF9wb3N0X0lE') => sanitize_text_field($y28), base64_decode('Y29tbWVudF9hdXRob3I=') => sanitize_text_field($m31[base64_decode('dXNlcm5hbWU=')]), base64_decode('Y29tbWVudF9hdXRob3JfZW1haWw=') => sanitize_text_field($m31[base64_decode('ZW1haWw=')]), base64_decode('Y29tbWVudF9hdXRob3JfdXJs') => '', base64_decode('Y29tbWVudF9jb250ZW50') => $m31[base64_decode('cmV2aWV3')], base64_decode('Y29tbWVudF90eXBl') => '', base64_decode('Y29tbWVudF9wYXJlbnQ=') => 0, base64_decode('dXNlcl9pZA==') => 5, base64_decode('Y29tbWVudF9hdXRob3JfSVA=') => '', base64_decode('Y29tbWVudF9hZ2VudA==') => '', base64_decode('Y29tbWVudF9kYXRl') => $m31[base64_decode('ZGF0ZWNyZWF0aW9u')], base64_decode('Y29tbWVudF9hcHByb3ZlZA==') => 1,));
          update_comment_meta($m32, base64_decode('cmF0aW5n'), sanitize_text_field($m31[base64_decode('cmF0aW5n')]));
        }
      }
      $e30 = array(base64_decode('ZXJyb3I=') => false, base64_decode('ZXJyb3JfbXNn') => '', base64_decode('ZGF0YQ==') => base64_decode('UHJvZHVjdCBpbnNlcnRlZCBzdWNjZXNzZnVsbHk='));
      wp_send_json($e30);
    } else {
      try {
        $v5 = new WC_Product_Variable();
        if (isset($d12)) {
          $v5->set_name($d12);
        }
        if (isset($z13)) {
          $v5->set_description($z13);
        }
        if (isset($a22)) {
          $v5->set_short_description($a22);
        }
        if (isset($o9)) {
          $v5->set_sku($o9);
        }
        if (isset($q18)) {
          $v5->set_status($q18);
        }
        if (is_array($s11) && count($s11)) {
          $v5->set_category_ids($s11);
        }
        save_product_images_for_ebay($v5, $r10);
        $j33 = array();
        if (is_array($x20) && count($x20)) {
          foreach ($x20 as $j34) {
            $k35 = $j34[base64_decode('dmFsdWVz')];
            $o36 = $j34[base64_decode('bmFtZQ==')];
            $m37 = $j34[base64_decode('dmFyaWF0aW9u')];
            $b38 = new WC_Product_Attribute();
            $b38->set_name($o36);
            $b38->set_options($k35);
            $b38->set_visible(1);
            if ($m37 == base64_decode('dHJ1ZQ==')) {
              $b38->set_variation(1);
            } else {
              $b38->set_variation(0);
            }
            array_push($j33, $b38);
          }
          $v5->set_attributes($j33);
        } else {
          $e30 = array(base64_decode('ZXJyb3I=') => true, base64_decode('ZXJyb3JfbXNn') => base64_decode('TWlzc2luZyBhdHRyaWJ1dGVzIG9yIHZhcmlhdGlvbnMsIGNvdWxkIG5vdCBpbnNlcnQgcHJvZHVjdCA='), base64_decode('ZGF0YQ==') => '');
          wp_send_json($e30);
        }
      } catch (Exception $y39) {
        $e30 = array(base64_decode('ZXJyb3I=') => true, base64_decode('ZXJyb3JfbXNn') => base64_decode('RXJyb3IgcmVjZWl2ZWQgd2hlbiB0cnlpbmcgdG8gaW5zZXJ0IHRoZSBwcm9kdWN0') . $y39->getMessage(), base64_decode('ZGF0YQ==') => '');
        wp_send_json($e30);
      }
      try {
        $y28 = $v5->save();
      } catch (Exception $h29) {
        $e30 = array(base64_decode('ZXJyb3I=') => true, base64_decode('ZXJyb3JfbXNn') => base64_decode('RXJyb3IgcmVjZWl2ZWQgd2hlbiB0cnlpbmcgdG8gaW5zZXJ0IHRoZSBwcm9kdWN0') . $y39->getMessage(), base64_decode('ZGF0YQ==') => '');
        wp_send_json($e30);
      }
      if (isset($d21)) {
        update_post_meta($y28, base64_decode('cHJvZHVjdFVybA=='), $d21);
      }
      if (isset($y28) && isset($c25) && count($c25)) {
        wp_set_object_terms($y28, $c25, base64_decode('cHJvZHVjdF90YWc='));
      }
      if (isset($y28) && isset($a24) && count($a24)) {
        foreach ($a24 as $m31) {
          $m32 = wp_insert_comment(array(base64_decode('Y29tbWVudF9wb3N0X0lE') => sanitize_text_field($y28), base64_decode('Y29tbWVudF9hdXRob3I=') => sanitize_text_field($m31[base64_decode('dXNlcm5hbWU=')]), base64_decode('Y29tbWVudF9hdXRob3JfZW1haWw=') => sanitize_text_field($m31[base64_decode('ZW1haWw=')]), base64_decode('Y29tbWVudF9hdXRob3JfdXJs') => '', base64_decode('Y29tbWVudF9jb250ZW50') => $m31[base64_decode('cmV2aWV3')], base64_decode('Y29tbWVudF90eXBl') => '', base64_decode('Y29tbWVudF9wYXJlbnQ=') => 0, base64_decode('dXNlcl9pZA==') => 5, base64_decode('Y29tbWVudF9hdXRob3JfSVA=') => '', base64_decode('Y29tbWVudF9hZ2VudA==') => '', base64_decode('Y29tbWVudF9kYXRl') => $m31[base64_decode('ZGF0ZWNyZWF0aW9u')], base64_decode('Y29tbWVudF9hcHByb3ZlZA==') => 1,));
          update_comment_meta($m32, base64_decode('cmF0aW5n'), sanitize_text_field($m31[base64_decode('cmF0aW5n')]));
        }
      }
      if (is_array($b19) && count($b19)) {
        foreach ($b19 as $e40) {
          $n41 = $e40[base64_decode('YXR0cmlidXRlc1ZhcmlhdGlvbnM=')];
          $o42 = new WC_Product_Variation();
          $o42->set_parent_id($y28);
          if (!empty($e40[base64_decode('U0tV')]) && $e40[base64_decode('U0tV')] !== 'undefined') {
            $o42->set_sku($e40[base64_decode('U0tV')]);
          }
          if (!empty(sanitize_text_field($e40[base64_decode('cmVndWxhclByaWNl')]))) {
            $o42->set_regular_price($e40[base64_decode('cmVndWxhclByaWNl')]);
          }
          if (!empty(sanitize_text_field($e40[base64_decode('c2FsZVByaWNl')]))) {
            $o42->set_sale_price($e40[base64_decode('c2FsZVByaWNl')]);
          }
          $x43 = sanitize_text_field($e40[base64_decode('YXZhaWxRdWFudGl0eQ==')]);
          if (isset($x43)) {
            $o42->set_manage_stock(true);
            $o42->set_stock_quantity($x43);
            $o42->set_stock_status(base64_decode('aW5zdG9jaw=='));
          }
          $m44 = array();
          foreach ($n41 as $r45) {
            $m44[$r45[base64_decode('bmFtZQ==')]] = $r45[base64_decode('dmFsdWU=')];
            $l46 = array();
            if (($e23 == base64_decode('dHJ1ZQ=='))) {
              $g47 = $r45[base64_decode('aW1hZ2U=')];
              if (isset($g47)) {
                $t48 = false;
                foreach ($l46 as $g49) {
                  if ($g49->$v50 == $g47) {
                    $t48 = $g49->$v51;
                    break;
                  }
                }
                if ($t48 != false) {
                  $o42->set_image_id($t48);
                } else {
                  $i52 = save_single_variation_image($o42, $g47);
                  array_push($l46, array(base64_decode('aW1hZ2U=') => $g47, base64_decode('aWQ=') => $i52));
                  if (isset($i52)) {
                    $o42->set_image_id($i52);
                  }
                }
              }
            }
          };
          $o42->set_attributes($m44);
          try {
            $o42->save();
          } catch (Exception $h29) {
            echo $h29;
          }
        }
      }
      $e30 = array(base64_decode('ZXJyb3I=') => false, base64_decode('ZXJyb3JfbXNn') => '', base64_decode('ZGF0YQ==') => base64_decode('UHJvZHVjdCBpbnNlcnRlZCBzdWNjZXNzZnVsbHk='));
      wp_send_json($e30);
    }
  }
}
function getProductsDraft_for_ebay()
{
  $t0 = isset($_POST[base64_decode('cGFnZWQ=')]) ? sanitize_text_field($_POST[base64_decode('cGFnZWQ=')]) : '';
  $e1 = array(base64_decode('cG9zdF90eXBl') => base64_decode('cHJvZHVjdA=='), base64_decode('cG9zdHNfcGVyX3BhZ2U=') => 19, base64_decode('cGFnZWQ=') => $t0, base64_decode('bWV0YV9xdWVyeQ==') => array(array(base64_decode('a2V5') => base64_decode('aXNFeHBpcmVkX2ViYXk='), base64_decode('dmFsdWU=') => base64_decode('dHJ1ZQ=='), base64_decode('Y29tcGFyZQ==') => base64_decode('TElLRQ=='),)));
  $j2 = new WP_Query($e1);
  $c3 = array();
  if ($j2->have_posts()) {
    while ($j2->have_posts()) : $j2->the_post();
      $g4 = get_the_ID();
      $v5 = new WC_Product($g4);
      if (has_post_thumbnail()) {
        $p6 = get_post_thumbnail_id();
        $a7 = $p6 ? wp_get_attachment_url($p6) : '';
      }
      $c3[] = array(base64_decode('c2t1') => $v5->get_sku(), base64_decode('aWQ=') => $g4, base64_decode('aW1hZ2U=') => $a7, base64_decode('dGl0bGU=') => $v5->get_title(), base64_decode('cHJvZHVjdFVybA==') => get_post_meta($g4, base64_decode('cHJvZHVjdFVybA=='), true));
    endwhile;
  } else {
    echo __(base64_decode('Tm8gcHJvZHVjdHMgZm91bmQ='));
  }
  wp_reset_postdata();
  wp_send_json($c3);
}
function setProductToDraft_for_ebay()
{
  $y28 = isset($_POST[base64_decode('cG9zdF9pZA==')]) ? sanitize_text_field($_POST[base64_decode('cG9zdF9pZA==')]) : '';
  if (isset($y28)) {
    $v53 = update_post_meta($y28, base64_decode('aXNFeHBpcmVk'), base64_decode('dHJ1ZQ=='));
    $c54 = array(base64_decode('SUQ=') => $y28, base64_decode('cG9zdF9zdGF0dXM=') => base64_decode('ZHJhZnQ='));
    wp_update_post($c54);
  }
  wp_send_json(array(base64_decode('cmVzdWx0') => $v53));
}
function updateProductSimple_for_ebay()
{
  $b55 = isset($_POST[base64_decode('bmV3UHJvZHVjdA==')]) ? $_POST[base64_decode('bmV3UHJvZHVjdA==')] : array();
  if (isset($b55) && count($b55)) {
    foreach ($b55 as $v5) {
      if (isset($v5[base64_decode('aWQ=')])) {
        if (isset($v5[base64_decode('cmVndWxhclByaWNl')])) {
          update_post_meta($v5[base64_decode('aWQ=')], base64_decode('X3JlZ3VsYXJfcHJpY2U='), $v5[base64_decode('cmVndWxhclByaWNl')]);
          update_post_meta($v5[base64_decode('aWQ=')], base64_decode('X3ByaWNl'), $v5[base64_decode('cmVndWxhclByaWNl')]);
        }
        if (isset($v5[base64_decode('YXZhaWxRdWFudGl0eQ==')]) && $v5[base64_decode('YXZhaWxRdWFudGl0eQ==')] > -1) {
          update_post_meta($v5[base64_decode('aWQ=')], base64_decode('X3N0b2Nr'), $v5[base64_decode('YXZhaWxRdWFudGl0eQ==')]);
        }
        $e30 = array(base64_decode('ZXJyb3I=') => false, base64_decode('ZXJyb3JfbXNn') => '', base64_decode('ZGF0YQ==') => array(base64_decode('c3VjY2Vzcw==') => true, base64_decode('c2t1') => $v5[base64_decode('cHJvZHVjdFNrdQ==')]));
        wp_send_json($e30);
      } else {
        $e30 = array(base64_decode('ZXJyb3I=') => false, base64_decode('ZXJyb3JfbXNn') => '', base64_decode('ZGF0YQ==') => array(base64_decode('c3VjY2Vzcw==') => true, base64_decode('c2t1') => $v5[base64_decode('cHJvZHVjdFNrdQ==')]),);
        wp_send_json($e30);
      }
    }
  }
}
function updateProductVariations_for_ebay()
{
  $o56 = array();
  $j57 = array();
  $x58 = array();
  $h59 = isset($_POST[base64_decode('dXBkYXRlVmFyaWF0aW9uc09uU2VydmVy')]) ? $_POST[base64_decode('dXBkYXRlVmFyaWF0aW9uc09uU2VydmVy')] : array();
  $s60 = isset($_POST[base64_decode('dG90YWxPbGRWYXJpYXRpb25z')]) ? $_POST[base64_decode('dG90YWxPbGRWYXJpYXRpb25z')] : 1;
  if (isset($h59) && count($h59)) {
    foreach ($h59 as $v5) {
      if (isset($v5[base64_decode('dmFyaWF0aW9uX2lk')])) {
        $y61 = false;
        $n62 = false;
        $c63 = false;
        if (isset($v5[base64_decode('c2FsZVByaWNl')])) {
          $y61 = update_post_meta($v5[base64_decode('dmFyaWF0aW9uX2lk')], base64_decode('X3NhbGVfcHJpY2U='), $v5[base64_decode('c2FsZVByaWNl')]);
        }
        if (isset($v5[base64_decode('cmVndWxhclByaWNl')])) {
          $n62 = update_post_meta($v5[base64_decode('dmFyaWF0aW9uX2lk')], base64_decode('X3JlZ3VsYXJfcHJpY2U='), $v5[base64_decode('cmVndWxhclByaWNl')]);
          update_post_meta($v5[base64_decode('dmFyaWF0aW9uX2lk')], base64_decode('X3ByaWNl'), $v5[base64_decode('cmVndWxhclByaWNl')]);
          wc_delete_product_transients($v5[base64_decode('dmFyaWF0aW9uX2lk')]);
        }
        if (isset($v5[base64_decode('YXZhaWxRdWFudGl0eQ==')]) && $v5[base64_decode('YXZhaWxRdWFudGl0eQ==')] > -1) {
          $c63 = update_post_meta($v5[base64_decode('dmFyaWF0aW9uX2lk')], base64_decode('X3N0b2Nr'), $v5[base64_decode('YXZhaWxRdWFudGl0eQ==')]);
        }
        if (isset($v5[base64_decode('YXZhaWxRdWFudGl0eQ==')]) && $v5[base64_decode('YXZhaWxRdWFudGl0eQ==')] == 0) {
          array_push($x58, $v5[base64_decode('dmFyaWF0aW9uX2lk')]);
        } else {
          array_push($j57, $v5[base64_decode('dmFyaWF0aW9uX2lk')]);
        }
      }
    }
  }
  $e30 = array(base64_decode('ZXJyb3I=') => false, base64_decode('ZXJyb3JfbXNn') => '', base64_decode('ZGF0YQ==') => array(base64_decode('dG90YWxPbGRWYXJpYXRpb25z') => $s60, base64_decode('ZXJyb3I=') => $o56, base64_decode('c3VjY2Vzcw==') => $j57, base64_decode('b3V0T2ZTdG9jaw==') => $x58));
  wp_send_json($e30);
}
function getOldProductDetails_for_ebay()
{
  $y28 = isset($_POST[base64_decode('cG9zdF9pZA==')]) ? sanitize_text_field($_POST[base64_decode('cG9zdF9pZA==')]) : '';
  $v5 = wc_get_product($y28);
  if ($v5->get_type() == base64_decode('c2ltcGxl')) {
    $q15 = $v5->get_regular_price();
    $l16 = $v5->get_sale_price();
    $t17 = $v5->get_stock_quantity();
    wp_send_json(array(base64_decode('dHlwZQ==') => base64_decode('c2ltcGxl'), base64_decode('cXVhbnRpdHk=') => $t17, base64_decode('cmVndWxhclByaWNl') => $q15, base64_decode('c2FsZVByaWNl') => $l16));
  }
  if ($v5->get_type() == base64_decode('dmFyaWFibGU=')) {
    $p64 = $v5->get_available_variations();
    wp_send_json($p64);
  }
}
function searchProductBySku_for_ebay()
{
  $l65 = isset($_POST[base64_decode('c2VhcmNoU2t1VmFsdWU=')]) ? sanitize_text_field($_POST[base64_decode('c2VhcmNoU2t1VmFsdWU=')]) : '';
  if (isset($l65)) {
    $e1 = array(base64_decode('cG9zdF90eXBl') => base64_decode('cHJvZHVjdA=='), base64_decode('cG9zdHNfcGVyX3BhZ2U=') => 1, base64_decode('bWV0YV9xdWVyeQ==') => array(array(base64_decode('a2V5') => base64_decode('X3NrdQ=='), base64_decode('dmFsdWU=') => $l65, base64_decode('Y29tcGFyZQ==') => base64_decode('TElLRQ==')), array(base64_decode('a2V5') => base64_decode('cHJvZHVjdFVybA=='), base64_decode('dmFsdWU=') => base64_decode('ZWJheS4='), base64_decode('Y29tcGFyZQ==') => base64_decode('TElLRQ=='),)));
    $j2 = new WP_Query($e1);
    $c3 = array();
    if ($j2->have_posts()) {
      while ($j2->have_posts()) : $j2->the_post();
        $g4 = get_the_ID();
        $v5 = new WC_Product($g4);
        if (has_post_thumbnail()) {
          $p6 = get_post_thumbnail_id();
          $a7 = $p6 ? wp_get_attachment_url($p6) : '';
        }
        $c3[] = array(base64_decode('c2t1') => $v5->get_sku(), base64_decode('aWQ=') => $g4, base64_decode('aW1hZ2U=') => $a7, base64_decode('dGl0bGU=') => $v5->get_title(), base64_decode('cHJvZHVjdFVybA==') => get_post_meta($g4, base64_decode('cHJvZHVjdFVybA=='), true));
      endwhile;
    } else {
      echo __(base64_decode('Tm8gcHJvZHVjdHMgZm91bmQ='));
    }
    wp_reset_postdata();
    wp_send_json($c3);
  } else {
    $e30 = array(base64_decode('ZXJyb3I=') => true, base64_decode('ZXJyb3JfbXNn') => base64_decode('Y2Fubm90IGZpbmQgcmVzdWx0IGZvciB0aGUgaW50cm9kdWNlZCBza3UgdmFsdWUsIHBsZWFzZSBtYWtlIHN1cmUgdGhlIHByb2R1Y3QgaXMgaW1wb3J0ZWQgdXNpbmcgd29vc2hhcms='), base64_decode('ZGF0YQ==') => '');
    wp_send_json($e30);
  }
}
function removeProductFromShop_for_ebay()
{
  $y28 = isset($_POST[base64_decode('cG9zdF9pZA==')]) ? sanitize_text_field($_POST[base64_decode('cG9zdF9pZA==')]) : '';
  if (isset($y28)) {
    $b66 = wp_delete_post($y28);
    if ($b66 != false && isset($b66)) {
      $e30 = array(base64_decode('ZXJyb3I=') => false, base64_decode('ZXJyb3JfbXNn') => '', base64_decode('ZGF0YQ==') => base64_decode('cmVtb3ZlZCBzdWNjZXNzZnVsbHk='));
      wp_send_json($e30);
    } else {
      $e30 = array(base64_decode('ZXJyb3I=') => trye, base64_decode('ZXJyb3JfbXNn') => base64_decode('ZXJyb3Igd2hpbGUgcmVtb3ZpbmcgdGhlIHByb2R1Y3Q='), base64_decode('ZGF0YQ==') => '');
      wp_send_json($e30);
    }
  }
}
function insertReviewsIntoProduct_for_ebay()
{
  $y28 = isset($_POST[base64_decode('cG9zdF9pZA==')]) ? sanitize_text_field($_POST[base64_decode('cG9zdF9pZA==')]) : '';
  $a24 = isset($_POST[base64_decode('cmV2aWV3cw==')]) ? ($_POST[base64_decode('cmV2aWV3cw==')]) : array();
  $h67 = array();
  if (isset($y28) && isset($a24) && count($a24)) {
    foreach ($a24 as $m31) {
      $m32 = wp_insert_comment(array(base64_decode('Y29tbWVudF9wb3N0X0lE') => sanitize_text_field($y28), base64_decode('Y29tbWVudF9hdXRob3I=') => sanitize_text_field($m31[base64_decode('dXNlcm5hbWU=')]), base64_decode('Y29tbWVudF9hdXRob3JfZW1haWw=') => sanitize_text_field($m31[base64_decode('ZW1haWw=')]), base64_decode('Y29tbWVudF9hdXRob3JfdXJs') => '', base64_decode('Y29tbWVudF9jb250ZW50') => sanitize_text_field($m31[base64_decode('cmV2aWV3')]), base64_decode('Y29tbWVudF90eXBl') => '', base64_decode('Y29tbWVudF9wYXJlbnQ=') => 0, base64_decode('dXNlcl9pZA==') => 5, base64_decode('Y29tbWVudF9hdXRob3JfSVA=') => '', base64_decode('Y29tbWVudF9hZ2VudA==') => '', base64_decode('Y29tbWVudF9kYXRl') => date(base64_decode('WS1tLWQgSDppOnM=')), base64_decode('Y29tbWVudF9hcHByb3ZlZA==') => 1,));
      $j68 = update_comment_meta($m32, base64_decode('cmF0aW5n'), sanitize_text_field($m31[base64_decode('cmF0aW5n')]));
      if ($j68 != false && isset($j68)) {
        array_push($h67, $m32);
      }
    }
    wp_send_json(array(base64_decode('aW5zZXJ0ZWRTdWNjZXNzZnVsbHk=') => $h67));
  }
}
function getAlreadyImportedProducts_for_ebay()
{
  $n69 = isset($_POST[base64_decode('bGlzdE9mU2t1cw==')]) ? ($_POST[base64_decode('bGlzdE9mU2t1cw==')]) : array();
  if (isset($n69) && count($n69)) {
    $e1 = array(base64_decode('cG9zdF90eXBl') => base64_decode('cHJvZHVjdA=='), base64_decode('cG9zdHNfcGVyX3BhZ2U=') => 40, base64_decode('bWV0YV9xdWVyeQ==') => array(array(base64_decode('a2V5') => base64_decode('X3NrdQ=='), base64_decode('dmFsdWU=') => $n69, base64_decode('Y29tcGFyZQ==') => base64_decode('SU4=')), array(base64_decode('a2V5') => base64_decode('cHJvZHVjdFVybA=='), base64_decode('dmFsdWU=') => base64_decode('ZWJheS4='), base64_decode('Y29tcGFyZQ==') => base64_decode('TElLRQ=='),)));
    $j2 = new WP_Query($e1);
    $c3 = array();
    if ($j2->have_posts()) {
      while ($j2->have_posts()) : $j2->the_post();
        $g4 = get_the_ID();
        $v5 = new WC_Product($g4);
        $c3[] = array(base64_decode('c2t1') => $v5->get_sku(), base64_decode('aWQ=') => $g4, base64_decode('dGl0bGU=') => $v5->get_title(), base64_decode('cHJvZHVjdFVybA==') => get_post_meta($g4, base64_decode('cHJvZHVjdFVybA=='), true));
      endwhile;
    } else {
      echo __(base64_decode('Tm8gcHJvZHVjdHMgZm91bmQ='));
    }
    wp_reset_postdata();
    wp_send_json($c3);
  }
}
function getSKuAbdUrlByCategory_for_ebay()
{
  $o70 = isset($_POST[base64_decode('Y2F0ZWdvcnlJZA==')]) ? ($_POST[base64_decode('Y2F0ZWdvcnlJZA==')]) : array();
  if (isset($o70)) {
    $e1 = array(base64_decode('cG9zdF90eXBl') => base64_decode('cHJvZHVjdA=='), base64_decode('cG9zdHNfcGVyX3BhZ2U=') => -1, base64_decode('cG9zdF9zdGF0dXM=') => array(base64_decode('cHVibGlzaA==')), base64_decode('bWV0YV9xdWVyeQ==') => array(array(base64_decode('a2V5') => base64_decode('cHJvZHVjdFVybA=='), base64_decode('dmFsdWU=') => base64_decode('ZWJheS4='), base64_decode('Y29tcGFyZQ==') => base64_decode('TElLRQ=='),)), base64_decode('dGF4X3F1ZXJ5') => array(array(base64_decode('dGF4b25vbXk=') => base64_decode('cHJvZHVjdF9jYXQ='), base64_decode('ZmllbGQ=') => base64_decode('dGVybV9pZA=='), base64_decode('dGVybXM=') => $o70, base64_decode('b3BlcmF0b3I=') => base64_decode('SU4='))));
    $j2 = new WP_Query($e1);
    $c3 = array();
    if ($j2->have_posts()) {
      while ($j2->have_posts()) : $j2->the_post();
        $g4 = get_the_ID();
        $v5 = new WC_Product($g4);
        $c3[] = array(sku => $v5->get_sku(), id => $g4, productUrl => get_post_meta($g4, base64_decode('cHJvZHVjdFVybA=='), true));
      endwhile;
    } else {
      echo __(base64_decode('Tm8gcHJvZHVjdHMgZm91bmQ='));
    }
    wp_reset_postdata();
    wp_send_json($c3);
  }
}
function searchCategoryByName_for_ebay()
{
  $w71 = isset($_POST[base64_decode('c2VhcmNoQ2F0ZWdvcnlCeU5hbWVJbnB1dA==')]) ? ($_POST[base64_decode('c2VhcmNoQ2F0ZWdvcnlCeU5hbWVJbnB1dA==')]) : array();
  $c72 = get_terms(base64_decode('Y2F0ZWdvcnk='), array(base64_decode('c2VhcmNo') => $w71));
  wp_send_json($c72);
}
function upload_image_for_ebay($a73)
{
  include_once(ABSPATH . base64_decode('d3AtYWRtaW4vaW5jbHVkZXMvaW1hZ2UucGhw'));
  $s74 = end(explode(base64_decode('Lw=='), getimagesize($a73)[base64_decode('bWltZQ==')]));
  $k75 = date(base64_decode('ZG1Z')) . '' . (int) microtime(true);
  $l76 = $k75 . base64_decode('Lg==') . $s74;
  $t77 = wp_upload_dir();
  $g78 = $t77[base64_decode('cGF0aA==')] . base64_decode('Lw==') . $l76;
  $i79 = file_get_contents($a73);
  $y80 = fopen($g78, base64_decode('dw=='));
  fwrite($y80, $i79);
  fclose($y80);
  $f81 = wp_check_filetype(basename($l76), null);
  $g82 = array(base64_decode('cG9zdF9taW1lX3R5cGU=') => $f81[base64_decode('dHlwZQ==')], base64_decode('cG9zdF90aXRsZQ==') => $l76, base64_decode('cG9zdF9jb250ZW50') => '', base64_decode('cG9zdF9zdGF0dXM=') => base64_decode('aW5oZXJpdA=='));
  $r83 = wp_insert_attachment($g82, $g78);
  return $r83;
}
function save_product_images_for_ebay($v5, $r10)
{
  if (is_array($r10)) {
    $z84 = array();
    foreach ($r10 as $b85 => $a7) {
      if (isset($a7)) {
        $c86 = wc_rest_upload_image_from_url(esc_url_raw($a7));
        if (is_wp_error($c86)) {
          if (!apply_filters(base64_decode('d29vY29tbWVyY2VfcmVzdF9zdXBwcmVzc19pbWFnZV91cGxvYWRfZXJyb3I='), false, $c86, $v5->get_id(), $r10)) {
            throw new WC_REST_Exception(base64_decode('d29vY29tbWVyY2VfcHJvZHVjdF9pbWFnZV91cGxvYWRfZXJyb3I='), $c86->get_error_message(), 400);
          } else {
            continue;
          }
        }
        $h87 = wc_rest_set_uploaded_image_as_attachment($c86, $v5->get_id());
      }
      if ($b85 == 0) {
        $v5->set_image_id($h87);
      } else {
        array_push($z84, $h87);
      }
    }
    if (!empty($z84)) {
      $v5->set_gallery_image_ids($z84);
    }
  } else {
    $v5->set_image_id('');
    $v5->set_gallery_image_ids(array());
  }
  return $v5;
}
function save_single_variation_image_for_ebay($v5, $a7)
{
  $z84 = array();
  if (isset($a7)) {
    $c86 = wc_rest_upload_image_from_url(esc_url_raw($a7));
    if (is_wp_error($c86)) {
      if (!apply_filters(base64_decode('d29vY29tbWVyY2VfcmVzdF9zdXBwcmVzc19pbWFnZV91cGxvYWRfZXJyb3I='), false, $c86, $v5->get_id(), $a7)) {
        throw new WC_REST_Exception(base64_decode('d29vY29tbWVyY2VfcHJvZHVjdF9pbWFnZV91cGxvYWRfZXJyb3I='), $c86->get_error_message(), 400);
      }
    }
    $h87 = wc_rest_set_uploaded_image_as_attachment($c86, $v5->get_id());
  }
  $v5->set_image_id($h87);
  return $h87;
}
function searchProductByIdReviews_for_ebay()
{
  $l65 = isset($_POST[base64_decode('c2VhcmNoU2t1VmFsdWU=')]) ? sanitize_text_field($_POST[base64_decode('c2VhcmNoU2t1VmFsdWU=')]) : '';
  if (isset($l65)) {
    $e1 = array(base64_decode('cG9zdF90eXBl') => base64_decode('cHJvZHVjdA=='), base64_decode('cG9zdHNfcGVyX3BhZ2U=') => 1, base64_decode('cA==') => $l65);
    $j2 = new WP_Query($e1);
    $c3 = array();
    if ($j2->have_posts()) {
      while ($j2->have_posts()) : $j2->the_post();
        $g4 = get_the_ID();
        $v5 = new WC_Product($g4);
        if (has_post_thumbnail()) {
          $p6 = get_post_thumbnail_id();
          $a7 = $p6 ? wp_get_attachment_url($p6) : '';
        }
        $c3[] = array(base64_decode('c2t1') => $v5->get_sku(), base64_decode('aWQ=') => $g4, base64_decode('aW1hZ2U=') => $a7, base64_decode('dGl0bGU=') => $v5->get_title(), base64_decode('cHJvZHVjdFVybA==') => get_post_meta($g4, base64_decode('cHJvZHVjdFVybA=='), true), base64_decode('bGFzdFVwZGF0ZWQ=') => get_post_meta($g4, base64_decode('bGFzdFVwZGF0ZWQ='), true), base64_decode('c3RhdHVz') => $v5->get_status());
      endwhile;
    } else {
      echo __(base64_decode('Tm8gcHJvZHVjdHMgZm91bmQ='));
    }
    wp_reset_postdata();
    wp_send_json($c3);
  } else {
    $e30 = array(base64_decode('ZXJyb3I=') => true, base64_decode('ZXJyb3JfbXNn') => base64_decode('Y2Fubm90IGZpbmQgcmVzdWx0IGZvciB0aGUgaW50cm9kdWNlZCBza3UgdmFsdWUsIHBsZWFzZSBtYWtlIHN1cmUgdGhlIHByb2R1Y3QgaXMgaW1wb3J0ZWQgdXNpbmcgd29vc2hhcms='), base64_decode('ZGF0YQ==') => '');
    wp_send_json($e30);
  }
}
function saveOptionsDB_for_ebay()
{
  $y88 = isset($_POST[base64_decode('aXNTaGlwcGluZ0Nvc3RFbmFibGVk')]) ? sanitize_text_field($_POST[base64_decode('aXNTaGlwcGluZ0Nvc3RFbmFibGVk')]) : base64_decode('Tg==');
  $x89 = isset($_POST[base64_decode('aXNFbmFibGVBdXRvbWF0aWNVcGRhdGVGb3JBdmFpbGFiaWxpdHk=')]) ? sanitize_text_field($_POST[base64_decode('aXNFbmFibGVBdXRvbWF0aWNVcGRhdGVGb3JBdmFpbGFiaWxpdHk=')]) : base64_decode('Tg==');
  $k90 = isset($_POST[base64_decode('aXNVcGRhdGVSZWd1bGFyUHJpY2U=')]) ? sanitize_text_field($_POST[base64_decode('aXNVcGRhdGVSZWd1bGFyUHJpY2U=')]) : base64_decode('Tg==');
  $h91 = isset($_POST[base64_decode('aXNVcGRhdGVTYWxlUHJpY2U=')]) ? sanitize_text_field($_POST[base64_decode('aXNVcGRhdGVTYWxlUHJpY2U=')]) : base64_decode('Tg==');
  $n92 = isset($_POST[base64_decode('aXNVcGRhdGVTdG9jaw==')]) ? sanitize_text_field($_POST[base64_decode('aXNVcGRhdGVTdG9jaw==')]) : base64_decode('Tg==');
  $t93 = isset($_POST[base64_decode('cHJpY2VGb3JtdWxhSW50ZXJ2YWxscw==')]) ? $_POST[base64_decode('cHJpY2VGb3JtdWxhSW50ZXJ2YWxscw==')] : array();
  $o94 = isset($_POST[base64_decode('b25seVB1Ymxpc2hQcm9kdWN0V2lsbFN5bmM=')]) ? sanitize_text_field($_POST[base64_decode('b25seVB1Ymxpc2hQcm9kdWN0V2lsbFN5bmM=')]) : base64_decode('Tg==');
  $p95 = isset($_POST[base64_decode('ZW5hYmxlQXV0b21hdGljVXBkYXRlcw==')]) ? sanitize_text_field($_POST[base64_decode('ZW5hYmxlQXV0b21hdGljVXBkYXRlcw==')]) : base64_decode('Tg==');
  $p96 = isset($_POST[base64_decode('YXBwbHlQcmljZUZvcm11bGFBdXRvbWF0aWNVcGRhdGU=')]) ? sanitize_text_field($_POST[base64_decode('YXBwbHlQcmljZUZvcm11bGFBdXRvbWF0aWNVcGRhdGU=')]) : base64_decode('Tg==');
  $i97 = isset($_POST[base64_decode('c3luY1JlZ3VsYXJQcmljZQ==')]) ? sanitize_text_field($_POST[base64_decode('c3luY1JlZ3VsYXJQcmljZQ==')]) : base64_decode('Tg==');
  $g98 = isset($_POST[base64_decode('c3luY1NhbGVQcmljZQ==')]) ? sanitize_text_field($_POST[base64_decode('c3luY1NhbGVQcmljZQ==')]) : base64_decode('Tg==');
  $x99 = isset($_POST[base64_decode('c3luY1N0b2Nr')]) ? sanitize_text_field($_POST[base64_decode('c3luY1N0b2Nr')]) : base64_decode('Tg==');
  $h100 = isset($_POST[base64_decode('X3NhdmVkQ29uZmlndXJhdGlvbg==')]) ? $_POST[base64_decode('X3NhdmVkQ29uZmlndXJhdGlvbg==')] : null;
  if (isset($h100)) {
    update_option(base64_decode('X3NhdmVkQ29uZmlndXJhdGlvbl9lYmF5'), $h100);
  }
  if (isset($i97)) {
    update_option(base64_decode('c3luY1JlZ3VsYXJQcmljZV9lYmF5'), $i97);
  }
  if (isset($g98)) {
    update_option(base64_decode('c3luY1NhbGVQcmljZV9lYmF5'), $g98);
  }
  if (isset($x99)) {
    update_option(base64_decode('c3luY1N0b2NrX2ViYXk='), $x99);
  }
  if (isset($t93)) {
    update_option(base64_decode('cHJpY2VGb3JtdWxhSW50ZXJ2YWxsc19lYmF5'), $t93);
  }
  if (isset($y88)) {
    update_option(base64_decode('aXNTaGlwcGluZ0Nvc3RFbmFibGVkX2ViYXk='), $y88);
  }
  if (isset($x89)) {
    update_option(base64_decode('aXNFbmFibGVBdXRvbWF0aWNVcGRhdGVGb3JBdmFpbGFiaWxpdHlfZWJheQ=='), $x89);
  }
  if (isset($k90)) {
    update_option(base64_decode('aXNVcGRhdGVSZWd1bGFyUHJpY2VfZWJheQ=='), $k90);
  }
  if (isset($h91)) {
    update_option(base64_decode('aXNVcGRhdGVTYWxlUHJpY2VfZWJheQ=='), $h91);
  }
  if (isset($n92)) {
    update_option(base64_decode('aXNVcGRhdGVTdG9ja19lYmF5'), $n92);
  }
  if (isset($o94)) {
    update_option(base64_decode('b25seVB1Ymxpc2hQcm9kdWN0V2lsbFN5bmNfZWJheQ=='), $o94);
  }
  if (isset($p95)) {
    update_option(base64_decode('ZW5hYmxlQXV0b21hdGljVXBkYXRlc19lYmF5'), $p95);
  }
  if (isset($p96)) {
    update_option(base64_decode('YXBwbHlQcmljZUZvcm11bGFBdXRvbWF0aWNVcGRhdGVfZWJheQ=='), $p96);
  }
  wp_send_json($y88);
}
function insertReviewsIntoProductRM_PREMUIM_PLUGIN_for_ebay()
{
  $y28 = isset($_POST[base64_decode('cG9zdF9pZA==')]) ? sanitize_text_field($_POST[base64_decode('cG9zdF9pZA==')]) : '';
  $a24 = isset($_POST[base64_decode('cmV2aWV3cw==')]) ? ($_POST[base64_decode('cmV2aWV3cw==')]) : array();
  $h67 = array();
  if (isset($y28) && isset($a24) && count($a24)) {
    foreach ($a24 as $m31) {
      $m32 = wp_insert_comment(array(base64_decode('Y29tbWVudF9wb3N0X0lE') => sanitize_text_field($y28), base64_decode('Y29tbWVudF9hdXRob3I=') => sanitize_text_field($m31[base64_decode('dXNlcm5hbWU=')]), base64_decode('Y29tbWVudF9hdXRob3JfZW1haWw=') => sanitize_text_field($m31[base64_decode('ZW1haWw=')]), base64_decode('Y29tbWVudF9hdXRob3JfdXJs') => '', base64_decode('Y29tbWVudF9jb250ZW50') => $m31[base64_decode('cmV2aWV3')], base64_decode('Y29tbWVudF90eXBl') => '', base64_decode('Y29tbWVudF9wYXJlbnQ=') => 0, base64_decode('dXNlcl9pZA==') => 5, base64_decode('Y29tbWVudF9hdXRob3JfSVA=') => '', base64_decode('Y29tbWVudF9hZ2VudA==') => '', base64_decode('Y29tbWVudF9kYXRl') => $m31[base64_decode('ZGF0ZWNyZWF0aW9u')], base64_decode('Y29tbWVudF9hcHByb3ZlZA==') => 1,));
      $j68 = update_comment_meta($m32, base64_decode('cmF0aW5n'), sanitize_text_field($m31[base64_decode('cmF0aW5n')]));
      if ($j68 != false && isset($j68)) {
        array_push($h67, $m32);
      }
    }
    wp_send_json(array(base64_decode('aW5zZXJ0ZWRTdWNjZXNzZnVsbHk=') => $h67));
  }
}
function restoreConfiguration_for_ebay()
{
  $h100 = get_option(base64_decode('X3NhdmVkQ29uZmlndXJhdGlvbl9lYmF5'));
  wp_send_json(array(base64_decode('X3NhdmVkQ29uZmlndXJhdGlvbg==') => $h100));
}
add_action(base64_decode('d3BfYWpheF9nZXRQcm9kdWN0c0NvdW50RHJhZnRfZm9yX2ViYXk='), base64_decode('Z2V0Q291bnRPZlByb2R1Y3RzX2Zvcl9lYmF5'));
add_action(base64_decode('d3BfYWpheF9ub3ByaXZfZ2V0UHJvZHVjdHNDb3VudERyYWZ0X2Zvcl9lYmF5'), base64_decode('Z2V0Q291bnRPZlByb2R1Y3RzX2Zvcl9lYmF5'));
add_action(base64_decode('d3BfYWpheF93b29zaGFyay1pbnNlcnQtcHJvZHVjdF9mb3JfZWJheQ=='), base64_decode('aW5zZXJ0UHJvZHVjdEluV29vY29tbWVyY2VfZm9yX2ViYXk='));
add_action(base64_decode('d3BfYWpheF9ub3ByaXZfd29vc2hhcmstaW5zZXJ0LXByb2R1Y3RfZm9yX2ViYXk='), base64_decode('aW5zZXJ0UHJvZHVjdEluV29vY29tbWVyY2VfZm9yX2ViYXk='));
add_action(base64_decode('d3BfYWpheF9nZXRfcHJvZHVjdHNfZm9yX2ViYXk='), base64_decode('Z2V0UHJvZHVjdF9GUk9NV1BfZm9yX2ViYXk='));
add_action(base64_decode('d3BfYWpheF9ub3ByaXZfZ2V0X3Byb2R1Y3RzX2Zvcl9lYmF5'), base64_decode('Z2V0UHJvZHVjdF9GUk9NV1BfZm9yX2ViYXk='));
add_action(base64_decode('d3BfYWpheF9zZWFyY2gtY2F0ZWdvcnktYnktbmFtZV9mb3JfZWJheQ=='), base64_decode('c2VhcmNoQ2F0ZWdvcnlCeU5hbWVfZm9yX2ViYXk='));
add_action(base64_decode('d3BfYWpheF9ub3ByaXZfc2VhcmNoLWNhdGVnb3J5LWJ5LW5hbWVfZm9yX2ViYXk='), base64_decode('c2VhcmNoQ2F0ZWdvcnlCeU5hbWVfZm9yX2ViYXk='));
add_action(base64_decode('d3BfYWpheF9nZXQtc2t1LWFuZC11cmwtYnktQ2F0ZWdvcnlfZm9yX2ViYXk='), base64_decode('Z2V0U0t1QWJkVXJsQnlDYXRlZ29yeV9mb3JfZWJheQ=='));
add_action(base64_decode('d3BfYWpheF9ub3ByaXZfZ2V0LXNrdS1hbmQtdXJsLWJ5LUNhdGVnb3J5X2Zvcl9lYmF5'), base64_decode('Z2V0U0t1QWJkVXJsQnlDYXRlZ29yeV9mb3JfZWJheQ=='));
add_action(base64_decode('d3BfYWpheF9nZXQtYWxyZWFkeS1pbXBvcnRlZC1wcm9kdWN0c19mb3JfZWJheQ=='), base64_decode('Z2V0QWxyZWFkeUltcG9ydGVkUHJvZHVjdHNfZm9yX2ViYXk='));
add_action(base64_decode('d3BfYWpheF9ub3ByaXZfZ2V0LWFscmVhZHktaW1wb3J0ZWQtcHJvZHVjdHNfZm9yX2ViYXk='), base64_decode('Z2V0QWxyZWFkeUltcG9ydGVkUHJvZHVjdHNfZm9yX2ViYXk='));
add_action(base64_decode('d3BfYWpheF9pbnNlcnQtcmV2aWV3cy10by1wcm9kdWN0X2Zvcl9lYmF5'), base64_decode('aW5zZXJ0UmV2aWV3c0ludG9Qcm9kdWN0X2Zvcl9lYmF5'));
add_action(base64_decode('d3BfYWpheF9ub3ByaXZfaW5zZXJ0LXJldmlld3MtdG8tcHJvZHVjdF9mb3JfZWJheQ=='), base64_decode('aW5zZXJ0UmV2aWV3c0ludG9Qcm9kdWN0X2Zvcl9lYmF5'));
add_action(base64_decode('d3BfYWpheF9yZW1vdmUtcHJvZHVjdC1mcm9tLXdwX2Zvcl9lYmF5'), base64_decode('cmVtb3ZlUHJvZHVjdEZyb21TaG9wX2Zvcl9lYmF5'));
add_action(base64_decode('d3BfYWpheF9ub3ByaXZfcmVtb3ZlLXByb2R1Y3QtZnJvbS13cF9mb3JfZWJheQ=='), base64_decode('cmVtb3ZlUHJvZHVjdEZyb21TaG9wX2Zvcl9lYmF5'));
add_action(base64_decode('d3BfYWpheF9zZWFyY2gtcHJvZHVjdC1ieS1za3VfZm9yX2ViYXk='), base64_decode('c2VhcmNoUHJvZHVjdEJ5U2t1X2Zvcl9lYmF5'));
add_action(base64_decode('d3BfYWpheF9ub3ByaXZfc2VhcmNoLXByb2R1Y3QtYnktc2t1X2Zvcl9lYmF5'), base64_decode('c2VhcmNoUHJvZHVjdEJ5U2t1X2Zvcl9lYmF5'));
add_action(base64_decode('d3BfYWpheF91cGRhdGUtcHJvZHVjdC12YXJpYXRpb25zX2Zvcl9lYmF5'), base64_decode('dXBkYXRlUHJvZHVjdFZhcmlhdGlvbnNfZm9yX2ViYXk='));
add_action(base64_decode('d3BfYWpheF9ub3ByaXZfdXBkYXRlLXByb2R1Y3QtdmFyaWF0aW9uc19mb3JfZWJheQ=='), base64_decode('dXBkYXRlUHJvZHVjdFZhcmlhdGlvbnNfZm9yX2ViYXk='));
add_action(base64_decode('d3BfYWpheF91cGRhdGUtcHJvZHVjdC1zaW1wbGVfZm9yX2ViYXk='), base64_decode('dXBkYXRlUHJvZHVjdFNpbXBsZV9mb3JfZWJheQ=='));
add_action(base64_decode('d3BfYWpheF9ub3ByaXZfdXBkYXRlLXByb2R1Y3Qtc2ltcGxlX2Zvcl9lYmF5'), base64_decode('dXBkYXRlUHJvZHVjdFNpbXBsZV9mb3JfZWJheQ=='));
add_action(base64_decode('d3BfYWpheF9zZXQtdG8tZHJhZnRfZm9yX2ViYXk='), base64_decode('c2V0UHJvZHVjdFRvRHJhZnRfZm9yX2ViYXk='));
add_action(base64_decode('d3BfYWpheF9ub3ByaXZfc2V0LXRvLWRyYWZ0X2Zvcl9lYmF5'), base64_decode('c2V0UHJvZHVjdFRvRHJhZnRfZm9yX2ViYXk='));
add_action(base64_decode('d3BfYWpheF9nZXQtb2xkLXByb2R1Y3QtZGV0YWlsc19mb3JfZWJheQ=='), base64_decode('Z2V0T2xkUHJvZHVjdERldGFpbHNfZm9yX2ViYXk='));
add_action(base64_decode('d3BfYWpheF9ub3ByaXZfZ2V0LW9sZC1wcm9kdWN0LWRldGFpbHNfZm9yX2ViYXk='), base64_decode('Z2V0T2xkUHJvZHVjdERldGFpbHNfZm9yX2ViYXk='));
add_action(base64_decode('d3BfYWpheF9nZXQtcHJvZHVjdC1ieS1pZF9mb3JfZWJheQ=='), base64_decode('c2VhcmNoUHJvZHVjdEJ5SWRSZXZpZXdzX2Zvcl9lYmF5'));
add_action(base64_decode('d3BfYWpheF9ub3ByaXZfZ2V0LXByb2R1Y3QtYnktaWRfZm9yX2ViYXk='), base64_decode('c2VhcmNoUHJvZHVjdEJ5SWRSZXZpZXdzX2Zvcl9lYmF5'));
add_action(base64_decode('d3BfYWpheF9zYXZlT3B0aW9uc0RCX2Zvcl9lYmF5'), base64_decode('c2F2ZU9wdGlvbnNEQl9mb3JfZWJheQ=='));
add_action(base64_decode('d3BfYWpheF9ub3ByaXZfc2F2ZU9wdGlvbnNEQl9mb3JfZWJheQ=='), base64_decode('c2F2ZU9wdGlvbnNEQl9mb3JfZWJheQ=='));
add_action(base64_decode('d3BfYWpheF9yZXN0b3JlQ29uZmlndXJhdGlvbl9mb3JfZWJheQ=='), base64_decode('cmVzdG9yZUNvbmZpZ3VyYXRpb25fZm9yX2ViYXk='));
add_action(base64_decode('d3BfYWpheF9ub3ByaXZfcmVzdG9yZUNvbmZpZ3VyYXRpb25fZm9yX2ViYXk='), base64_decode('cmVzdG9yZUNvbmZpZ3VyYXRpb25fZm9yX2ViYXk='));
add_action(base64_decode('d3BfYWpheF9pbnNlcnQtcmV2aWV3cy10by1wcm9kdWN0Uk1fZm9yX2ViYXk='), base64_decode('aW5zZXJ0UmV2aWV3c0ludG9Qcm9kdWN0Uk1fUFJFTVVJTV9QTFVHSU5fZm9yX2ViYXk='));
add_action(base64_decode('d3BfYWpheF9ub3ByaXZfaW5zZXJ0LXJldmlld3MtdG8tcHJvZHVjUk10X2Zvcl9lYmF5'), base64_decode('aW5zZXJ0UmV2aWV3c0ludG9Qcm9kdWN0Uk1fUFJFTVVJTV9QTFVHSU5fZm9yX2ViYXk='));
