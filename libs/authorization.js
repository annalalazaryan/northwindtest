'use strict'

module.exports = async (ctx, next) => {
	console.log('Authorization passed ...')
	await next()
}
