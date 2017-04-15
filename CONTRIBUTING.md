Thanks for contributing to `Vanilla` !!!

## Getting Started

### 0. Install PHP, composer, WP-CLI, MySQL ( or mariaDB ) and jq, cURL.

##### for OSX

PHP and cURL are pre-installed.

```
$ brew install composer wp-cli mysql jq 
```

### 1.Start Development!

1. Clone This Repository
    ```
    $ git clone git@github.com:torounit/vanilla.git
    ```
1. Initalize Composer
    ```
    $ cd vanilla
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
1. Run built-in Server
    ```
    $ composer server
    ```
1. Start `npm start`.
    ```
    $ npm start
    ```

## Commands

* `composer provision` 
    
    Provisioning WordPress.

* `composer server` 

    Start `wp server` and open browser.

* `npm start`
   
   Start Browsersync and build assets.

* `npm run build` 

   Build assets.
   
