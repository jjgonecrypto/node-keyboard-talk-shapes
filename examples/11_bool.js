const { play, instrument } = require('repl').repl.context

const Rx = require('node-keyboard-rx')()

const morse = require('morse')
const chalk = require('chalk')

module.exports = (input) => {
    const { grey } = chalk
    const { stdout } = process

    const mWords = morse.encode(input).split(' ')

    Rx.Observable.from(mWords)
        .concatMap(word => Rx.Observable.of(word).delay(500))
        .do(() => stdout.write(' '))
        .flatMap(word => word.split(''))
        .concatMap(letter => Rx.Observable.of(letter).delay(150))
        .do(letter => stdout.write(grey(letter)))
        .map(letter => letter === '.' ? instrument('electric_guitar_muted')('c') : instrument('piano')('g4'))
        .subscribe(play)

}
