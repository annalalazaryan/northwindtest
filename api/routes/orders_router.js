// - - - - - - - - - - - - - - - - ORDERS Router - - - - - - - - - - - - - - - - -  //
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

'use strict'

const Router = require('koa-router')
const ordersRouter = new Router()

const ordersCTRL = require('../controllers/ordersCTRL')

// ** Routes start

ordersRouter.get('/orders/count',
	ordersCTRL.getOrdersCount)

module.exports = ordersRouter
