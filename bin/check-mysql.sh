#!/usr/bin/env bash

set -eu;

MYSQLADMIN_PING="mysqladmin ping -u ${DB_USER}";
if [ -n "${DB_PASS}" ]; then
  MYSQLADMIN_PING+=" -p${DB_PASS}"
fi

if [ ! -e "`which mysqladmin`" ] || [ "`${MYSQLADMIN_PING}`" != "mysqld is alive" ]; then
  echo "MySQL not started."
  exit 0
fi
