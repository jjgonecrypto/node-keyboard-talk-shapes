const { play } = require('repl').repl.context

const mouse = require('node-keyboard-mouse')

module.exports = () => mouse.serialism({ w: 1680, h: 1050 }).subscribe(play)
