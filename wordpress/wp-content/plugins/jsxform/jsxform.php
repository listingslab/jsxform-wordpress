<?php

/**
 * @link              https://jsxform.web.app/
 * @since             0.0.0
 * @package           Jsxform
 *
 * @wordpress-plugin
 * Version:           0.0.4
 * Plugin Name:       JSXForm
 * Description:       Everyone hates forms. This plugin makes them easy and useful
 * Plugin URI:        https://jsxform.web.app/
 * Author:            listingslab
 * Author URI:        https://github.com/listingslab
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       jsxform
 * Domain Path:       /languages
 */

if ( ! defined( 'WPINC' ) ) {
	die;
}
define( 'JSXFORM_VERSION', '0.0.4' );

add_action('admin_menu', 'test_plugin_setup_menu');
function test_plugin_setup_menu(){
    add_menu_page( 
    	'JSXForm Page', 
    	'JSXForm', 
    	'manage_options', 
    	'jsxform', 
    	'jsxform_admin' 
    );
}

function jsxform_admin(){
    $example_form = file_get_contents(plugin_dir_path( __FILE__ ) . 'app/src/exampleForm.jsx');
    echo '<h1>JSXForm Admin</h1>
            <p>Forms are added as widget on <a href="'.admin_url().'/widgets.php">this page</a>. The form gets rendered as a react app using the following JSON object.</p>';
    echo '<pre>';
    print_r($example_form);
    echo '</pre>';
}

function activate_jsxform() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-jsxform-activator.php';
	Jsxform_Activator::activate();
}

function deactivate_jsxform() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-jsxform-deactivator.php';
	Jsxform_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_jsxform' );
register_deactivation_hook( __FILE__, 'deactivate_jsxform' );

require plugin_dir_path( __FILE__ ) . 'includes/class-jsxform.php';


function run_jsxform() {
    require_once plugin_dir_path( __FILE__ ) . 'includes/class-jsxform-widget.php';
    $widget = new JSXForm_Widget();
	$plugin = new Jsxform();
	$plugin->run();


}

run_jsxform();

