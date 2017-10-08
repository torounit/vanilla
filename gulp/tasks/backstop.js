"use strict";
const gulp = require('gulp');
const connect = require('gulp-connect-php');
const backstopjs = require('backstopjs');
let server = new connect();

const run = (command) => {
	const env = require(  '../../.env.json' );
	return server.server({
		port: env.server.port,
		host: env.server.host,
		base: './server',
		router: './vendor/wp-cli/server-command/router.php'
	}, () => {
		backstopjs(command).then(() => {
			server.closeServer();
		}).catch(() => {
			server.closeServer();
			process.exit(1)
		});;
	});
};

gulp.task('test', ['build', 'cloneTheme'] , () => {
	return run('test');
});

gulp.task('reference', ['build', 'cloneTheme'] , () => {
	return run('reference');
});

