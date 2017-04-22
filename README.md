# embed-images

[![NPM version][npm-image]][npm-url]
[![js-standard-style][standard-image]][standard-url]

> embed image files in markdown as base64

Takes a markdown file with local images referenced by file and embeds the image content as `base64`.
Useful if you want to render standalone markdown files without serving or hosting individual image
files.

## install

Add to your project with

```bash
npm install embed-images --save
```

Or install as a command line tool with

```bash
npm install embed-images -g
```

## example

If you have a file `example.md` with

```markdown
# this is a markdown file with an image

![](example.png)
```

And call

```bash
embed-images example.md
```

You'll get

```markdown
# this is a markdown file with an image

<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==" />
```

## use as a module


```javascript
require('embed-images')(markdown).then(result=>{
    console.log(result);
});
```


## use as a cli

Just specify an input and pipe to stdout

```bash
embed-images input.md > output.md
```

specify an output file

```bash
embed-images input.md -o output.md
```

## license

[MIT](LICENSE)

[npm-image]: https://img.shields.io/badge/npm-v1.0.1-lightgray.svg?style=flat-square
[npm-url]: https://npmjs.org/package/embed-images
[standard-image]: https://img.shields.io/badge/code%20style-standard-lightgray.svg?style=flat-square
[standard-url]: https://github.com/feross/standard