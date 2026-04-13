import { updateCartValue } from "./updateCartValue.js";

export const getCartProductFromLS = ()=>{
    let cartProducts = localStorage.getItem("cartProductLS");
    if(!cartProducts){
        return [];
    }
    cartProducts=JSON.parse(cartProducts); // in ls, data is inthe form of string.. so we get its original forms
    //update the cart button value
    updateCartValue(cartProducts);
   return cartProducts;
}