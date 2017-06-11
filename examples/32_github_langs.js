const repl = require('repl').repl
const { play, instrument } = repl.context

const github = require('node-keyboard-github')

const chalk = require('chalk')

const mapping = require('./__github_mappings')

module.exports = () => {
    const { grey, white } = chalk
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

    Object.keys(mapping).forEach(lang => {
        const { color, notes, onInstrument } = mapping[lang]

        sub
            .filter(filterBy(lang))
            .do(() => stdout.write(color(`${lang} `)))
            .flatMap(() => notes)
            .map(instrument(onInstrument))
            .subscribe(play)
    })

}
