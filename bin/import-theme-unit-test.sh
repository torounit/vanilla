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
    THEME_UNIT_TEST_URI=$(cat $CONFIG_PATH | jq -r ".theme_unit_test_uri")
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

wp plugin activate wordpress-importer
curl $THEME_UNIT_TEST_URI > theme-unit-test-data.xml
wp import theme-unit-test-data.xml --authors=create --quiet
rm theme-unit-test-data.xml
