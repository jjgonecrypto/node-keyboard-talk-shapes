const twitter = require('node-keyboard-twitter')

module.exports = () => {
    twitter.search({
        track: 'mongodb'
    }).do(twitter.log.summary).subscribe()
}
