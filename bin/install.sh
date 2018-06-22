#!/bin/sh

sleep 10
wp core install --url="http://localhost:$1" --title="WP Theme Test Environment" --admin_user="admin" --admin_password="admin" --admin_email="admin@example.com" --path="/var/www/html"

wp plugin install wordpress-importer --activate
wp theme activate vanilla

curl https://raw.githubusercontent.com/WPTRT/theme-unit-test/master/themeunittestdata.wordpress.xml > /tmp/themeunittestdata.wordpress.xml
wp import /tmp/themeunittestdata.wordpress.xml --authors=create  --quiet

curl https://raw.githubusercontent.com/jawordpressorg/theme-test-data-ja/master/wordpress-theme-test-date-ja.xml > /tmp/wordpress-theme-test-date-ja.xml
wp import /tmp/wordpress-theme-test-date-ja.xml --authors=create  --quiet

wp rewrite structure "/%postname%/"
wp option update posts_per_page 5
wp option update page_comments 1
wp option update comments_per_page 5
wp option update show_on_front page
wp option update page_on_front 701
wp option update page_for_posts 703
