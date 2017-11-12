#!/usr/bin/env bash

set -e

if [ $# -lt 1 ]; then
	echo "usage: $0 <version>"
	exit 1
fi

version=$1

sed -i '' -e "s/^Stable tag: .*/Stable tag: ${version}/g" readme.txt;
npm run release -- ${version}

