export default  {

	/**
	 *
	 * browserSync.
	 *
	 */
	browserSync: {
		//proxy: ' localhost:8080',
		files: [
			"./**/*.*"
		]
	},

	/**
	 *
	 * sass Compile Option.
	 *
	 */
	sass: {
		src: './assets/styles/**/*.scss',
		dest: './',
		sourceRoot: './assets/styles'
	},

	/**
	 *
	 * JavaScript.
	 *
	 */
	browserify: {
		bundleOption: {
			cache: {},
			packageCache: {},
			fullPaths: false,
			debug: true,
			entries: './assets/scripts/all.js',
			extensions: ['js', 'jsx']
		},
		dest: './',
		filename: 'bundle.js'
	}
};
