import { getCartProductFromLS } from "./getCartProductsLS.js";
import { updateCartProductTotal } from "./updateCartProductTotal.js";

export const incrementDecrement = (id,price,stock,event) =>{
   const currentCardElement = document.querySelector(`#card${id}`);
   const productQuantity = currentCardElement.querySelector(".productQuantity");
   const productPrice = currentCardElement.querySelector(".productPrice");

   // update local storage accordingly
   let localCartProducts = getCartProductFromLS();
   let quantity = 1;
   let localStoragePrice = 0;
   let existingProd = localCartProducts.find((currProd)=>currProd.id == id);
   if(existingProd){
   quantity = existingProd.quantity;
   localStoragePrice = existingProd.price;
   }else{
    localStoragePrice = price;
    price= price;
   }

   if(event.target.classList.contains('cartIncrement')){
    if(quantity < stock){
        quantity +=1;
    }
    else if(quantity == stock){
        quantity = stock;
        localStoragePrice = stock * price;
    }
   }

   if(event.target.classList.contains('cartDecrement')){
    if(quantity > 1 ){
        quantity -= 1;
    }
   }
  // finally update the price in local storage

localStoragePrice = price *quantity;
localStoragePrice = Number(localStoragePrice.toFixed(2));

productQuantity.textContent = quantity;
productPrice.textContent = localStoragePrice;
let updatedCart = {id,quantity,price:localStoragePrice};
updatedCart =  localCartProducts.map((currProd)=>{return  currProd.id == id? updatedCart:currProd;});

localStorage.setItem("cartProductLS",JSON.stringify(updatedCart));
updateCartProductTotal();
}