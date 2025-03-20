function redeActivate(targetButton) {
    if (targetButton.innerHTML == "Deactivate") {
        targetButton.innerHTML = "Reactivate";
        targetButton.style.color = "white";
        targetButton.style.backgroundColor = "rgb(70, 211, 70)";
    } else if (targetButton.innerHTML == "Reactivate") {
        targetButton.innerHTML = "Deactivate";
        targetButton.style.color = "white";
        targetButton.style.backgroundColor = "rgb(228, 32, 32)";
    }
}

let targetButtonOne = document.querySelector("div.buttons button.item-one");
let targetButtonTwo = document.querySelector("div.buttons button.item-two");
let targetButtonThree = document.querySelector("div.buttons button.item-three");
let targetButtonFour = document.querySelector("div.buttons button.item-four");

let actionOne = () => targetButtonOne.addEventListener('click',redeActivate(targetButtonOne));
let actionTwo = () => targetButtonTwo.addEventListener('click',redeActivate(targetButtonTwo));
let actionThree = () => targetButtonThree.addEventListener('click',redeActivate(targetButtonThree));
let actionFour = () => targetButtonFour.addEventListener('click',redeActivate(targetButtonFour));