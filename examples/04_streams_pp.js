const { from, delay, on, toAudio, toPiano, toLogger } = require('repl').repl.context

module.exports = () =>
    from('c','db','f','g','bb','c4','eb4','c4','bb','g','f','db')
        .pipe(delay(300))
        .pipe(on('banjo'))
        .pipe(toAudio)
        .pipe(toPiano)
        .pipe(toLogger)
