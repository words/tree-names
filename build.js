var fs = require('fs')

var trees = fs
  .readFileSync('./trees.txt', 'utf8')
  .split('\n')
  .map(l => l.trim())
  .filter(Boolean)
  .filter((tree, index, all) => all.indexOf(tree) === index)

fs.writeFileSync('./trees.json', JSON.stringify(trees, null, 2) + '\n')
