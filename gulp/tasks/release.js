'use strict';

// ==================================
//
// distribution
//
// ==================================
import gulp from 'gulp';
import zip from 'gulp-zip';
import minimist from 'minimist';

gulp.task('release', ['dist'], function(){
	let env = minimist(process.argv.slice(2));
	let version = env.v || '';
	return gulp.src('dist/**/*', {base: 'dist'})
		.pipe(zip('vanilla-'+version+'.zip'))
		.pipe(gulp.dest('./'));
});
