const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkBtn = document.querySelector(".checkbtn");
const message = document.querySelector(".error");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const table = document.querySelector(".return-table");
const wapas = document.querySelector(".wapas");
table.style.display = "none";

const notes = [2000, 500, 100, 50, 20, 10, 1];

checkBtn.addEventListener("click", () => {
  message.style.display = "none";
  if (billAmount.value > 0) {
    table.style.display = "block";

    if (Number(cashGiven.value) >= Number(billAmount.value)) {
      const returnAmount = cashGiven.value - billAmount.value;
      wapas.innerText = "Amount to be Return is : " + returnAmount + " Rupees";
      //   console.log(returnAmount);
      calculateChange(returnAmount);
    } else {
      table.style.display = "none";

      showMessage(
        "Piad amount is less then Bill amount Collact atleast equal to the bill amount."
      );
    }
  } else {
    table.style.display = "none";

    showMessage("The Enter amount is not valid, Enter valid amount");
  }
});
function calculateChange(returnAmount) {
  for (let i = 0; i < notes.length; i++) {
    const numberOfNotes = Math.trunc(returnAmount / notes[i]);
    returnAmount %= notes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}
