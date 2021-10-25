// Assign All The Selectors
const startValue = document.getElementById("startValue");
const endValue = document.getElementById("endValue");
const btnSubmit = document.getElementById("btnSubmit");
const btnClear = document.getElementById("btnClear");
const result = document.getElementById("results");

// Declare an array to hold the numbers fron the inputs
let numbersArray = [];

// The Event Listener
btnSubmit.addEventListener("click", controller);
btnClear.addEventListener("click", resetInput);

// The reset function
function resetInput() {
  location.reload(true);
}

// The Controller function
function controller() {
  getInputValue();
  displayResult();
}

// Getting the input values and convert the input into integer
function getInputValue() {
  const startNumber = Number.parseInt(startValue.value);
  const endNumber = Number.parseInt(endValue.value);

  if (Number.isInteger(startNumber) && Number.isInteger(endNumber)) {
    for (let i = startNumber; i <= endNumber; i++) {
      numbersArray.push(i);
    }
  } else {
    alert("Please enter a number");
  }
}

// Display the result
function displayResult() {
  let tableRow = "";
  let className = "";
  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] % 2 == 0) {
      className = "even";
    } else {
      className = "";
    }
    tableRow += `<tr><td class="${className}">${numbersArray[i]}</td></tr>`;
  }

  result.innerHTML = tableRow;
}
