const repl = require('repl').repl
const { play, instrument } = repl.context

const twitter = require('node-keyboard-twitter')

const chalk = require('chalk')

module.exports = (track) => {
    const { stdout } = process

    const sub = twitter.search({
        track
    }).do(({ user: { screen_name, followers_count } = {} }) => {
        stdout.write(`\n\nusername: ${chalk.red(screen_name)}\n`)
        stdout.write(`followers: ${chalk.blue(followers_count)}\n`)
    }).map(({ user: { followers_count }, entities} = {}) => {
        let onInstrument = 'choir'
        if (followers_count < 100) onInstrument = 'pizzicato_strings'
        else if (followers_count < 1000) onInstrument = 'marimba'
        else if (followers_count < 5000) onInstrument = 'bassoon'
        return { entities, onInstrument }
    }).share()

    const entityToNotes = {
        '': ['c3'],
        '#hashtags': ['g4'],
        '@user_mentions': ['f3', 'a4'],
        '/urls': ['d5', 'a3'],
        '$media': ['e2', 'e5']
    }

    Object.keys(entityToNotes).map(entity => {
        const key = entity.replace(/^[^a-z]/,'')
        return sub
            .filter(({ entities = {} }) =>
                entities[key] ? entities[key].length : true
            ).do(() => {
                if (entity) stdout.write(chalk.yellow(`${entity.replace(/user_/, '')} `))
            }).flatMap(({ onInstrument }) =>
                entityToNotes[entity].map(instrument(onInstrument))
            )
    }).forEach(s => s.subscribe(play))

}
