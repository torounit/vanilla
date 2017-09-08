'use strict';

// ==================================
//
// Load modules.
//
// ==================================

import config from '../../gulp.config.js';
import gulp from 'gulp';
import debug from 'gulp-debug';
import watch from 'gulp-watch';


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
