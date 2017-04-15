#!/usr/bin/env bash

set -ex;

SH_DIR=$(cd $(dirname $0);pwd)

. $SH_DIR/check-dependency.sh
. $SH_DIR/config.sh
. $SH_DIR/check-mysql.sh

wp plugin activate wordpress-importer
curl $THEME_UNIT_TEST_URI > theme-unit-test-data.xml
wp import theme-unit-test-data.xml --authors=create --quiet
rm theme-unit-test-data.xml
