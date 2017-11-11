const gulp = require('gulp');
require( './gulp/tasks/stylus' );
require( './gulp/tasks/browserify' );
require( './gulp/tasks/server' );
require( './gulp/tasks/watch' );
require( './gulp/tasks/dist' );
require( './gulp/tasks/release' );

gulp.task('build', ['stylus', 'browserify']);
gulp.task('default', [ 'setWatch', 'watch', 'browserSync', 'stylus', 'browserify']);

