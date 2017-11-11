#!/usr/bin/env bash

set -e

if [ ! -e $HOME/.noto ]; then
	mkdir $HOME/.noto
	curl https://noto-website-2.storage.googleapis.com/pkgs/NotoSansCJKjp-hinted.zip > $HOME/.noto/NotoSansCJKjp-hinted.zip
fi

unzip $HOME/.noto/NotoSansCJKjp-hinted.zip "*.otf"
mkdir /usr/share/fonts/opentype/noto
mv NotoSans* /usr/share/fonts/opentype/noto/
fc-cache -f -v
