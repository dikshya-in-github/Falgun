import product from "./products.js";
import { signin as login, signin, signout } from "./authentication.js";

const { createProduct, editProduct, deleteProduct, getProduct } = product;

createProduct();
editProduct();
deleteProduct();
getProduct();

login();
signout();
