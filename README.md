# ES6 WebExtension Boilerplate <!-- omit in toc -->

<!-- Change the badges below to suit your project -->

<!--
[![Mozilla Add-on](https://img.shields.io/amo/v/es6-webextension-boilerplate.svg)](https://addons.mozilla.org/en-US/firefox/addon/es6-webextension-boilerplate)
[![Mozilla Add-on](https://img.shields.io/amo/users/es6-webextension-boilerplate.svg)](https://addons.mozilla.org/en-US/firefox/addon/es6-webextension-boilerplate)
[![Mozilla Add-on](https://img.shields.io/amo/dw/es6-webextension-boilerplate.svg)](https://addons.mozilla.org/en-US/firefox/addon/es6-webextension-boilerplate)
[![Mozilla Add-on](https://img.shields.io/amo/stars/es6-webextension-boilerplate)](https://addons.mozilla.org/en-US/firefox/addon/es6-webextension-boilerplate)
-->
[![Beerpay](https://beerpay.io/mathiscode/es6-webextension-boilerplate/badge.svg?style=beer-square)](https://beerpay.io/mathiscode/es6-webextension-boilerplate)  [![Beerpay](https://beerpay.io/mathiscode/es6-webextension-boilerplate/make-wish.svg?style=flat-square)](https://beerpay.io/mathiscode/es6-webextension-boilerplate?focus=wish)
[![Build Status](https://travis-ci.org/mathiscode/es6-webextension-boilerplate.svg?branch=master)](https://travis-ci.org/mathiscode/es6-webextension-boilerplate)
[![GitHub license](https://img.shields.io/github/license/mathiscode/es6-webextension-boilerplate.svg?color=blue)](https://github.com/mathiscode/es6-webextension-boilerplate/blob/master/LICENSE)
[![Standardjs](https://img.shields.io/badge/code_style-standard-blue.svg)](https://standardjs.com)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-blue.svg)](https://github.com/mathiscode/es6-webextension-boilerplate/compare)
[![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?url=https://github.com/mathiscode/es6-webextension-boilerplate#readme&hashtags=firefox,chrome,passwords,security)

---

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Development](#development)
- [Modifying](#modifying)
- [Building](#building)
- [Version Sync](#version-sync)
- [Internationalization](#internationalization)

---

## Introduction

ES6 WebExtension Boilerplate is designed to get a new browser addon started quickly.

- Ready-to-use development workflow from live-reload to publishing
- Manifest version is automatically kept in sync with package.json version
- Internationalization Utilities

## Getting Started

*Optional:* You'll probably want to [use this repository as a template](https://github.com/mathiscode/es6-webextension-boilerplate/generate), then replace the clone URL and directory name below.

```sh
git clone https://github.com/mathiscode/es6-webextension-boilerplate.git
cd es6-webextension-boilerplate
npm install # or yarn
```

## Development

```sh
npm run develop # or yarn develop
```

This will cause webpack to watch for changes and automatically compile the extension, as well as automatically load your extension into Firefox using [web-ext](https://github.com/mozilla/web-ext).

You can tweak the web-ext config in [web-ext-config.js](web-ext-config.js).

If you prefer to only start webpack in watch mode: `npm start`

## Modifying

You will want to look at the following files and directories:

- [extension/manifest.json](extension/manifest.json) - Your extension's manifest
- [extension/_locales/en/messages.json](extension/_locales/en/messages.json) - English (default) localized messages
- [src/background.js](src/background.js) - Background script
- [src/content.js](src/content.js) - Content script
- [src/views/popup](src/views/popup) - Files related to the extension's toolbar popup (browser action)
- [src/views/options](src/views/options) - Files related to the extension's options page

## Building

```sh
npm run build # or yarn build
```

This will compile your code and create a ZIP file in the `web-ext-artifacts` directory that is ready to be uploaded to [AMO](https://addons.mozilla.org) or [Chrome Web Store](https://chrome.google.com/webstore).

AMO requires that you submit the full source to be listed publicly, so the build command also zips the entire source into `web-ext-artifacts/source.zip` to be submitted with your extension.

**Note:** If your operating system doesn't provide a `zip` command, you will see a warning, but your source will still be zipped properly.

## Version Sync

There is a utility to automatically keep your manifest version synced with your package.json version.

When incrementing your version, use the following commands:

- `npm run version:patch`
  - to increment patch number
- `npm run version:minor`
  - to increment minor number
- `npm run version:major`
  - to increment major number

## Internationalization

[Internationalization](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization) is supported, and locale definitions are found in [extension/_locales](extension/_locales).

There is also a helper utility in [src/utils/i18n.js](src/utils/i18n.js) that will allow you to localize your extension's HTML pages. This is done by default in the options and popup pages.

In the HTML, use the `data-localize` attribute to specify the message key to use; eg:

`<h1 data-localize="__MSG_extensionName__"></h1>`

To see this in action, refer to [src/views/options](src/views/options) and [src/views/popup](src/views/popup).
