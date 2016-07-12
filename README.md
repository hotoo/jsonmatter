# README

jsonmatter is a JSON formatter tool.

## INSTALL

```bash
$ npm install jsonmatter -g
```

## USAGE

```bash
$ cat tmp.json | jsonmatter --indent 4
```

for Vim:

```vim
autocmd BufNewFile,BufRead *.json setlocal formatprg=jsonmatter
```

## OPTIONS

### -i, --indent <indent space count>

default indent is `2` spaces.
