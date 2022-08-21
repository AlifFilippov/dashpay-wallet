#!/bin/sh
rm -rf android/app/build
BUNDLE_DIR_PATH=android/app/build/intermediates/assets/release
mkdir -p $BUNDLE_DIR_PATH
react-native bundle --platform android --dev false --entry-file index.js --bundle-output $BUNDLE_DIR_PATH/index.android.bundle --assets-dest $BUNDLE_DIR_PATH
cd android && ./gradlew assembleRelease
echo APK file location: android/app/build/outputs/apk/release/app-release.apk
