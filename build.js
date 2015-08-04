const fs = require('fs')
const uniq = require('lodash').uniq
const compact = require('lodash').compact

var trees = fs.readFileSync('./trees.txt', 'utf8')
  .split('\n')
  .map(function(line){
    return line.trim()
  })

trees = uniq(compact(trees))

fs.writeFileSync('./trees.json', JSON.stringify(trees, null, 2))
