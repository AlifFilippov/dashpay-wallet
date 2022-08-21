#!/bin/sh
rm -rf ./node_modules
watchman watch-del-all
watchman shutdown-server
rm -rf /tmp/metro-cache*
rm -rf /tmp/haste-map-metro-*
