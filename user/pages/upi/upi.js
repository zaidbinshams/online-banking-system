let balanceDiv = document.querySelector("div.balance");

let balance = 6900;

function send() {
    let id = prompt("Enter recipient UPI ID:");
    let amt = Number(prompt("Enter amount:"));
    let final = confirm("Confirm payment?");
    if (final == true) {
        if (amt<=balance) {
            alert(`INR ${amt} paid to ${id}!`);
            balanceDiv.innerHTML = `<b>Balance:</b> INR ${balance-amt}`;
        } else {
            alert("Insufficient balance!");
        }
    } else {
        alert("Payment cancelled!");
    }
}

function request() {
    prompt("Enter UPI ID to send the request:");
    let amt = Number(prompt("Enter amount:"));
    let approved = Math.random();
    if (Math.round(approved) == 1) {
        alert(`Request accepted! INR ${amt} added to wallet.`);
        balanceDiv.innerHTML = `<b>Balance:</b> INR ${balance+amt}`;
    } else {
        alert("Request denied!");
    }
}