const { from, delay, on, toAudio, toPiano, toLogger, scale } = require('repl').repl.context

module.exports = () => {
    const goingUp = scale('c3', 'flamenco').concat(scale('c4', 'flamenco'))
    const goingDown = goingUp.concat().reverse().slice(1, -1)

    from(goingUp.concat(goingDown))
        .pipe(delay(200))
        .pipe(on('banjo'))
        .pipe(toAudio)
        .pipe(toPiano)
        .pipe(toLogger)
}
