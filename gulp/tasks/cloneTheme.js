'use strict';

const config = require( '../../gulp.config.js' );
const gulp = require( 'gulp' );
const debug = require( 'gulp-debug' );
const changed = require( 'gulp-changed' );



gulp.task('cloneTheme', function () {

	gulp.src(config.cloneTheme.src, { base: config.cloneTheme.base })
		.pipe(changed(config.cloneTheme.dest))
		.pipe(debug({
			title: 'Clone:',
			minimal: true
		}))
		.pipe(gulp.dest(config.cloneTheme.dest));
});
