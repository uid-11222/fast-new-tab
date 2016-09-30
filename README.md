# fast-new-tab #

[![NPM version][npm-image]][npm-url] ![dependencies][dependencies-image] [![License MIT][license-image]](LICENSE)

[![NPM](https://nodei.co/npm/fast-new-tab.png)](https://nodei.co/npm/fast-new-tab/)

**fast-new-tab** is a simple Chrome extension: fast new tab page without deep scripts and requests, without any permissions, and with all internal Chrome links.  
**fast-new-tab** replace default Chrome new tab page to static clear page with basic chrome://* links.

## Usage ##
```bash
$ npm install fast-new-tab
$ cd fast-new-tab
```
Then drop **fast-new-tab**.crx on page [chrome://extensions](chrome://extensions) and confirm installing package.

Or you can packaging your own version:
```bash
$ chromium-browser --pack-extension=extension
```
It's create extension.crx (extension package) and extension.peb (extension private key).  
Instruction from developer.chrome.com: [packaging](https://developer.chrome.com/extensions/packaging).

## Test ##
Preview new tab page:
```bash
$ npm install
$ npm test
```

## License ##
[MIT](LICENSE)

[license-image]: https://img.shields.io/badge/license-MIT-blue.svg "license-image"
[dependencies-image]: https://img.shields.io/gemnasium/mathiasbynens/he.svg?maxAge=2592000 "dependencies-image"
[npm-image]: https://img.shields.io/npm/v/fast-new-tab.svg "npm-image"
[npm-url]: https://www.npmjs.com/package/fast-new-tab "fast-new-tab"