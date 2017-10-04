'use strict';

// ==================================
//
// distribution
//
// ==================================
const gulp = require( 'gulp' );
const debug = require( 'gulp-debug' );
const runSequence = require( 'run-sequence' );

gulp.task('copy', function() {
	return gulp.src(
			[
				'./**/*.php',
				'./assets/**',
				'./LICENSE',
				'./readme.txt',
				'./screenshot.png',
				'./style.css',
				'./bundle.js',
				"!./dist/**",
				"!./node_modules/**/*.*",
				"!./vendor/**/*.*",
				"!./server/**"
			],
			{ base: './' }
		)
		.pipe( debug() )
		.pipe( gulp.dest( 'dist' ) );
} );

gulp.task('dist', function(cb){
	return runSequence( 'build', 'copy', cb );
});
