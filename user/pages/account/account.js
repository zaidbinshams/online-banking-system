function changeAccountStatus() {
    if (document.querySelector("div.accStatus").innerHTML == "Account Status: Active"){
        document.querySelector("div.accStatus").innerHTML = "Account Status: Deactivated";
        document.querySelector("button.deactivate").innerHTML = "Reactivate Account";
    } else {
        document.querySelector("div.accStatus").innerHTML = "Account Status: Active"
        document.querySelector("button.deactivate").innerHTML = "Deactivate Account";
    }
}

let balance = 10000;

let showBalance = () => document.querySelector("div.balance").innerHTML = `Balance: INR ${balance}`;

function deposit() {
    let amt = Number(prompt("Enter amount:"));
    balance += amt;
    alert(`INR ${amt} deposited to your bank account!`);
    showBalance();
}

function withdraw() {
    let amt = Number(prompt("Enter amount:"));
    if (amt <= balance) {
        balance -= amt;
        alert(`INR ${amt} withdrawn from your bank account!`);
        showBalance();
    } else {
        alert("Insufficiet Balance!");
    }
}

function transfer() {
    let recAcc = prompt("Enter recipient account number:");
    let amt = Number(prompt("Enter amount:"));
    if (amt <= balance) {
        balance -= amt;
        alert(`INR ${amt} succesfully transferred to ${recAcc}!`);
        showBalance();
    } else {
        alert("Insufficient Balance!");
    }
}