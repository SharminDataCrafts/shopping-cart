function handleProductChange(productId, productTotal, price, flag){
    let productInput = document.getElementById(productId);
    const productCount = parseInt(productInput.value);
    const productNewCount = productCount+1*flag;

   if(productNewCount>=0){
    productInput.value = productNewCount;
    const productTotalPrice = document.getElementById(productTotal);
    productTotalPrice.innerHTML = productNewCount*price;
    calculateTotal();
   }
}

function calculateTotal(){
    const phoneTotal = getInputValue('phone-total');
    const caseTotal = getInputValue('case-total');
   
    const subTotal = document.getElementById('sub-total');
    let subTotalPrice = phoneTotal+caseTotal
    subTotal.innerText = subTotalPrice;

    const tax = document.getElementById('tax');
    let taxPrice = Math.round(subTotalPrice*0.1);
    tax.innerHTML = taxPrice;

    const totalPrice = document.getElementById('total-price');
    totalPrice.innerHTML = subTotalPrice+taxPrice;
} 

calculateTotal();
function getInputValue(productTotalPrice){
    const productTotal = document.getElementById(productTotalPrice);
    const productTotalCount =parseInt(productTotal.innerHTML); 
    return productTotalCount;
}