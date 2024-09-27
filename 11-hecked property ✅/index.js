//A propriedade .checked em JavaScript é usada para verificar o estado de seleção de elementos de formulário do tipo checkbox (<input type="checkbox">) e radio buttons (<input type="radio">).

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.addEventListener("click", () => {
    if(myCheckBox.checked) {
        subResult.textContent = `You are subscribed!`;
    }else{
        subResult.textContent = `You are not subscribed!`;
    }

    if(visaBtn.checked) {
        paymentResult.textContent = `You are paying with Visa`;
    }else if(masterCardBtn.checked){
        paymentResult.textContent = `You are paying with MasterCard`;
    }else if(payPalBtn.checked){
        paymentResult.textContent = `You are paying with PayPal`;
    }else{
        paymentResult.textContent = `You must select a payment type`;
    }
  
});    