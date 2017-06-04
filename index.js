'use strict'

const path = require('path')
const examples = require('node-examples')

examples({ path: path.join(__dirname, 'examples'), prefix: 't', cache: false })
