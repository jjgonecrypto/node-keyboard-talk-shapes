const { play } = require('repl').repl.context

const mouse = require('node-keyboard-mouse')

module.exports = (width = 1680, height = 1050) => mouse.serialism({ w: width, h: height }).subscribe(play)
