import gulp from 'gulp';
import './gulp/tasks/stylus';
import './gulp/tasks/browserify';
import './gulp/tasks/server';
import './gulp/tasks/watch';
import './gulp/tasks/dist';
import './gulp/tasks/release';

gulp.task('build', ['stylus', 'browserify']);
gulp.task('default', ['setWatch', 'build', 'watch', 'browserSync']);

