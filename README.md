# fast-new-tab #

[![NPM version][npm-image]][npm-url] ![dependencies][dependencies-image] [![License MIT][license-image]](LICENSE)

[![NPM](https://nodei.co/npm/fast-new-tab.png)](https://nodei.co/npm/fast-new-tab/)

**fast-new-tab** is a simple Chrome extension: fast new tab page without deep scripts and requests, and with all internal Chrome links.  
**fast-new-tab** replace default Chrome newtab page to static clear page with basic chrome://* links.

## Usage ##
```bash
$ npm install fast-new-tab
$ chromium-browser --pack-extension=fast-new-tab --pack-extension-key=fast-new-tab.pem
```
It's create **fast-new-tab**.crx (extension package) and **fast-new-tab**.peb (extension private key).  
Then drop **fast-new-tab**.crx on page [chrome://extensions](chrome://extensions) and confirm installing package.  
Instruction on developer.chrome.com: [packaging](https://developer.chrome.com/extensions/packaging).

## Test ##
Preview new tab page:
```bash
$ npm install
$ npm test
```

If you need repack **fast-new-tab**.crx after "npm install", remove node_modules before:
```bash
$ rm -v -I -r ./node_modules/
```
It's not necessary, but it just reduce the size of the package (a little).

## License ##
[MIT](LICENSE)

[license-image]: https://img.shields.io/badge/license-MIT-blue.svg "license-image"
[dependencies-image]: https://img.shields.io/gemnasium/mathiasbynens/he.svg?maxAge=2592000 "dependencies-image"
[npm-image]: https://img.shields.io/npm/v/fast-new-tab.svg "npm-image"
[npm-url]: https://www.npmjs.com/package/fast-new-tab "fast-new-tab"