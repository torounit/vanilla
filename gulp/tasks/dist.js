'use strict'

// ==================================
//
// distribution
//
// ==================================
const gulp = require( 'gulp' )

gulp.task( 'copy', function () {
	return gulp.src(
		[
			'./**/*.php',
			'./assets/**',
			'./LICENSE',
			'./readme.txt',
			'./screenshot.png',
			'./style.css',
			'./bundle.js',
			'!./dist/**',
			'!./backstop_data/**',
			'!./node_modules/**/*.*',
			'!./vendor/**/*.*'
		],
		{ base: './' }
	)
		.pipe( gulp.dest( 'dist' ) )
} )

gulp.task( 'dist', gulp.series('build', 'copy') )
