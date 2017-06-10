const repl = require('repl').repl
const { play, instrument } = repl.context

const github = require('node-keyboard-github')

const chalk = require('chalk')

module.exports = () => {
    const { grey, white, red, blue, cyan, magenta, yellow, green, bgGreen, bgRed, bgBlue, bgMagenta } = chalk
    const { stdout } = process

    const THRESHOLD = 0.1
    const sub = github.starredRepos()
        .do(({ user, repo }) => stdout.write(grey(`\n\nUser: ${white(user)} Repo: ${white(repo)}\n`)))
        .do(({ languages }) => {
            stdout.write(grey('Languages: '))
            Object.keys(languages).filter(l => languages[l] >= 0.01).forEach(l => stdout.write(`${l} ${Math.round(languages[l] * 100)}%\t`))
            stdout.write('\n')
        })
        .share() // HOT observable to prevent multiple requests per subscription


    const filterBy = lang => {
        return ({ languages }) => lang in languages && languages[lang] >= THRESHOLD
    }

    sub
        .filter(filterBy('JavaScript'))
        .do(() => stdout.write(yellow('JavaScript ')))
        .flatMap(() => ['a2', 'e4', 'd5'])
        .map(instrument('guitar'))
        .subscribe(play)

    sub
        .filter(filterBy('Java'))
        .do(() => stdout.write(red('Java ')))
        .flatMap(() => ['c5', 'e2', 'g3', 'b4'])
        .map(instrument('guitar'))
        .subscribe(play)

    sub
        .filter(filterBy('TypeScript'))
        .do(() => stdout.write(blue('TypeScript ')))
        .flatMap(() => ['a2', 'c#5', 'e4'])
        .map(instrument('harpsichord'))
        .subscribe(play)

    sub
        .filter(filterBy('Rust'))
        .do(() => stdout.write(magenta('Rust ')))
        .flatMap(() => ['f2', 'a4', 'c3'])
        .map(instrument('organ'))
        .subscribe(play)

    sub
        .filter(filterBy('Go'))
        .do(() => stdout.write(cyan('Go ')))
        .flatMap(() => ['g2', 'b', 'd', 'f5'])
        .map(instrument('choir'))
        .subscribe(play)

    sub
        .filter(filterBy('Python'))
        .do(() => stdout.write(bgGreen('Python ')))
        .flatMap(() => ['c', 'e4', 'g'])
        .map(instrument('electric_guitar_muted'))
        .subscribe(play)

    sub
        .filter(filterBy('Ruby'))
        .do(() => stdout.write(red('Ruby ')))
        .flatMap(() => ['c', 'e4', 'g', 'bb5', 'd6'])
        .map(instrument('oboe'))
        .subscribe(play)

    sub
        .filter(filterBy('C++'))
        .do(() => stdout.write(green('C++ ')))
        .flatMap(() => ['b2', 'd4', 'f3', 'b5', 'd6'])
        .map(instrument('oboe'))
        .subscribe(play)

    sub
        .filter(filterBy('Swift'))
        .do(() => stdout.write(bgRed('Swift ')))
        .flatMap(() => ['f#2', 'd3', 'a4'])
        .map(instrument('tuba'))
        .subscribe(play)

    sub
        .filter(filterBy('Kotlin'))
        .do(() => stdout.write(bgBlue('Kotlin ')))
        .flatMap(() => ['e2', 'g#4', 'b4'])
        .map(instrument('honkytonk_piano'))
        .subscribe(play)

    sub
        .filter(filterBy('C#'))
        .do(() => stdout.write(white('C# ')))
        .flatMap(() => ['bb4', 'd2', 'f3', 'bb6'])
        .map(instrument('sitar'))
        .subscribe(play)

    sub
        .filter(filterBy('PHP'))
        .do(() => stdout.write(bgMagenta('PHP ')))
        .flatMap(() => ['eb1', 'gb3', 'bb2', 'db4'])
        .map(instrument('pan_flute'))
        .subscribe(play)
}
