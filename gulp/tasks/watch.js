'use strict';

// ==================================
//
// Load modules.
//
// ==================================

const config = require( '../../gulp.config.js' );
const gulp = require( 'gulp' );

// ==================================
//
// watch.
//
// ==================================

gulp.task('setWatch', function (done) {
	global.isWatching = true;
	return done()
});

gulp.task('watch', function (done) {
	gulp.watch(config.stylus.watch, gulp.task('stylus'));
	return done()

});
