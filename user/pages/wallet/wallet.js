// let targetButton = document.querySelectorAll("div.buttons button");
// console.log(targetButton);
let balanceDiv = document.querySelector("div.balance");

let balance = 5400;

function pay() {
    let id = prompt("Enter recipient wallet ID:");
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

function add() {
    let amt = Number(prompt("Enter amount:"));
    alert(`INR ${amt} added to wallet.`);
    balanceDiv.innerHTML = `<b>Balance:</b> INR ${balance+amt}`;
}

// function action() {
//     for (let i=0; i<targetButton.length; i++) {
//         console.log(targetButton[i]);
//         if (targetButton[i].innerHTML=="Pay") {
//             pay();
//             break;
//         } else if (targetButton[i].innerHTML=="Add Money") {
//             add();
//             break;
//         } else {
//             alert("idk what button you pressed there mate");
//         }
//     }
// }