'use strict';

import config from '../../gulp.config.js';
import gulp from 'gulp';
import debug from 'gulp-debug';
import changed from 'gulp-changed';



gulp.task('cloneTheme', function () {

	gulp.src(config.cloneTheme.src, { base: config.cloneTheme.base })
		.pipe(changed(config.cloneTheme.dest))
		.pipe(debug({
			title: 'Clone:',
			minimal: true
		}))
		.pipe(gulp.dest(config.cloneTheme.dest));
});
