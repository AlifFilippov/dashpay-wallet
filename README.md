# dashpay-wallet

[![Build Status](https://travis-ci.com/dashevo/dashpay-wallet.svg?token=UzYXxxa3Wnmm1sy8HJPN&branch=master)](https://travis-ci.com/dashevo/dashpay-wallet)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

*Note: This is a prototype wallet which was developed on the React Native platform for the DashPay Wallet application for Dash Platform. No future development is being done on this repository, as this work has been absorbed by the native wallets. It is left here as an example / historical artifact.* **It is likely that this project will not work as-is, and the newer Platform dependencies will need to be updated.**

## Setup:
Install NodeJS, Android Studio, Java SDK 8 and Python 2.

On Windows you can install [Chocolatey](https://chocolatey.org) then run `choco install -y nodejs.install python2 jdk8 androidstudio` (If some of these are already installed you can omit them.)

Set up Android Studio and create a virtual device for testing. [Windows instructions from Technet](https://blogs.technet.microsoft.com/karanrustagi/2017/08/15/how-to-setup-android-emulator-using-android-studio/) (skip the last step)

In the **dashpay-wallet** project folder, run `npm i` to install dependencies.

Run `npm i -g react-native-cli`.

## Development:
Launch your android emulator from inside Android Studio or [from the command line](https://developer.android.com/studio/run/emulator-commandline).

Run the packager from the project folder: `npm start`

Launch the app on the emulator: `react-native run-android`. You can toggle *Live Reload* and *Hot Reloading* in the developer menu (Ctrl+M)

## Code Conventions
The project includes configurations for ESLint, Prettify, and Editorconfig. In order to benefit from these, make sure your IDE has those extensions installed and enabled.
