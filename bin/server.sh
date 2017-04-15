#!/usr/bin/env bash

set -ex;

SH_DIR=$(cd $(dirname $0);pwd)


. $SH_DIR/config.sh
. $SH_DIR/check-mysql.sh

## Open Built-in Server
open http://$HOST:$PORT
$WP_CLI server --host=$HOST --port=$PORT --docroot=$DOC_ROOT
