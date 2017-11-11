#!/usr/bin/env bash

set -e

if [ ! -e $HOME/.noto ]; then
	mkdir $HOME/.noto
	curl https://noto-website-2.storage.googleapis.com/pkgs/NotoSansCJKjp-hinted.zip > $HOME/.noto/NotoSansCJKjp-hinted.zip
	unzip $HOME/.noto/NotoSansCJKjp-hinted.zip "*.otf"
	mkdir /usr/share/fonts/NotoSansCJKjp
	mv NotoSans* /usr/share/fonts/NotoSansCJKjp/
fi
