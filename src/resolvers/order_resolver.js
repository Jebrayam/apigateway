const orderResolver = {
    Query:{
        orderByUsername: async(_, { username }, { dataSources })=>{
            return dataSources.inventoryAPI.orderByUsername(username);
        },

        orderById: async(_, { id }, { dataSources })=>{
            return dataSources.inventoryAPI.orderById(id);
        },

        allOrder: async(_, { }, { dataSources })=>{
            return dataSources.inventoryAPI.allOrder();
        }
    },
    
    Mutation:{
        createOrder: async(_, { order }, { dataSources })=>{
            return dataSources.inventoryAPI.createOrder(order);
        },

        updateOrder: async(_, { order, id }, { dataSources })=>{
            return dataSources.inventoryAPI.updateOrder(order, id);
        }
    }
};

module.exports = orderResolver;