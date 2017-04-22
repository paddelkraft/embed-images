#! /usr/bin/env node

var fs = require('fs');

var chalk = require('chalk');
var inlinePictures = require('./index');
var minimist = require('minimist');

var argv = minimist(process.argv.slice(2), {
  alias: {
    o: 'output',
    h: 'help'
  }
})

var usage = `
Usage:
  embed-images <input> -o <output.md>

Options:
  --output, -o       Output file
  --help, -h         Show help
`

if (argv.help) {
  console.log(usage)
  process.exit()
}

if (!argv._[0]) {
  error('input file is required')
  process.exit()
}

var input = argv._[0]
var output = argv.output

if (output) embed(input, output)
else embed(input)

function error (message) {
  console.log('[' + chalk.red('error') + '] ' + message)
}

function embed (input, output, cb) {
  fs.readFile(input, function (err, data) {
    if (err && cb) return cb(err)
    var original = String(data)

    inlinePictures(original).then ((converted)=>{

      if (output) {
        fs.writeFile(output, converted, function (err, data) {
          if (err && cb){
            return cb(err)
          }
          if (cb) {
            return cb()
          }
        });
      }

      else {
        console.log(converted);
      }
    })

  })
}