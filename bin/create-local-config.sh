#!/usr/bin/env bash

set -e;

if [ ! -e .env.json ]; then
    cp env-sample.json .env.json;
    echo "Created .env.json"
else
    echo ".env.json is already exists."
fi
