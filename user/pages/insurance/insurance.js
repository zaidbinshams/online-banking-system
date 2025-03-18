let targetButton = document.querySelector("div.buttons button.item");

function action() {
    if (targetButton.innerHTML == "Claim") {
        alert("Insurance claimed!");
    } else if (targetButton.innerHTML == "Renew") {
        alert("Insurance renewed!");
    } else {
        alert("idk what button you pressed mate");
    }
}