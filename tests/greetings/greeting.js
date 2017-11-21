'use strict'

// ** Configurations
process.env.NODE_ENV = 'development'

// ** Require the dev-dependencies
let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../../app.js')
let should = chai.should()

chai.use(chaiHttp)

