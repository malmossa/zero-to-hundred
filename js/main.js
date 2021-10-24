
// EventListener
document.getElementById("btnSubmit").addEventListener("click", getValue);

/* Controller Function */

function getValue () {
  // Get values from the page
  let startValue = document.getElementById("startValue").value ;
  let endValue = document.getElementById("endValue").value ;

  let numbers = [];

  // Convert The input into integer
  startValue = parseInt(startValue);
  endValue = parseInt(endValue);

  // Check the input if it's a number
  if (Number.isInteger(startValue) && Number.isInteger(endValue)) {

    // Call generateNumbers function
    numbers = generateNumbers(startValue, endValue); 
  } else {
    alert("Please enter only numbers!")
  }
  
  //  Call displayNumbers function 
    displayNumbers(numbers);
  
}


/* Logic function */
// Generate Numbers 
function generateNumbers (sValue, eValue) {
  let numbers = [];

  for (let i = sValue; i <= eValue; i ++ ) {
    numbers.push(i);
  }
  return numbers
}


/* === View function */
// Display Numbers and mark even numbers bold
function displayNumbers (numbers) {
  let templateRows = "";

  for (let i = 0; i < numbers.length; i ++) {
    let number = numbers[i];
    templateRows += `<tr><td>${number}</td></tr>`
  }

  document.getElementById("results").innerHTML = templateRows;
}
