function card(){
   let cardNumber = document.getElementById(`cardNumber`).value;
   let strong = document.querySelector(`strong`);
   let pay = document.querySelector(`#payment`)
   let pin = document.getElementById(`pin`);
 
if(cardNumber==11111111){
strong.innerHTML= `Islomjon Farkhodov`
pay.classList.remove(`payment`)
pin.classList.remove(`payment`)
}else{
    strong.innerHTML= `Enter your card number` 
    pay.classList.add(`payment`)  
    pin.classList.add(`payment`)
}


}
setInterval(card, 10);