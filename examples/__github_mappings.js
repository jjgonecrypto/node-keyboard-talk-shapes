
const chalk = require('chalk')
const { white, red, blue, cyan, magenta, yellow, green, bgYellow, bgGreen, bgRed, bgBlue, bgMagenta } = chalk

module.exports = {
    'JavaScript': {
        color: yellow,
        notes: ['a2', 'e4', 'd5'],
        onInstrument: 'banjo'
    },
    'Java': {
        color: bgYellow,
        notes: ['c5', 'e2', 'g3', 'b4'],
        onInstrument: 'guitar'
    },
    'TypeScript': {
        color: blue,
        notes: ['a2', 'c#5', 'e4'],
        onInstrument: 'harpsichord'
    },
    'Rust': {
        color: magenta,
        notes: ['f2', 'a4', 'c3'],
        onInstrument: 'organ'
    },
    'Go': {
        color: cyan,
        notes: ['g2', 'b', 'd', 'f5'],
        onInstrument: 'choir'
    },
    'Python': {
        color: bgGreen,
        notes: ['c', 'e4', 'g'],
        onInstrument: 'electric_guitar_muted'
    },
    'Ruby': {
        color: red,
        notes: ['c', 'e4', 'g', 'bb5', 'd6'],
        onInstrument: 'oboe'
    },
    'C++': {
        color: green,
        notes: ['b2', 'd4', 'f3', 'b5', 'd6'],
        onInstrument: 'bassoon'
    },
    'Swift': {
        color: bgRed,
        notes: ['f#2', 'd3', 'a4'],
        onInstrument: 'tuba'
    },
    'Kotlin': {
        color: bgBlue,
        notes: ['e2', 'g#4', 'b4'],
        onInstrument: 'honkeytonk_piano'
    },
    'C#': {
        color: white,
        notes: ['bb4', 'd2', 'f3', 'bb6'],
        onInstrument: 'sitar'
    },
    'PHP': {
        color: bgMagenta,
        notes: ['eb1', 'gb3', 'bb2', 'db4'],
        onInstrument: 'pan_flute'
    },
    'HTML': {
        color: yellow,
        notes: ['g4', 'c5', 'g3'],
        onInstrument: 'steel_drums'
    },
    'Elixir': {
        color: cyan,
        notes: ['d2', 'a4', 'e5'],
        onInstrument: 'muted_trumpet'
    },
    'Lua': {
        color: magenta,
        notes: ['a5', 'c6', 'e7', 'g6'],
        onInstrument: 'recorder'
    },
    'Haskell': {
        color: bgBlue,
        notes: ['f#2', 'd3', 'a4', 'c#6'],
        onInstrument: 'sax'
    }
}
