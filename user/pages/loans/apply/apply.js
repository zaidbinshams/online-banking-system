let eligibleButton = document.querySelector("button.check");

function check() {
    let status = Math.random();
    if (eligibleButton.innerHTML == "Check Eligibility") {
        if (Math.round(status) == 1) {
            alert("You are eligible!");
            eligibleButton.innerHTML = "Apply";
        } else {
            alert("Sorry, you are not eligible!");
        }
    } else {
        alert("Loan applied!");
        eligibleButton.innerHTML = "Check Eligibility";
    }
}