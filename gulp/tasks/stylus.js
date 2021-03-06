'use strict';

// ==================================
//
// Load modules.
//
// ==================================

const config = require( '../../gulp.config.js' );
const handleErrors = require( '../util/handleErrors.js' );
const gulp = require( 'gulp' );
const stylus = require( 'gulp-stylus' );
const sourcemaps = require( 'gulp-sourcemaps' );
const autoprefixer = require( 'autoprefixer' );
const postcss = require( 'gulp-postcss' );
const mqpacker = require( 'css-mqpacker' );
const packageJson = require( '../../package.json' );
const handlebars = require( 'gulp-compile-handlebars' );
const minimist  = require( 'minimist' );

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
	let env = minimist(process.argv.slice(2));
	let version = env.v || '';
	let meta = packageJson;
	if(version){
		meta.version = version;
	}
	return gulp.src([config.stylus.src])
		.pipe(sourcemaps.init())
		.pipe(stylus({
			'include css': true
		}))
		.pipe(handlebars(meta))
		.on('error', handleErrors)
		.pipe(postcss(processors))
		.pipe(sourcemaps.write({
			includeContent: false,
			sourceRoot: config.stylus.sourceRoot
		}))
		.pipe(gulp.dest(config.stylus.dest));
});
