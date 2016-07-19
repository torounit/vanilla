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
				'./assets/dist/**',
				'./style.css',
				"!./dist/**",
				"!./node_modules/**/*.*"
			],
			{ base: './' }
		)
		.pipe( debug() )
		.pipe( gulp.dest( 'dist' ) );
} );

gulp.task('dist', function(cb){
	return runSequence( 'build:dist', 'copy', cb );
});
