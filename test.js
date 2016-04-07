var fs = require('fs')
var test = require('tape')
var embed = require('./index')

test(function (t) {
  embed('example.md', 'output.md')
  fs.readFile('output.md', function (err, data) {
    if (data) t.ok()
    t.end()
  })
})