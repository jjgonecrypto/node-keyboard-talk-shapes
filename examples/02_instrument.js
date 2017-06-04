const { play, instrument } = require('repl').repl.context

module.exports = () => ['c','e','g','bb'].map(instrument('guitar')).forEach(play)
