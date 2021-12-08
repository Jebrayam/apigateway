const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class InventoryAPI extends RESTDataSource {
    constructor(){
        super();
        this.baseURL = serverConfig.inventory_api_url;
    }

    async createCategory(category){
        category = new Object(JSON.parse(JSON.stringify(category)));
        return await this.post('/categories', category);
    }

    async categoryById(name){
        return await this.get(`/categories/${name}`);
    }

    async allCategories(){
        return await this.get('/categories/all');
    }

    ////////////////////////////////////////////////
    async createProduct(product){
        product = new Object(JSON.parse(JSON.stringify(product)));
        return await this.post('/products', product);
    }

    async allProduct(){
        return await this.get('/products/all');
    }

    async productByCategory(category){
        return await this.get(`/products/categories/${category}`);
    }

    async productByName(name){
        return await this.get(`/products/${name}`);
    }

    async updateProduct(product, name){
        product = new Object(JSON.parse(JSON.stringify(product)));  
        return await this.put(`/products/update/${name}`, product); 
    }

    async deleteProduct(name){
        return await this.delete(`/products/delete/${name}`)
    }

    ////////////////////////////////////////////////
    async createOrder(order){
        order = new Object(JSON.parse(JSON.stringify(order)));  
        return await this.post('/orders', order);  
    }
    
    async allOrder(){
        return await this.get('/orders/all');    
    }

    async orderByUsername(username){
        return await this.get(`/orders/user/${username}`);   
    }

    async orderById(id){
        return await this.get(`/orders/id/${id}`);   
    }

    async updateOrder(order, id){
        order = new Object(JSON.parse(JSON.stringify(order)));  
        return await this.put(`/orders/update/${id}`, order); 
    }

    ///////////////////////////////////////////////
    async createStock(stock){
        stock = new Object(JSON.parse(JSON.stringify(stock)));  
        return await this.post('/stock', stock);     
    }

    async allStock(){
        return await this.get('/stock/all');    
    }

    async stockByProduct(product){
        return await this.get(`/stock/${product}`);
    }

    async updateStock(stock, product){
        stock = new Object(JSON.parse(JSON.stringify(stock)));  
        return await this.put(`/stock/update/${product}`, stock);
    }
}

module.exports = InventoryAPI;