'use strict'
require( 'dotenv' ).config()

// ==================================
//
// Load modules.
//
// ==================================

const browserSync = require( 'browser-sync' )
const gulp = require( 'gulp' )

// ==================================
//
// browserSync
//
// ==================================

gulp.task( 'browserSync', function () {
	return browserSync( {
		proxy: 'localhost:' + process.env.PORT,
		files: [
			'./style.css',
			'./bundle.js',
			'./**/*.php',
		]
	} )
} )

