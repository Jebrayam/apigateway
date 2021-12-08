const productResolver = {
    Query:{
        productByName: async(_, { name }, { dataSources })=>{
            return dataSources.inventoryAPI.productByName(name);
        },   

        productByCategory: async(_, { category }, { dataSources })=>{
            return dataSources.inventoryAPI.productByCategory(category);
        },

        allProduct: async(_, { }, { dataSources })=>{
            return dataSources.inventoryAPI.allProduct();
        }
    },
    
    Mutation:{
        createProduct: async(_, { product }, { dataSources }) =>{
            return dataSources.inventoryAPI.createProduct(product);
        },

        updateProduct: async(_, { product, name }, { dataSources })=>{
            return dataSources.inventoryAPI.updateProduct(product, name);
        },

        deleteProduct: async(_, { name }, { dataSources })=>{
            return dataSources.inventoryAPI.deleteProduct(name);
        }
    }
};

module.exports = productResolver;