#!/usr/bin/env bash

set -e

git clone -b dist --quiet "https://github.com/${TRAVIS_REPO_SLUG}.git" dist

npm run dist

cd dist

git add -A
git commit -m "Update from travis $TRAVIS_COMMIT"
git push --quiet "https://${GH_TOKEN}@github.com/${TRAVIS_REPO_SLUG}.git" dist 2> /dev/null