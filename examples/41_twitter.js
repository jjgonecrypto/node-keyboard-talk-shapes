const repl = require('repl').repl
const { play } = repl.context

const twitter = require('node-keyboard-twitter')

const chalk = require('chalk')

module.exports = (track) => {
    const { stdout } = process

    const sub = twitter.search({
        track
    }).do(({ user: { screen_name, followers_count } = {} }) => {
        stdout.write(`\n\nusername: ${chalk.red(screen_name)}\n`)
        stdout.write(`followers: ${chalk.blue(followers_count)}\n`)
    }).share()

    sub.map(() => 'c3').subscribe(play)

    sub
        .filter(({ entities: { user_mentions = [] } = {} }) => user_mentions.length)
        .do(() => stdout.write(chalk.yellow('@mentions ')))
        .flatMap(() => ['g4'])
        .subscribe(play)

    sub
        .filter(({ entities: { hashtags = [] } = {} }) => hashtags.length)
        .do(() => stdout.write(chalk.yellow('#hashtags ')))
        .flatMap(() => ['bb2'])
        .subscribe(play)

    sub
        .filter(({ entities: { urls = [] } = {} }) => urls.length)
        .do(() => stdout.write(chalk.yellow('//urls ')))
        .flatMap(() => ['d4']).subscribe(play)

    sub
        .filter(({ entities: { media = [] } = {} }) => media.length)
        .do(() => stdout.write(chalk.yellow('$media ')))
        .flatMap(() => ['e6']).subscribe(play)
}
