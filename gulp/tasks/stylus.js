'use strict';

// ==================================
//
// Load modules.
//
// ==================================

import config from '../config.js';
import handleErrors from '../util/handleErrors.js';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import stylus from 'gulp-stylus';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'autoprefixer';
import postcss from 'gulp-postcss';
import mqpacker from 'css-mqpacker';
import packageJson from '../../package.json';
import handlebars from 'gulp-compile-handlebars';

var processors = [
	autoprefixer(),
	mqpacker()
];

// ==================================
//
// Sass
//
// ==================================


gulp.task('stylus', function () {
	return gulp.src([config.stylus.src])
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(stylus({
			'include css': true
		}))
		.pipe(handlebars(packageJson))
		.on('error', handleErrors)
		.pipe(postcss(processors))
		.pipe(sourcemaps.write({
			includeContent: false,
			sourceRoot: config.stylus.sourceRoot
		}))
		.pipe(gulp.dest(config.stylus.dest));
});