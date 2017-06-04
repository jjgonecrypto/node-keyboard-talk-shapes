const repl = require('repl').repl

const { play } = repl.context

const mongo = require('node-keyboard-mongo')

module.exports = () => {
    const { listen, log, compose } = mongo.oplog

    const oplogStream = listen({
        uri: 'mongodb://localhost:26000/?replicaSet=myRS'
    })

    // oplogStream is Rx Observable of oplog events
    oplogStream
        .do(log) // log out received data
        .flatMap(compose) // transform data into music
        .subscribe(play, console.error) // play music
}
