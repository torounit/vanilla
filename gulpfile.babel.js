import gulp from 'gulp';
import './gulp/tasks/stylus';
import './gulp/tasks/browserify';
import './gulp/tasks/server';
import './gulp/tasks/watch';
import './gulp/tasks/dist';
import './gulp/tasks/release';
import './gulp/tasks/cloneTheme'

gulp.task('build', ['stylus', 'browserify']);
gulp.task('default', [ 'cloneTheme', 'setWatch', 'watch', 'connectSync', 'stylus', 'browserify']);

