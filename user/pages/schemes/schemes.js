let targetButtonOne = document.querySelector("div.buttons button.item-one");
let targetButtonTwo = document.querySelector("div.buttons button.item-two");
let targetButtonThree = document.querySelector("div.buttons button.item-three");
let targetButtonFour = document.querySelector("div.buttons button.item-four");


function check(targetButton) {
    let status = Math.round(Math.random());
    if (status == 1) {
        alert("You are eligible!");
        targetButton.innerHTML = "Apply";
    } else {
        alert("Sorry, you are not eligible for this scheme!");
    }
}

let original = (targetButton) => {
    targetButton.innerHTML = "Check Eligibility";
    alert("Applied successfully!");
}

function actionOne() {
    if (targetButtonOne.innerHTML == "Check Eligibility") {
        check(targetButtonOne);
    } else if (targetButtonOne.innerHTML == "Apply") {
        original(targetButtonOne);
        document.querySelector("div.id div.item-one").style.color = "rgb(70, 211, 70)";
    } else {
        alert("idk what button you pressed there mate");
    }
}

function actionTwo() {
    if (targetButtonTwo.innerHTML == "Check Eligibility") {
        check(targetButtonTwo);
    } else if (targetButtonTwo.innerHTML == "Apply") {
        original(targetButtonTwo);
        document.querySelector("div.id div.item-two").style.color = "rgb(70, 211, 70)";
    } else {
        alert("idk what button you pressed there mate");
    }
}

function actionThree() {
    if (targetButtonThree.innerHTML == "Check Eligibility") {
        check(targetButtonThree);
    } else if (targetButtonThree.innerHTML == "Apply") {
        original(targetButtonThree);
        document.querySelector("div.id div.item-three").style.color = "rgb(70, 211, 70)";
    } else {
        alert("idk what button you pressed there mate");
    }
}

function actionFour() {
    if (targetButtonFour.innerHTML == "Check Eligibility") {
        check(targetButtonFour);
    } else if (targetButtonFour.innerHTML == "Apply") {
        original(targetButtonFour);
        document.querySelector("div.id div.item-four").style.color = "rgb(70, 211, 70)";
    } else {
        alert("idk what button you pressed there mate");
    }
}

// function action(targetButton) {
//     if (targetButton.innerHTML == "Check Eligibility") {
//         check(targetButton);
//     } else if (targetButton.innerHTML == "Apply") {
//         original(targetButton);
//     } else {
//         alert("idk what button you pressed mate")
//     }
// }

// function empty() {}

// let targetButtonList = document.querySelectorAll("div.buttons button");
// for (let i=0; i<targetButtonList.length; i++) {
//     console.log("im here");
//     // targetButtonList[i].addEventListener("click",action(targetButtonList[i]));
//     if (targetButtonList[i].addEventListener("click",empty())) {
//         console.log(targetButtonList[i]);
//     }
// }
