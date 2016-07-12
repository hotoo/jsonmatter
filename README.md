# README

jsonmatter is a JSON formatter tool.

## INSTALL

```bash
$ npm install jsonmatter -g
```

## USAGE

```bash
$ cat tmp.json | jsonmatter --indent "  "
```

for Vim:

```vim
autocmd BufNewFile,BufRead *.json setlocal formatprg=jsonmatter
```

## OPTIONS

### -i, --indent <indent string>

set indent by `"  "` for `"\t"` or what you want.
