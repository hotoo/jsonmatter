# README

[![NPM version][npm-badge]][npm-url]
[![Build Status][travis-badge]][travis-url]
[![Coverage Status][coveralls-badge]][coveralls-url]

[npm-badge]: https://img.shields.io/npm/v/jsonmatter.svg?style=flat
[npm-url]: https://www.npmjs.com/package/jsonmatter
[travis-badge]: https://travis-ci.org/hotoo/jsonmatter.svg?branch=master
[travis-url]: https://travis-ci.org/hotoo/jsonmatter
[coveralls-badge]: https://coveralls.io/repos/hotoo/jsonmatter/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/r/hotoo/jsonmatter

jsonmatter is a JSON formatter tool by stream.

## INSTALL

```bash
$ npm install jsonmatter -g
```

## USAGE

Node:

```js
const tokenizer = require('json-tokenizer');
const jsonmatter = require('jsonmatter');

const indent = '\t';

fs.createReadStream(path.resolve(__dirname, './source.json'))
  .pipe(tokenizer())
  .pipe(jsonmatter(indent))
  .pipe(process.stdout);
```

cli:

```bash
$ cat tmp.json | jsonmatter --indent 4
```

Vim:

```vim
autocmd FileType json setlocal formatprg=jsonmatter
```

```vim
:help gq
:help formatprg
:help formatexpr
```

## OPTIONS

### -i, --indent <indent space count>

default indent is `2` spaces, you can also use `'    '` or `'\t'`.
