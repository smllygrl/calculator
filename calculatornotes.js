// www.section.io/engineering-education/building-a-calculator-a-javascript-project-for-beginners/

// https: document.getElementById("equation-display").value = "";

// lisetn to the function inputs

// addEventListener
// chooseOperation()

// listen to the numerical inputs including .

// addEventListener

// place live inputs into an area to be executed

// button.innerText
// appendNumber())

// execute equation on = and display result

// addEventListener
// compute
// updateDisplay

// clear input area when clear is pressed

// CREATING THE DISPLAY BOX
// let display = document.getElementById("display");

// number.addEventListener("click", () => {
//   console.log("A number was pressed");
// });

// operand.addEventListener("click", () => {
//   console.log("An operand was pressed");
// });

const zero = document.getElementById("zero").innerText;
const one = document.getElementById("one").innerText;
const two = document.getElementById("two").innerText;
const three = document.getElementById("three").innerText;
const four = document.getElementById("four").innerText;
const five = document.getElementById("five").innerText;
const six = document.getElementById("six").innerText;
const seven = document.getElementById("seven").innerText;
const eight = document.getElementById("eight").innerText;
const nine = document.getElementById("nine").innerText;
// Global Scope Values
let firstNumber = 0;
let secondNumber = 0;
let operator = "";

// console.log(number);
// When allClear is pressed, make both screens display empty strings
// allClear.addEventListener("click", () => {
//   screenHigh = "";
//   screenLow = "";
// });

// For every number button, execute the inputFirstNumberfunction
// document
//   .querySelectorAll(".number")
//   .forEach((n) => n.addEventListener("click", console.log("it work")));

// A function for adding an operator to the display/ equation
const inputOperator = (symbol) => {
  // console.log("operand has been clicked");

  symbol.addEventListener("click", () => {
    // When the symbol is pressed, convert previous input into a floating number value
    firstNumber = parseFloat(screen.innerHTML);
    // The operator is the value of the symbol pressed
    operator = symbol.innerHTML;
    if (
      // If there is nothing in the top display, or if the top display has an operand inside it
      !screenHigh.innerHTML ||
      screenHigh.innerHTML.includes(operand)
    ) {
      // Maintain the value of the display and add the operator as a string
      screenHigh.innerHTML = screenHigh.innerHTML + `${operator}`;
      // Otherwise, simply add the value of the symbol's HTML to the top screen
    } else if (screenHigh.innerHTML) {
      screenHigh.innerHTML += symbol.innerHTML;
    }
    screen.innerHTML = "0";
    return firstNumber, operator;
  });
};

// For every operand button, execute the inputOperator function
operand.forEach((symbol) => inputOperator(symbol));

let result = 0;

// The event listener for evaluate (=)
evaluate.addEventListener("click", () => {
  secondNumber = parseFloat(screenLow.innerHTML);

  switch (operator) {
    case "+":
      result = parseFloat(firstNumber) + parseFloat(secondNumber);
      break;
    case "-":
      result = parseFloat(firstNumber) - parseFloat(secondNumber);
      break;
    case "×":
      result = parseFloat(firstNumber) * parseFloat(secondNumber);
      break;
    case "÷":
      result = parseFloat(firstNumber) / parseFloat(secondNumber);
      break;
  }
  screen.innerHTML = result;
});

decimal.addEventListener("click", () => {
  if (screenLow.innerHTML.includes(".")) {
    screenLow.innerHTML = screenLow.innerHTML;
  } else if (screen.innerHTML) {
    screenLow.innerHTML += decimal.innerHTML;
  }

  if (screenHigh.innerHTML.includes(".")) {
    screenHigh.innerHTML = history.innerHTML;
  } else if (screenHigh.innerHTML) {
    screenHigh.innerHTML += decimal.innerHTML;
  }
});
