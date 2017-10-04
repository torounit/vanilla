const themeDir = "./server/wordpress/wp-content/themes/vanilla";
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


	cloneTheme: {
		src: [
			'./**/*.php',
			'./assets/**',
			'./LICENSE',
			'./readme.txt',
			'./screenshot.png',
			'./style.css',
			'./bundle.js',
			"!./server/**",
			"!./dist/**",
			"!./node_modules/**/*.*",
			"!./vendor/**/*.*",
			"!./server/**"
		],
		base: "./",
		dest: themeDir,
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

module.exports.themeDir = themeDir;
