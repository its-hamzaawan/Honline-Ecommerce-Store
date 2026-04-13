export const homeQuantityToggle = (event,id,stock)=>{
const currentCardElement = document.querySelector(`#card${id}`);
// console.log(currentCardElement);
const productQuantity = currentCardElement.querySelector('.productQuantity');
// console.log(productQuantity);
let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;
// getAttribute read the value of an attribute from nelement

if((event.target.className == 'cartIncrement')){
    if(quantity < stock){
        quantity += 1;
    }
    else if(quantity == stock){
        quantity = stock;
    }
}

if((event.target.className == 'cartDecrement')){
    if(quantity > 1 ){
        quantity -= 1;
    }
    else if(quantity == stock){
        quantity = stock;
    }
}

productQuantity.innerText = quantity;
console.log(quantity);
productQuantity.setAttribute('data-quantity',quantity);
//setAttribute is used to add o update an attribute of an Html elemnt. 
return quantity;
};


