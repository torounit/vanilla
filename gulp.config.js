import env from "./.env.json"

const server = env.server.host + ":" + env.server.port
const themeDir = "./server/wordpress/wp-content/themes/" + env.wp.theme;
export default  {

	/**
	 *
	 * browserSync.
	 *
	 */
	browserSync: {
		proxy: server,
		files: [
			themeDir + "/style.css",
			themeDir + "/bundle.js",
			themeDir + "/**/*.php",
		]
	},

	/**
	 *
	 * sass Compile Option.
	 *
	 */
	stylus: {
		src: "./assets/styles/**/style.styl",
		watch: "./assets/styles/**/*.styl",
		dest: themeDir,
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
		dest: themeDir,
		filename: "bundle.js"
	}
};
