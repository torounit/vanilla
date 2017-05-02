#!/usr/bin/env bash

set -eu;

SH_DIR=$(cd $(dirname $0);pwd)


. $SH_DIR/config.sh
. $SH_DIR/check-mysql.sh

$WP_CLI plugin activate wordpress-importer
curl $THEME_UNIT_TEST_URI > theme-unit-test-data.xml
$WP_CLI import theme-unit-test-data.xml --authors=create --quiet
rm theme-unit-test-data.xml
