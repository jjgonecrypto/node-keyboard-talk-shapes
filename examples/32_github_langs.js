const repl = require('repl').repl
const { play } = repl.context

const github = require('node-keyboard-github')

const chalk = require('chalk')

module.exports = () => {
    const { grey, white, red, blue, cyan, magenta, yellow, bgGreen, bgRed, bgBlue } = chalk
    const { stdout } = process

    const sub = github.starredRepos()
        .do(({ user, repo }) => stdout.write(grey(`\n\nUser: ${white(user)} Repo: ${white(repo)}\n`)))
        .share() // HOT observable to prevent multiple requests per subscription

    const THRESHOLD = 0.1

    const filterBy = lang => {
        return ({ languages }) => lang in languages && languages[lang] >= THRESHOLD
    }

    sub
        .filter(filterBy('JavaScript'))
        .do(() => stdout.write(yellow('JavaScript ')))
        .flatMap(() => ['a2','e4'])
        .subscribe(play)

    sub
        .filter(filterBy('CoffeeScript'))
        .do(() => stdout.write(red('CoffeeScript ')))
        .flatMap(() => ['c5'])
        .subscribe(play)

    sub
        .filter(filterBy('TypeScript'))
        .do(() => stdout.write(blue('TypeScript ')))
        .flatMap(() => ['c#5'])
        .subscribe(play)

    sub
        .filter(filterBy('Rust'))
        .do(() => stdout.write(magenta('Rust ')))
        .flatMap(() => ['f2', 'a4', 'c3'])
        .subscribe(play)

    sub
        .filter(filterBy('Go'))
        .do(() => stdout.write(cyan('Go ')))
        .flatMap(() => ['g2', 'b', 'd', 'f5'])
        .subscribe(play)

    sub
        .filter(filterBy('Python'))
        .do(() => stdout.write(bgGreen('Python ')))
        .flatMap(() => ['a2', 'c', 'e5'])
        .subscribe(play)

    sub
        .filter(filterBy('Swift'))
        .do(() => stdout.write(bgRed('Swift ')))
        .flatMap(() => ['f#2', 'd3', 'a4'])
        .subscribe(play)

    sub
        .filter(filterBy('Kotlin'))
        .do(() => stdout.write(bgBlue('Kotlin ')))
        .flatMap(() => ['e2', 'g#4', 'b4'])
        .subscribe(play)
}
