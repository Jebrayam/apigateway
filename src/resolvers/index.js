const authResolver = require('./auth_resolver');
const categoryResolver = require('./category_resolver');
const orderResolver = require('./order_resolver');
const productResolver = require('./product_resolver');
const stockResolver = require('./stock_resolver');

const lodash = require('lodash');

const resolvers = lodash.merge(authResolver, categoryResolver, orderResolver,
                                productResolver, stockResolver);

module.exports = resolvers;