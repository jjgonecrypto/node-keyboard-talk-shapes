const { from, delay, toAudio, toLogger } = require('repl').repl.context

module.exports = () =>
    from('c','e','g')
        .pipe(delay(500))
        .pipe(toAudio)
        .pipe(toLogger)
