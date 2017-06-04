const { play, instrument } = require('repl').repl.context

module.exports = () =>
    [false, false, false, true, false, false, false]
        .map(state => state ? ['c','e','g'] : ['c', 'eb', 'g'])
        .forEach((notes, i) => {
            setTimeout(() => notes.map(instrument('electric_guitar_muted')).forEach(play), 200*i)
        })

