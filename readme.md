# 🌳 tree-names

[![Build][build-badge]][build]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Common names for trees.

## Install

[npm][]:

```sh
npm install tree-names
```

## Use

```js
var trees = require('tree-names')

console.log(trees.slice(0, 10))
```

```js
[
  'acacia',  'alder',
  'apple',   'arborvitae',
  'ash',     'aspen',
  'avocado', 'balsam',
  'bamboo',  'banana'
]
```

## API

### `treeNames`

`tree-names` returns a list of strings (`Array.<string>`).

## License

[ISC][license] © [Zeke Sikelianos][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/words/tree-names.svg

[build]: https://travis-ci.org/words/tree-names

[downloads-badge]: https://img.shields.io/npm/dm/tree-names.svg

[downloads]: https://www.npmjs.com/package/tree-names

[size-badge]: https://img.shields.io/bundlephobia/minzip/tree-names.svg

[size]: https://bundlephobia.com/result?p=tree-names

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: http://zeke.sikelianos.com
