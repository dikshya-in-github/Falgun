const product = require("./products");

function createProduct(){
    console.log("HELLO");
}
createProduct()

let { createProduct: updateProduct, editProduct, deleteProduct, getProduct } = product;

updateProduct();
editProduct();
deleteProduct();
getProduct();
