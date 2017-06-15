const { play, instrument, instruments } = require('repl').repl.context

const Rx = require('node-keyboard-rx')()
const chalk = require('chalk')

module.exports = (input, delay = 500) => {
    input = [].concat(input)
    Rx.Observable.from(instruments)
        .concatMap(ins => Rx.Observable.of(ins).delay(delay))
        .do(ins => process.stdout.write(`${chalk.grey(ins)}\n`))
        .flatMap(ins => input.map(instrument(ins)))
        .subscribe(play)
}
