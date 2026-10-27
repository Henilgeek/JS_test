class Product {
    name
    productID
    price
    constructor(name,productID,price) {
        this.name = name
        this.productID = productID
        this.price = price
    }
     displayproduct() {
        console.log("Name",this.name);
        console.log("Price",this.price);
        console.log("Product",this.productID);
    }
}
const p1 = new Product("laptop",1000,1)
p1.displayproduct();