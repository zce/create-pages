# create-pages

[![Build Status][travis-image]][travis-url]
[![Coverage Status][codecov-image]][codecov-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![NPM Version][version-image]][version-url]
[![License][license-image]][license-url]
[![Dependency Status][dependency-image]][dependency-url]
[![devDependency Status][devdependency-image]][devdependency-url]
[![Code Style][style-image]][style-url]

> Set up a modern pages project by running one command.

## Installation

```shell
$ yarn add create-pages

# or npm
$ npm install create-pages
```

## Usage

<!-- TODO: Introduction of API use -->

```javascript
const createPages = require('create-pages')
const result = createPages('zce')
// result => 'zce@zce.me'
```

## API

<!-- TODO: Introduction of API -->

### createPages(name[, options])

#### name

- Type: `string`
- Details: name string

#### options

##### host

- Type: `string`
- Details: host string
- Default: `'zce.me'`

## CLI Usage

<!-- TODO: Introduction of CLI -->

```shell
$ yarn global add create-pages

# or npm
$ npm install create-pages -g
```

```shell
$ create-pages --help

  Usage: create-pages <input>

  Options:

    -V, --version  output the version number
    -H, --host     Email host
    -h, --help     output usage information
```

## Contributing

1. **Fork** it on GitHub!
2. **Clone** the fork to your own machine.
3. **Checkout** your feature branch: `git checkout -b my-awesome-feature`
4. **Commit** your changes to your own branch: `git commit -am 'Add some feature'`
5. **Push** your work back up to your fork: `git push -u origin my-awesome-feature`
6. Submit a **Pull Request** so that we can review your changes.

> **NOTE**: Be sure to merge the latest from "upstream" before making a pull request!

## License

[MIT](LICENSE) &copy; zce <w@zce.me> (https://zce.me)



[travis-image]: https://img.shields.io/travis/zce/create-pages.svg
[travis-url]: https://travis-ci.org/zce/create-pages
[codecov-image]: https://img.shields.io/codecov/c/github/zce/create-pages.svg
[codecov-url]: https://codecov.io/gh/zce/create-pages
[downloads-image]: https://img.shields.io/npm/dm/create-pages.svg
[downloads-url]: https://npmjs.org/package/create-pages
[version-image]: https://img.shields.io/npm/v/create-pages.svg
[version-url]: https://npmjs.org/package/create-pages
[license-image]: https://img.shields.io/npm/l/create-pages.svg
[license-url]: https://github.com/zce/create-pages/blob/master/LICENSE
[dependency-image]: https://img.shields.io/david/zce/create-pages.svg
[dependency-url]: https://david-dm.org/zce/create-pages
[devdependency-image]: https://img.shields.io/david/dev/zce/create-pages.svg
[devdependency-url]: https://david-dm.org/zce/create-pages?type=dev
[style-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[style-url]: http://standardjs.com
