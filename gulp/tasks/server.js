'use strict';

// ==================================
//
// Load modules.
//
// ==================================

const browserSync = require( 'browser-sync' );
const config = require( '../../gulp.config.js' );
const gulp = require( 'gulp' );
const connect = require( 'gulp-connect-php' );



// ==================================
//
// browserSync
//
// ==================================

gulp.task('browserSync', function () {
	browserSync(config.browserSync);
});

gulp.task('connectSync', function() {
	const env = require(  '../../.env.json' );
	connect.server({
		port: env.server.port,
		host: env.server.host,
		base: './server',
		router: './vendor/wp-cli/server-command/router.php'
	}, function (){
		browserSync({
			proxy: env.server.host + ":" + env.server.port,
			files: [
				config.themeDir + "/style.css",
				config.themeDir + "/bundle.js",
				config.themeDir + "/**/*.php",
			]
		});
	});

});

