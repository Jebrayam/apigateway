const authTypeDefs = require('./auth_type_defs');
const categoryTypeDefs = require('./category_type_defs');
const orderTypeDefs = require('./order_type_defs');
const productTypeDefs = require('./product_type_defs');
const stockTypeDefs = require('./stock_type_defs');

const schemasArrays = [authTypeDefs, categoryTypeDefs, orderTypeDefs, 
                        productTypeDefs, stockTypeDefs];

module.exports = schemasArrays;