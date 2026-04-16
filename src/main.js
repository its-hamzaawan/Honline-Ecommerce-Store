// import "./style.css";
// import products from '../api/products.json';
import { showProductContainer } from "./homeProducts.js";
// import "../public/api/products.json"


// console.log(products);
async function loadProducts(){
    try{
        const response = await fetch('/api/products.json');
        const products = await response.json();
        console.log(products);
        showProductContainer(products)
        
    } catch (error){
        console.log("Error Loading Json:",error);
    }
}
loadProducts();






// 1) Define a function named ' showProductContainer ' that takes an aray of products as input 


// showProductContainer(products);



// contact page

const contactForm=document.getElementById("contactForm");
if(contactForm){
contactForm.addEventListener('submit', (e)=>{
     e.preventDefault();

     // collect data
     const formData = {
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        subject : document.getElementById('subject').value,
        message : document.getElementById('message').value
     };

     console.log('Form Submitted:',formData);

     //simple feedback for user
     alert("Thank you for your message! W will get back to you soon.");

     contactForm.reset();
        });
    }