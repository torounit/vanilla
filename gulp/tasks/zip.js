'use strict';

// ==================================
//
// distribution
//
// ==================================
import gulp from 'gulp';
import zip from 'gulp-zip';


gulp.task('release', [ 'dist'], function(){
	return gulp.src('dist/*', {base: 'dist'})
		.pipe(zip('release.zip'))
		.pipe(gulp.dest('./'));
});
