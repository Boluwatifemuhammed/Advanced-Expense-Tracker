const balance = document.getElementById("balance");
const incomeAmount = document.getElementById("income-amount");
const expenseAmount = document.getElementById("expense-amount");
const transactionList = document.getElementById("transaction-list");
const description = document.getElementById("description");
const amount = document.getElementById("amount");
const form = document.getElementById("transaction-form");

let transactions = [];

function updateUI() {

    transactionList.innerHTML= "";

    let total = 0;
    let incomeTotal = 0;
    let expenseTotal = 0;

    transactions.forEach(transaction => {
        total += transaction.amount;

        if (transaction.amount > 0 ) {
            incomeTotal += transaction.amount;            
        }else{
            expenseTotal += transaction.amount;
        }

        const div = document.createElement("div");

        div.classList.add("transaction");

        if(transaction.amount < 0){
            div.classList.add("expense-item");
        }

        div.innerHTML = `
            <p>
                ${transaction.description}        
            </p>
            <p>
                ${transaction.amount < 0 ? "-" : ""}
                $${Math.abs(transaction.amount).toFixed(2)}
            </p>

        `;

        transactionList.appendChild(div);
    
    });

    balance.textContent = `$${total.toFixed(2)}`;
    incomeAmount.textContent = `$${incomeTotal.toFixed(2)}`;
    expenseAmount.textContent = `$${Math.abs(expenseTotal).toFixed(2)}`;

}

form.addEventListener("submit", function(e){
    e.preventDefault();

    const transaction = {
        description: description.value,
        amount: Number(amount.value)
    };

    transactions.push(transaction);

    updateUI();

    description.value = "";
    amount.value = "";
});

