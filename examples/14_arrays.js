const repl = require('repl').repl

const chalk = require('chalk')
const { play } = repl.context

const Rx = require('node-keyboard-rx')()

const shapes = require('node-keyboard-shapes')

module.exports = () => {
    const entries = [
        {
            name: 'Ash',
            thoughts: {}
        },
        {
            name: 'Rox',
            thoughts: {}
        },
        {
            name: 'Pete',
            thoughts: {}
        },
        {
            name: 'Marie',
            thoughts: [{}, {}, {}]
        },
        {
            name: 'Jenn',
            thoughts: {}
        }
    ]

    const shapeMapper = shapes.objToChord('eb3')

    Rx.Observable.from(entries)
        .concatMap(e => Rx.Observable.of(e).delay(500))
        .do(({ name }) => process.stdout.write(`\n${name} `))
        .map(shapeMapper)
        .do(({ chords }) => process.stdout.write(chalk.grey(`\t(${chords[0]})`)))
        .flatMap(({ notes }) => notes)
        .subscribe(play)
}
