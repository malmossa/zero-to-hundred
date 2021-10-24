const startValue = document.getElementById("startValue");
const endValue = document.getElementById("endValue");
const btnSubmit = document.getElementById("btnSubmit");
const result = document.getElementById("results");

let numbersArray = [];

btnSubmit.addEventListener("click", controller);

function controller() {
  getInputValue();
  displayResult();
}

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
