import { getCartProductFromLS } from "./getCartProductsLS.js";
import { showToast } from "./showToast.js";
import { updateCartValue } from "./updateCartValue.js";
   
// to get the cart data from local storage
// to update the cart value and also to get th data always ready from local storage


getCartProductFromLS();
export const addToCart = (event,id,stock)=>{
let arrLocalStorageProduct = getCartProductFromLS();
  const currentProdElem = document.querySelector(`#card${id}`);
//   console.log(currentProdElem);
  let quantity = currentProdElem.querySelector('.productQuantity').innerText;
  let price = currentProdElem.querySelector('.productprice').innerText;
  console.log(quantity);
  console.log(price);

  price = price.replace('pkr','');

 let existingProd = arrLocalStorageProduct.find((currProd)=>currProd.id== id);
 console.log(existingProd);

 if(existingProd && quantity > 1){
  quantity = Number(existingProd.quantity) +Number(quantity);
  price = Number(price * quantity);
  let updatedCart={id,quantity,price};
  updatedCart = arrLocalStorageProduct.map((currProd)=>{
   return currProd.id==id?updatedCart:currProd;
  })
  console.log(updatedCart);
  localStorage.setItem('cartProductLS',JSON.stringify(updatedCart));
    // Toast PopUp
    showToast("Add",id);
 }
 if(existingProd){
  // alert('Duplicate');
  return false;
 }


 

  price = Number(price * quantity);
  quantity = Number(quantity)
  let updateCart={id,quantity,price};

  arrLocalStorageProduct.push(updateCart);
  localStorage.setItem('cartProductLS',JSON.stringify(arrLocalStorageProduct));


  // update the cart button value
  updateCartValue(arrLocalStorageProduct);
  // Toast PopUp
  showToast("Add",id);

}