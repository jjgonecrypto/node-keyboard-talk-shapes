const repl = require('repl').repl

const { play } = repl.context

const mongo = require('node-keyboard-mongo')

module.exports = () => {
    const { tail, log, compose } = mongo

    const cursor = tail({
        uri: 'mongodb://localhost:26000',
        db: 'example',
        // this must be a capped collection https://docs.mongodb.com/manual/core/capped-collections/
        collection: 'log'
    })

    // tail is Rx Observable of oplog events
    cursor
        .do(log) // log out received data
        .flatMap(compose) // transform data into music
        .subscribe(play, console.error) // play music
}
