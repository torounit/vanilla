import env from './.env.json'

const server = env.server.host + ':' + env.server.port
export default  {

	/**
	 *
	 * browserSync.
	 *
	 */
	browserSync: {
		proxy: server,
		files: [
			"./server/wordpress/wp-content/themes/vanilla/style.css",
			"./server/wordpress/wp-content/themes/vanilla/bundle.js",
			"./server/wordpress/wp-content/themes/vanilla/**/*.php",
		]
	},

	/**
	 *
	 * sass Compile Option.
	 *
	 */
	stylus: {
		src: './assets/styles/**/style.styl',
		watch: './assets/styles/**/*.styl',
		dest: './server/wordpress/wp-content/themes/vanilla/',
		sourceRoot: './assets/styles'
	},

	/**
	 *
	 * php
	 *
	 */
	php: {
		src: [
			"./**/*.php",
			"!./assets/**",
			"!./bin/**",
			"!./dist/**",
			"!./gulp/**",
			"!./node_modules/**",
			"!./vendor/**",
			"!./server/**"
		],
		dest: "./server/wordpress/wp-content/themes/vanilla/",
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
			entries: './assets/scripts/theme.js',
			extensions: ['js', 'jsx']
		},
		dest: './server/wordpress/wp-content/themes/vanilla/',
		filename: 'bundle.js'
	}
};
