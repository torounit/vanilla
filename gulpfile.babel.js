const gulp = require('gulp');
require( './gulp/tasks/stylus' );
require( './gulp/tasks/browserify' );
require( './gulp/tasks/server' );
require( './gulp/tasks/watch' );
require( './gulp/tasks/dist' );
require( './gulp/tasks/release' );
require( './gulp/tasks/cloneTheme');

gulp.task('build', ['stylus', 'browserify']);
gulp.task('default', [ 'cloneTheme', 'setWatch', 'watch', 'connectSync', 'stylus', 'browserify']);

