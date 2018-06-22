const gulp = require( 'gulp' )
require( './gulp/tasks/stylus' )
require( './gulp/tasks/browserify' )

gulp.task( 'build', gulp.parallel( 'stylus', 'browserify' ) )

require( './gulp/tasks/server' )
require( './gulp/tasks/watch' )
require( './gulp/tasks/dist' )
require( './gulp/tasks/release' )

gulp.task( 'default', gulp.series( 'setWatch', 'build', gulp.parallel( 'browserSync', 'watch' ) ) )

