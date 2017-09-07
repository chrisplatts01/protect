#! /bin/sh
sudo rm -R .tmp/
sudo rm -R dist
node dev-menu > app/templates/includes/dev-menu.njk;
gulp;
