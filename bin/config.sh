#!/usr/bin/env bash

set -ex;

WP_CLI=wp

if ! which jq; then
    echo "jq is not installed"
    exit 0;
fi

if ! which $WP_CLI; then
    echo "wp-cli is not installed"
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

    THEME_UNIT_TEST_URI=$(cat $CONFIG_PATH | jq -r ".theme_unit_test_uri")

else
    echo ".env.json is NOT a file."
    exit 0
fi