'use strict';

// ==================================
//
// distribution
//
// ==================================
const gulp  = require( 'gulp' );
const zip  = require( 'gulp-zip' );
const minimist  = require( 'minimist' );

gulp.task('release', ['dist'], function(){
	let env = minimist(process.argv.slice(2));
	let version = env.v || '';
	return gulp.src('dist/**/*', {base: 'dist'})
		.pipe(zip('vanilla-'+version+'.zip'))
		.pipe(gulp.dest('./'));
});
