
'use strict'

const http = require('http')
const CONFIGS = require('../../configs')

/**
 * Create OrdersModel geting and analyzing orders information
 *
 * @constructor module:models~ordersModel
 */
const OrdersModel = {}

/**
 * ordersModel.get_orders_count
 *
 * @desc The total number of orders made each territory (based on the employee that made that order).
 *
 * @memberOf! module:models~ordersModel
 * @public
 */
OrdersModel.get_orders_count = () => {
	return new Promise((resolve, reject) => {
		let query = `$select=TerritoryDescription&$expand=Employees($select=EmployeeID;$expand=Orders($select=OrderID))`
		let url = `${CONFIGS.serviceRoot}/Territories?${query}`

		let dataString = ''

		http.get(url, function (response) {
			response.on('data', function (chunk) {
				dataString += chunk
			})
			response.on('end', function () {
				let parsedData = JSON.parse(dataString)
				let territoriesOrders = calculateTerritoriesOrders(parsedData.value)

				return resolve(territoriesOrders)
			})
		})
			.on('error', reject)
	})
}

module.exports = OrdersModel

/* ----------------------------- PRIVATE Methods -------------------------------- */
/* ----------------------------------------------------------------------------- */

function calculateTerritoriesOrders (territoriesArray) {
	const calculatedData = []

	territoriesArray.forEach((territoryData) => {
		let territoryOrsders = calculateOrdersForTerritory(territoryData)
		let item = {Territory: territoryData.TerritoryDescription, NumberOfOrders: territoryOrsders}
		calculatedData.push(item)
	})

	return calculatedData
}

function calculateOrdersForTerritory (territoryData) {
	const territoryEmployeesArray = territoryData.Employees
	let ordersCount = 0

	territoryEmployeesArray.forEach((employeeData) => {
		ordersCount += employeeData.Orders.length
	})

	return ordersCount
}
