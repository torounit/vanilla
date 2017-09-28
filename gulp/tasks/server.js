'use strict';

// ==================================
//
// Load modules.
//
// ==================================

import browserSync from 'browser-sync';
import config from '../../gulp.config.js';
import gulp from 'gulp';
import connect from 'gulp-connect-php';



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
		browserSync(config.browserSync);
	});

});

