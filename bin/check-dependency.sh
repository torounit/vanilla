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