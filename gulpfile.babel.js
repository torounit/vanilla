import gulp from 'gulp';
import './gulp/tasks/stylus';
import './gulp/tasks/browserify';
import './gulp/tasks/server';
import './gulp/tasks/watch';

gulp.task('build', ['stylus', 'browserify']);
gulp.task('default', ['setWatch', 'build', 'watch', 'browserSync']);


gulp.task('copy', function() {
	return gulp.src(
		[
			'./**/*.php',
			'./**/*.css',
			'./**/*.js',
			'./LICENSE',
			'./**/*.json',
			'./assets/**/*.*',
			"!./release/**",
			"!./node_modules/**/*.*"
		],
		{ base: './' }
	)
		.pipe( debug() )
		.pipe( gulp.dest( 'release' ) );
} );

gulp.task('release', function(cb){
	return runSequence( 'build', 'copy', cb );
});
