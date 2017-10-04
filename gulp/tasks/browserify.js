'use strict';

// ==================================
//
// Load modules.
//
// ==================================

const source  = require( 'vinyl-source-stream' );

const browserify  = require( 'browserify' );
//tranform
const babelify  = require( 'babelify' );
const browserifyShim  = require( 'browserify-shim' );
const watchify  = require( 'watchify' );

const config  = require( '../../gulp.config.js' );
const handleErrors  = require( '../util/handleErrors.js' );
const gulp  = require( 'gulp' );


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
		console.log("watchify")
		var bundler = watchify(b);
		bundler.on('update', bundle);
	}
	return bundle();
});
