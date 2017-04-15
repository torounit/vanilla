<?php

require_once dirname( __FILE__ ) . '/salt.php';

$env_path = dirname( dirname( __FILE__ ) ) . '/.env.json';
if ( ! file_exists( $env_path ) ) {
	die( ".env.json or config.php is Not Exsist!" );
}

$env_config = json_decode( file_get_contents( $env_path ) , true );
$db_data    = $env_config['mysql'];
/** The name of the database for WordPress */
define( 'DB_NAME', $db_data['database'] );

/** MySQL database username */
define( 'DB_USER', $db_data['username'] );

/** MySQL database password */
define( 'DB_PASSWORD', $db_data['password'] );

/** MySQL hostname */
define( 'DB_HOST', $db_data['host'] );

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );


$table_prefix  = $db_data['table_prefix'] ;

if ( defined( 'WP_CLI' ) && WP_CLI ) {
	if ( 'import' == WP_CLI::get_runner()->arguments[0] ) {
		define( 'WP_DEBUG', false );
	}
}

if( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', true );
}

define( 'JETPACK_DEV_DEBUG', true );
define( 'WP_HOME', 'http://'. $env_config['server']['host'] .':' . $env_config['server']['port'] );
define( 'WP_SITEURL', WP_HOME . '/wordpress' );

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
