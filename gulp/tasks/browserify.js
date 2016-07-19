'use strict';

// ==================================
//
// Load modules.
//
// ==================================

import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';

import browserify from 'browserify';
//tranform
import babelify from 'babelify';
import browserifyShim from 'browserify-shim';
import watchify from 'watchify';

import config from '../config.js';
import handleErrors from '../util/handleErrors.js';
import gulp from 'gulp';
import debug from 'gulp-debug';



// ==================================
//
// Compile JavaScripts.
//
// ==================================


var b = browserify(config.browserify.bundleOption)
	.transform(babelify.configure({
		compact: false,
		presets: ["es2015"]
	}))
	.transform(browserifyShim);


gulp.task('browserify', function () {

	var bundle = function () {
		b.bundle().on('error', handleErrors)
			.pipe(source(config.browserify.filename))
			.pipe(gulp.dest(config.browserify.dest));
	};
	if (global.isWatching) {
		var bundler = watchify(b);
		bundler.on('update', bundle);
	}
	return bundle();
});