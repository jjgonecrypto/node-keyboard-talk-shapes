const { play, instrument } = require('repl').repl.context

const Rx = require('node-keyboard-rx')()

const morse = require('morse')
const chalk = require('chalk')

module.exports = (input) => {
    const { grey } = chalk
    const { stdout } = process

    const mWords = morse.encode(input).split('')

    Rx.Observable.from(mWords)
        .concatMap(letter => {
            const delayBy = letter.trim() ? 100 : 200
            return Rx.Observable.of(letter).delay(delayBy)
        })
        .do(letter => stdout.write(grey(letter)))
        .filter(letter => letter.trim())
        .map(letter => letter === '.' ? instrument('electric_guitar_muted')('c') : instrument('guitar')('g4'))
        .subscribe(play)

}
