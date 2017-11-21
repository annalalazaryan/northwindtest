
'use strict'

const csv = require('fast-csv')
const fs = require('fs')

const OrdersModel = require('../models/orders_model')

/**
 * ordersController is module for geting orders information
 *
 * @example
 * const ordersCtrl = require('ordersCtrlPath')
 * ordersCtrl.getOrdersCount()
 *
 * @namespace module:controllers~ordersController
 * @type {Object}
 * @version v0
 * @variation v0
 */
const controller = {}
module.exports = controller

/**
 * ordersController.getOrdersCount
 *
 * @param {object} ctx - ctx object of KOA which contains request data.
 * @param {object} ctx.params - Query object of KOA request.
 * @param {object} ctx.query - Params object of KOA request.
 * @returns {string}
 *
 * @desc The total number of orders made each territory (based on the employee that made that order).
 *
 * @memberOf! module:controllers~ordersController(v0)
 * @public
 */
controller.getOrdersCount = async (ctx, next) => {
	let result = await OrdersModel.get_orders_count()

	if (result.err) {
		ctx.throw(result.status, result.err)
	}

	// write calculated result to csv file
	let fileName = 'orders.csv'
	await writeInFile(result, fileName)

	ctx.set('Content-disposition', `attachment; filename=${fileName}`)
	ctx.set('Content-type', 'text/csv')
	ctx.status = 200
	ctx.body = fs.createReadStream(fileName)
}

/* ----------------------------- PRIVATE Methods -------------------------------- */
/* ----------------------------------------------------------------------------- */

function writeInFile (data, fileName) {
	return new Promise(async (resolve, reject) => {
		const writableStream = fs.createWriteStream(fileName)

		writableStream.on('finish', function () {
			console.log('DONE!')
			return resolve()
		})

		csv.write(data, {headers: true})
			.pipe(writableStream)
	})
}
