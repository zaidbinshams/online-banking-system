let targetStatus = document.querySelectorAll("div.status .item");
console.log(targetStatus);
for (let i=0; i<targetStatus.length; i++) {
    if (targetStatus[i].innerHTML == "Successful") {
        targetStatus[i].style.color = "rgb(70, 211, 70)";
    } else {
        targetStatus[i].style.color = "rgb(228, 32, 32)";
    }
}

let targetSender = document.querySelectorAll("div.sender .item");
console.log(targetSender);
let targetAmt = document.querySelectorAll("div.amt .item");
console.log(targetAmt);
for (let i=0; i<targetSender.length; i++) {
    if (targetSender[i].innerHTML == "You") {
        targetAmt[i].style.color = "rgb(228, 32, 32)";
    } else {
        targetAmt[i].style.color = "rgb(70, 211, 70)";
    }
}