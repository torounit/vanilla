'use strict';

// ==================================
//
// distribution
//
// ==================================
import gulp from 'gulp';
import debug from 'gulp-debug';
import runSequence from 'run-sequence';

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
				"!./vendor/**/*.*"
			],
			{ base: './' }
		)
		.pipe( debug() )
		.pipe( gulp.dest( 'dist' ) );
} );

gulp.task('dist', function(cb){
	return runSequence( 'build', 'copy', cb );
});
