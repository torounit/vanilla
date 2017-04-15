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
import changed from 'gulp-changed';


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

	watch(config.php.src, function () {
		gulp.start('php');
	});
});

gulp.task('php', function () {
	return gulp.src([
		config.php.src,
		"!./dist/**",
		"!./node_modules/**/*.*",
		"!./vendor/**/*.*",
		"!./server/**"
	])
	.pipe(changed(config.php.dest))
	.pipe(debug())
	.pipe(gulp.dest(config.php.dest));
});
