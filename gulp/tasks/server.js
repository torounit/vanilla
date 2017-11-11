'use strict';

// ==================================
//
// Load modules.
//
// ==================================

const browserSync = require( 'browser-sync' );
const config = require( '../../gulp.config.js' );
const gulp = require( 'gulp' );


// ==================================
//
// browserSync
//
// ==================================

gulp.task('browserSync', function () {
	browserSync({
		proxy: 'localhost',
		files: [
			"./style.css",
			"./bundle.js",
			"./**/*.php",
		]
	});
});

