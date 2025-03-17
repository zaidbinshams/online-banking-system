let targetStatus = document.querySelectorAll("div.status .item");
console.log(targetStatus);
for (let i=0; i<targetStatus.length; i++) {
    if (targetStatus[i].innerHTML == "Paid") {
        targetStatus[i].style.color = "rgb(70, 211, 70)";
    } else {
        targetStatus[i].style.color = "rgb(228, 32, 32)";
    }
}