const categoryResolver = {
    Query:{
        categoryById: async(_, { name }, { dataSources })=>{
            return dataSources.inventoryAPI.categoryById(name);
        },

        allCategories: async(_, { }, { dataSources })=>{
            return dataSources.inventoryAPI.allCategories();
        }
    },
    
    Mutation:{
        createCategory: async(_, { category }, { dataSources })=>{
            return dataSources.inventoryAPI.createCategory(category);
        }
    }
};

module.exports = categoryResolver;