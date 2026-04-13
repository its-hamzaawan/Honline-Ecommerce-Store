export const showToast = (operation,id)=>{
const toast = document.createElement("div");
toast.classList.add("toast");

if(operation == "Add"){
    toast.textContent = `Product with ID ${id} has Been Added`;
}else{
    toast.textContent = `Product with ID ${id} has Been Deleted`;
}
document.body.append(toast);


// automatically remov popup after two seconds
setTimeout(() => {
    toast.remove();
}, 2500);
}