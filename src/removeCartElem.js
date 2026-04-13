import { getCartProductFromLS } from "./getCartProductsLS.js";
import { showToast } from "./showToast.js";
import { updateCartValue } from "./updateCartValue.js";

export const RemoveCartElem = (id)=>{
    let cartProducts = getCartProductFromLS();
   cartProducts =  cartProducts.filter((currProd)=>currProd.id != id);
   // update th local storag with non.removed elements
   localStorage.setItem("cartProductLS",JSON.stringify(cartProducts));


   // will remove elementsof cart
   let removeDiv = document.getElementById(`card${id}`);
   if(removeDiv){
    removeDiv.remove();
  // Toast PopUp
    showToast("Delete",id);
   }
    updateCartValue(cartProducts);
}