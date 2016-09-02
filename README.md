# README

jsonmatter is a JSON formatter tool.

## INSTALL

```bash
$ npm install jsonmatter -g
```

## USAGE

Node:

```js
const tokenizer = require('json-tokenizer');

fs.createReadStream(path.resolve(__dirname, './source.json'))
  .pipe(tokenizer())
  .pipe(jsonmater(indent))
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
