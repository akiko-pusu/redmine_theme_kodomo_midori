#!/bin/sh

echo "Start entrypoint script: $RAILS_ENV"
cd /app/redmine
bundle exec rake db:migrate
bundle exec rails runner public/themes/redmine_theme_kodomo_midori/miscs/sample.rb

exec "$@"
