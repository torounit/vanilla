'use strict';

// ==================================
//
// Load modules.
//
// ==================================

import browserSync from 'browser-sync';
import config from '../config.js';
import gulp from 'gulp';


// ==================================
//
// browserSync
//
// ==================================

gulp.task('browserSync', function () {
	browserSync(config.browserSync);
});
