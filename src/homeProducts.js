// const productContainer = document.querySelector("#productContainer");
// const productTemplate = document.querySelector("#productTemplate");

// export const showProductContainer = (products)=>{
//     if(!products){
//         return false;
//     }

//     products.forEach((curProd) => {
//         const {brand,category,description,id,image,name,price,stock} = curProd;
//         const productClone = document.importNode(productTemplate.content,true);
//         productClone.querySelector('.pro-name').textContentcontent = productClone;
//         productContainer.append(productClone);
//     });
// }
import { homeQuantityToggle } from "./homeQuantityToggle.js";
import { addToCart } from "./addToCart.js";


export const showProductContainer = (products)=>{
   const productContainer = document.querySelector('#productContainer');
const productTemplate = document.querySelector('#productTemplate');
 if(!products){
        return false; 
    }
products.forEach((currProd) => {
    const {brand,category,description,id,image,name,price,stock} = currProd;
    const productClone = document.importNode(productTemplate.content,true);
    productClone.querySelector('#cardValue').setAttribute('id',`card${id}`);
    productClone.querySelector('.category').textContent = category;
    productClone.querySelector('.pro-name').textContent = name;
    productClone.querySelector('.pro-img').src = image;
    productClone.querySelector('.pro-img').alt = name;
    productClone.querySelector('.productStock').textContent = stock;
    productClone.querySelector('.pro-des').textContent = description;
    productClone.querySelector('.productprice').textContent = `pkr${price}`;
    productClone.querySelector('.productactualprice').textContent = `₨ ${price * 4}`;
    
    productClone.querySelector('.stockElement').addEventListener('click',(event)=>{
     homeQuantityToggle(event,id,stock);
     
     
     
    });
    
    productClone.querySelector('.Add-To-Cart_btn').addEventListener('click',(event)=>{
        addToCart(event,id,stock);
    });
    productContainer.append(productClone)
});

}