"use strict";
const gulp = require('gulp');
const connect = require('gulp-connect-php');
const backstopjs = require('backstopjs');
let server = new connect();

const run = (command) => {
	const env = require(  '../../.env.json' );
	try {
		return server.server({
			port: env.server.port,
			host: env.server.host,
			base: './server',
			router: './vendor/wp-cli/server-command/router.php'
		}, () => {
			backstopjs(command).then(() => {
				return server.closeServer();
			}).catch(() => {
				server.closeServer();
				return process.exit(1)
			});
		});
	}
	catch (error) {
		return process.exit(1)
	}
};

gulp.task('test', ['build', 'cloneTheme'] , () => {
	return run('test');
});

gulp.task('reference', ['build', 'cloneTheme'] , () => {
	return run('reference');
});
