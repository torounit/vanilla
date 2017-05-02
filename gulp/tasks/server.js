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
import env from '../../.env.json';



// ==================================
//
// browserSync
//
// ==================================

gulp.task('browserSync', function () {
	browserSync(config.browserSync);
});

gulp.task('connectSync', function() {
	connect.server({
		port: env.server.port,
		host: env.server.host,
		base: './server',
		router: './vendor/wp-cli/wp-cli/php/router.php'
	}, function (){
		browserSync(config.browserSync);
	});

});

