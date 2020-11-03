<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'jsxform' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'ZSg/? NvG5T81-RyMf/sN~lYh,($0:fg<$UYdr<K7br}dGf0DIqZF@ 3Hk=59&Y{' );
define( 'SECURE_AUTH_KEY',  'EJZv{EuN?CfF4:N(NYT:$c(/g0(65!Y*xn:Ii|Q%BYM{41xL2fWf2 06*D$B)--5' );
define( 'LOGGED_IN_KEY',    't^X2(N3G#9L[DvuR]HWGeaR3w22s)k;{K/FOQ>8Sn`,iKW&`>3FH?{di K[bN(f0' );
define( 'NONCE_KEY',        '04qv!VM`u5,uK?pklZ~C 1XBf}RAl@4``NhwrNbL A3{O2U#x3U8a,(cUa!>U>w$' );
define( 'AUTH_SALT',        'z,VP!sB&CA/8[=nYh<#J/cA%ugY~i~-#0Qm7*PJI8C!.N:;<g)ZrRb:{zw{]0fi;' );
define( 'SECURE_AUTH_SALT', '6}*Yt||M%cPz!ky`3Q~= B[~|IK D4Rf0U8O,74S<lI[$C[<+J,`+s1hS;$+p?z9' );
define( 'LOGGED_IN_SALT',   'gNfB;~e`;HI_ WrZATL3N=2L{ij^sr-ud Fnm5HXbt2`gLGK:}(@LCzgsTlz(/T-' );
define( 'NONCE_SALT',       '4%_a^8,)K&hjf/Yw`R#= <{QL8N71bN,H2<`M~m^8SUM:7A?3+uAl*M/4_J?UYBB' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'jsxform_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
