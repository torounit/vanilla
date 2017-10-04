'use strict';

// ==================================
//
// Load modules.
//
// ==================================

const config = require( '../../gulp.config.js' );
const gulp = require( 'gulp' );
const watch = require( 'gulp-watch' );

// ==================================
//
// watch.
//
// ==================================

gulp.task('setWatch', function () {
	global.isWatching = true;
});

gulp.task('watch', function () {

	watch(config.stylus.watch, function () {
		gulp.start('stylus');
	});

	gulp.watch([
		'./**/*.php',
		'./assets/images/**',
		'./style.css',
		'./bundle.js',
		"!./dist/**",
		"!./node_modules/**/*.*",
		"!./vendor/**/*.*",
		"!./server/**"
	], ['cloneTheme']);
});
