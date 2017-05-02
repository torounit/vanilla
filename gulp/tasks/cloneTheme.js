'use strict';

import config from '../../gulp.config.js';
import gulp from 'gulp';
import debug from 'gulp-debug';



gulp.task('cloneTheme', function () {

	gulp.src(config.cloneTheme.src)
		.pipe(debug())
		.pipe(gulp.dest(config.cloneTheme.dest));
});
