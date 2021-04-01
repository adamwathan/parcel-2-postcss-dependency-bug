const path = require('path')
module.exports = {
  plugins: [
    function (root, result) {
      result.messages.push({
        type: 'dependency',
        plugin: 'time-test',
        parent: result.opts.from,
        file: path.resolve('./dependency.txt'),
      })
      root.walkDecls((d) => {
        if (d.prop === 'content') {
          d.value = `"${Date.now()}"`
        }
      })
    },
  ],
}
