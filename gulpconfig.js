/*
 *
 * Gulp User Settings. Override Default Settings.
 *
 */

export default  {

	/**
	 *
	 * browserSync.
	 *
	 */
	browserSync: {
		proxy: '0.0.0.0:8888',
		files: [
			"./style.css",
			"./bundle.js",
			"./**/*.php"
		]
	}
};
