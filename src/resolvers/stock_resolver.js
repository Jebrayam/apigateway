const stockResolver = {
    Query:{
        stockByProduct: async(_, { product }, { dataSources })=>{
            return dataSources.inventoryAPI.stockByProduct(product);
        },
        
        allStock: async(_, { }, { dataSources })=>{
            return dataSources.inventoryAPI.allStock();
        }
    },
    
    Mutation:{
        createStock: async(_, { stock }, { dataSources })=>{
            return dataSources.inventoryAPI.createStock(stock);
        },
        
        updateStock: async(_, { stock, product })=>{
            return dataSources.inventoryAPI.updateStock(stock, product)
        }
    }
};

module.exports = stockResolver;