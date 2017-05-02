Thanks for contributing to `Vanilla` !!!

## Getting Started

### 0. Install PHP, node.js, composer, MySQL, cURL.

##### for OSX

PHP and cURL are pre-installed.

```
$ brew install composer mysql node 
```

### 1.Start Development!

1. Clone This Repository
	```
	$ git clone git@github.com:torounit/vanilla.git
	```
1. Initalize Composer and node modules.
	```
	$ cd vanilla
	$ npm install
	$ composer install
	```
1. Edit `.env.json` (optional)
	```
	$ vi .env.json
	```
1. Provisioning WordPress
	```
	$ composer provision
	```
1. Start `npm start`.
	```
	$ npm start
	```

## Commands

* `composer provision` 

	Provisioning WordPress.

* `npm start`

	Start Browsersync and build assets.

* `npm run build` 

	Build assets.
