

import gulp from 'gulp';

// ==================================
//
// tasks.
//
// ==================================


gulp.task('build', ['sass', 'browserify']);
gulp.task('default', ['setWatch', 'build', 'watch', 'browserSync']);


