//console.log('hi');

const bg_input = document.querySelector('.js-typing-budget');
const item_input = document.querySelector('.js-typing-item');
const item_cost_entry = document.querySelector('.js-typing-item-cost');
const budget_button = document.querySelector('#bg-button');
const checkAmount_button = document.querySelector('#check-amount');
const total = document.querySelector('.js-total-budget');
const expense = document.querySelector('.js-product-expense');
const item_balance = document.querySelector('.js-product-balance');
const table = document.querySelector('.js-table');
let balance = 0;
let totalExpense = 0;
let bg_entry;
const cart = [];

function setBudget(element,consumption) {
    if(consumption > 0) {
        balance = Number(element - consumption);
    }
    else{
        balance = Number(balance + element);
    }
        item_balance.innerText = `${balance} $`;
}

budget_button.addEventListener('click', () => {
     bg_entry = bg_input.value;
    if(bg_entry.length > 0) {
        total.innerText = `${bg_entry} $`;
        setBudget(bg_entry,totalExpense);
        //balance = Number(balance + bg_entry);
        //item_balance.innerText = `${balance} $`;
        bg_input.value = "";
    }else{alert('Enter Budget amount plz!')}
});
    
function realBalance(value) {
    balance = Number(balance + value);
    if(balance <= bg_entry ) {
        item_balance.innerText = `${balance} $`;
        expense.innerText = `${totalExpense = parseInt(totalExpense) - parseInt(value)} $`;  
    }
}

function displayTodo() {
        let HTMLelement = "";
        for(let i = 0; i < cart.length; i++) {
            const retrieveItem = cart[i].product_name;
            const final_cost = cart[i].product_cost_entry_saver;
            const element = `
            <div class="single-todolist">
            <div class="Item">${retrieveItem}</div>
            <div class="single-todolist">${final_cost}$</div>
            <div class="single-todolist"><button onclick="
                editing('${retrieveItem}',${final_cost});
                cart.splice(${i},1);
                displayTodo();
            ">Edit</button></div>
            <div class="single-todolist"><button onclick="
                realBalance(${final_cost});
                cart.splice(${i},1);
                console.log(cart);
                displayTodo();
            ">Delete</button></div>
            </div>`;
            HTMLelement += element;
        }
        table.innerHTML = HTMLelement;
    }

checkAmount_button.addEventListener('click', () => {
    const product_cost_entry_saver = item_cost_entry.value;
    const product_name = item_input.value;
    if(product_cost_entry_saver.length > 0 && product_name.length > 0) {
        balance = Number(balance - product_cost_entry_saver);
        if(balance < 0 || balance < expense) {alert('Insufficient fund !')}
        else{
            cart.push({product_name,product_cost_entry_saver});
            displayTodo();
            expense.innerText = `${totalExpense = parseInt(totalExpense) + parseInt(product_cost_entry_saver)} $`;
            setBudget(bg_entry,totalExpense);
            console.log(cart);
        }  
        item_cost_entry.value = "";
        item_input.value = "";
    }else{alert('Fill empty field(s) plz!')}
});
function editing(name,price_tag) {
    item_cost_entry.value = price_tag;
    item_input.value = name;
}
console.log('Hi')