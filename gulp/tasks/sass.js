'use strict';

// ==================================
//
// Load modules.
//
// ==================================

import config from '../config.js';
import handleErrors from '../util/handleErrors.js';
import gulp from 'gulp';
import bulkSass from 'gulp-sass-bulk-import';
import plumber from 'gulp-plumber';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'autoprefixer';
import postcss from 'gulp-postcss';
import atImport from "postcss-import";
import debug from 'gulp-debug';

var processors = [
	autoprefixer(),
	atImport
];

// ==================================
//
// Sass
//
// ==================================


gulp.task('sass', function () {

	return gulp.src([config.sass.src])
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(bulkSass())
		.pipe(sass())
		.on('error', handleErrors)
		.pipe(postcss(processors))
		.pipe(sourcemaps.write({
			includeContent: false,
			sourceRoot: config.sass.sourceRoot
		}))
		.pipe(gulp.dest(config.sass.dest));
});