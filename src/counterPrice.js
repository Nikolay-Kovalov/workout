data = {
    price: 0,
    quantity: 0,
    calcTotalPrice() {
        return (this.price * this.quantity).toFixed(2)
    }
}

const formEl = document.getElementById("countForm");
const amount = document.querySelector(".text");
const total = document.querySelector(".total")
const numberInput = document.querySelector(".input__number")
const rangeInput = document.querySelector(".range__input")

dataFill();
update();
formEl.addEventListener("change", onFormChange);


function onFormChange({ target }) {

    const { value } = target;

    // if (target === formEl.elements.range) {
    //     amount.textContent = value;  
        
    // }
    target.setAttribute("value", value)
    
    dataFill();
    update();
    console.log(data)
}

function dataFill() {
     data.price = formEl.elements.number.getAttribute("value");
    data.quantity = formEl.elements.range.getAttribute("value");
}

function update() {
    total.textContent = data.calcTotalPrice() + " "+"UAH"; 
     amount.textContent = data.quantity
}