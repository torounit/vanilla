#!/usr/bin/env bash

set -ex;

if ! which jq; then
    echo "jq is not installed"
    exit 0;
fi

if ! which wp; then
    echo "WP-CLI is not installed"
    exit 0;
fi

## Get config.
ROOT=$(cd $(dirname $0);cd ../server;pwd)
DOC_ROOT=$ROOT
WP_PATH=$DOC_ROOT/wordpress
CONFIG_PATH=$ROOT/../.env.json

if [ -f "$CONFIG_PATH" ]; then
    DB_USER=$(cat $CONFIG_PATH | jq -r ".mysql.username")
    DB_PASS=$(cat $CONFIG_PATH | jq -r ".mysql.password")
    DB_NAME=$(cat $CONFIG_PATH | jq -r ".mysql.database")
    DB_HOST=$(cat $CONFIG_PATH | jq -r ".mysql.host")

    PORT=$(cat $CONFIG_PATH | jq -r ".server.port")
    HOST=$(cat $CONFIG_PATH | jq -r ".server.host")

    WP_TITLE=$(cat $CONFIG_PATH | jq -r ".wp.title")
    WP_DESCRIPTION=$(cat $CONFIG_PATH | jq -r ".wp.description")
    WP_LANG=$(cat $CONFIG_PATH | jq -r ".wp.lang")
    WP_GMT_OFFSET=$(cat $CONFIG_PATH | jq -r ".wp.gmt_offset")
    WP_REWRITE_STRUCTURE=$(cat $CONFIG_PATH | jq -r ".wp.rewrute_structure")

    WP_ADMIN_USER=$(cat $CONFIG_PATH | jq -r ".wp.admin.user")
    WP_ADMIN_PASSWORD=$(cat $CONFIG_PATH | jq -r ".wp.admin.password")
    WP_ADMIN_EMAIL=$(cat $CONFIG_PATH | jq -r ".wp.admin.email")

    WP_THEME=$(cat $CONFIG_PATH | jq -r ".wp.theme")

else
    echo ".env.json is NOT a file."
    exit 0
fi

MYSQLADMIN_PING="mysqladmin ping -u ${DB_USER}";
if [ -n "${DB_PASS}" ]; then
  MYSQLADMIN_PING+=" -p${DB_PASS}"
fi

if [ ! -e "`which mysqladmin`" ] || [ "`${MYSQLADMIN_PING}`" != "mysqld is alive" ]; then
  echo "MySQL not started."
  exit 0
fi

## Start Server if installed.
if ! $(wp core is-installed); then

    ## Recreate DB for WordPress.
    if [ $DB_PASS ]; then
        echo "DROP DATABASE IF EXISTS $DB_NAME;" | mysql -u$DB_USER -p$DB_PASS
        echo "CREATE DATABASE $DB_NAME DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;" | mysql -u$DB_USER -p$DB_PASS
    else
        echo "DROP DATABASE IF EXISTS $DB_NAME;" | mysql -u$DB_USER
        echo "CREATE DATABASE $DB_NAME DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;" | mysql -u$DB_USER
    fi

    ## Install WordPress.
    wp core install \
    --url=http://$HOST:$PORT \
    --title="$WP_TITLE" \
    --admin_user="$WP_ADMIN_USER" \
    --admin_password="$WP_ADMIN_PASSWORD" \
    --admin_email="$WP_ADMIN_EMAIL"

    ## Setup Options.
    wp option update blogname "$WP_TITLE"

    if [ $WP_DESCRIPTION ]; then
        wp option update blogdescription "$WP_DESCRIPTION"
    fi

    if [ $WP_GMT_OFFSET ]; then
        wp option update gmt_offset "$WP_GMT_OFFSET"
    fi

    if [ $WP_LANG ]; then
        wp core language install $WP_LANG
        wp core language activate $WP_LANG
    fi

    if [ $WP_REWRITE_STRUCTURE ]; then
        wp rewrite structure "$WP_REWRITE_STRUCTURE"
    fi

fi

# Activate Theme.
if [ $WP_THEME ]; then
	wp theme activate "$WP_THEME"
fi

# Activate Plugins.
wp plugin activate --all
