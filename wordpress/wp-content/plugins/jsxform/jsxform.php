<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://listingslab.com
 * @since             0.0.1
 * @package           Jsxform
 *
 * @wordpress-plugin
 * Plugin Name:       JSXForm
 * Plugin URI:        https://listingslab.com
 * Description:       Everyone hates forms. This plugin makes them easy and useful
 * Version:           0.0.1
 * Author:            Chris Dorward
 * Author URI:        listingslab.io
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       jsxform
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'JSXFORM_VERSION', '0.0.1' );

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-jsxform-activator.php
 */
function activate_jsxform() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-jsxform-activator.php';
	Jsxform_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-jsxform-deactivator.php
 */
function deactivate_jsxform() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-jsxform-deactivator.php';
	Jsxform_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_jsxform' );
register_deactivation_hook( __FILE__, 'deactivate_jsxform' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-jsxform.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_jsxform() {

	$plugin = new Jsxform();
	$plugin->run();

}
run_jsxform();
