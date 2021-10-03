// Display of the calculator
let screenHigh = document.getElementById("screenHigh");
let screenLow = document.getElementById("screenLow");

// Declaring buttons
const allClear = document.getElementById("clear");
const evaluate = document.getElementById("evaluate");
const decimal = document.getElementById("decimal");

// Declaring Number Buttons
const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");

// Declaring Operand Buttons
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const subtract = document.getElementById("subtract");
const add = document.getElementById("add");

// Event Listener NUMBERS
[zero, one, two, three, four, five, six, seven, eight, nine].forEach(
  (number) => {
    number.addEventListener("click", (n) => {
      console.log(`${number.innerText} was pressed`);
      if (screenLow.innerText == 0) {
        screenLow.innerText = number.innerText;
      } else {
        screenLow.innerText += number.innerText;
      }
    });
  }
);

// Event Listener OPERANDS
[divide, multiply, subtract, add].forEach((operand) => {
  operand.addEventListener("click", (o) => {
    console.log(`${operand.innerText} was pressed`);
    if (screenLow.innerText == 0) {
      return;
    } else {
      screenLow.innerText += operand.innerText;
    }
  });
});

// Event Listeners MISC
allClear.addEventListener("click", (ac) => {
  console.log("AC was pressed");
  if (screenLow.innerText !== "" || screenHigh.innerText !== "") {
    screenLow.innerText = "";
    screenHigh.innerText = "";
  }
});

decimal.addEventListener("click", (d) => {
  console.log(`${decimal.innerText} was pressed`);
  if (screenLow.innerText.includes(".")) {
    return;
  } else {
    screenLow.innerText += decimal.innerText;
  }
});

let result = 0;
let firstNumber = 0;
let secondNumber = 0;

evaluate.addEventListener("click", (e) => {
  console.log("Equals was pressed");
  // equation =

  // switch () {
  //   case "+":
  //     result = parseFloat(firstNumber) + parseFloat(secondNumber);s
  //     break;
  //   case "-":
  //     result = parseFloat(firstNumber) - parseFloat(secondNumber);
  //     break;
  //   case "×":
  //     result = parseFloat(firstNumber) * parseFloat(secondNumber);
  //     break;
  //   case "÷":
  //     result = parseFloat(firstNumber) / parseFloat(secondNumber);
  //     break;
  // }
  screenHigh.innerText = screenLow.innerText;
  let equation = parseFloat(screenHigh.innerText);
  console.log(equation);
});
