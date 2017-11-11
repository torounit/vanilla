module.exports = {
	/**
	 *
	 * sass Compile Option.
	 *
	 */
	stylus: {
		src: "./assets/styles/**/style.styl",
		watch: "./assets/styles/**/*.styl",
		dest: "./",
		sourceRoot: "./assets/styles"
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
			entries: "./assets/scripts/theme.js",
			extensions: ["js", "jsx"]
		},
		dest: "./",
		filename: "bundle.js"
	}
};

