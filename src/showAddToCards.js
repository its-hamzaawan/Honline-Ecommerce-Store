import { fetchQuantityFromCartLS } from "../src/fetchQuantityFromCartLS.js";
import { getCartProductFromLS } from "../src/getCartProductsLS.js";
import { incrementDecrement } from "../src/incrementDecrement.js";
import { RemoveCartElem } from "../src/removeCartElem.js";
import { updateCartProductTotal } from "../src/updateCartProductTotal.js";
const initializeCards = async()=>{
const response = await fetch('./api/products.json');
if(!response){
    console.log(`Failed to fetch Products `);
    return;
}
const products= await response.json();
let cartProducts = getCartProductFromLS();
let filterProducts = products.filter((apiProd)=>{
 return cartProducts.some((curLSproduct)=>curLSproduct.id == apiProd.id)});
console.log(filterProducts);


// to update the addToCart Page

const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

const showCartProducts = ()=>{
   filterProducts.forEach((currProd) => {
      const {category,id,image,name,stock,price,event} = currProd;


      let productClone = document.importNode(templateContainer.content,true);

      const LSActualData = fetchQuantityFromCartLS(id,price);
      // const RemoveCartElement = RemoveCartElem(id);
      productClone.querySelector("#cardValue").setAttribute("id",`card${id}`);
      productClone.querySelector(".category").textContent = category;
      productClone.querySelector(".productImg").src = image
      productClone.querySelector(".productQuantity").textContent = LSActualData.quantity;
      productClone.querySelector(".productPrice").textContent = LSActualData.price;
      productClone.querySelector(".productName").textContent = name;
      
      productClone.querySelector(".stockElement").addEventListener('click',(event)=>incrementDecrement(id,price,stock,event)); 
      productClone.querySelector(".remove-to-cart-btn").addEventListener('click',()=>RemoveCartElem(id))
      cartElement.append(productClone);
   });
   updateCartProductTotal();
};
showCartProducts();

};
initializeCards();