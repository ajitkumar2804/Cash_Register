const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const btnnext = document.querySelector("#next");
const btncheck = document.querySelector("#check");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];


btncheck.addEventListener("click", function validateAmount() {
    hideMessage();
    refreshTable();
    if (billAmount.value > 0 && cashGiven.value > billAmount.value) {
        if (cashGiven.value >= billAmount.value) {
            const amountToReturned = cashGiven.value - billAmount.value;
            calulateChange(amountToReturned);

        }
    } else {
        showMessage("Please Enter Proper Values");
    }
});
function calulateChange(amountToReturned) {
    for (let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(amountToReturned / availableNotes[i]);
    
    amountToReturned %= availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
}
}
function hideMessage() {
    message.style.display = "none";
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerHTML = msg;
}

function refreshTable() {
    for (var i=0; i < availableNotes.length; i++) {
        noOfNotes[i].innerText = "";
    }
}

