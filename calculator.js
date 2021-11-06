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

// Event Listener Numbers
[zero, one, two, three, four, five, six, seven, eight, nine].forEach(
  (number) => {
    number.addEventListener("click", (n) => {
      if (screenLow.innerText == null) {
        screenLow.innerText = number.innerText;
      } else {
        screenLow.innerText += number.innerText;
      }
    });
  }
);

// Event Listener Operators
[divide, multiply, subtract, add].forEach((operand) => {
  operand.addEventListener("click", (o) => {
    console.log(`${operand.innerText} was pressed`);
    if (
      screenLow.innerText == null ||
      screenLow.innerText == 0 ||
      screenLow.innerText == "" ||
      screenLow.innerText == "."
    ) {
      alert("There needs to be a number before you press an operator! :(");
      return;
    } else {
      screenLow.innerText += operand.innerText;
    }
  });
});

// Event Listeners Other
allClear.addEventListener("click", (ac) => {
  console.log("AC was pressed");
  if (screenLow.innerText !== "" || screenHigh.innerText !== "") {
    screenLow.innerText = "";
    screenHigh.innerText = "";
  }
});

decimal.addEventListener("click", (d) => {
  if (screenLow.innerText.includes(".")) {
    return;
  } else {
    screenLow.innerText += decimal.innerText;
  }
});

evaluate.addEventListener("click", (e) => {
  console.log("Equals was pressed");
  if (
    screenLow.innerText == null ||
    screenLow.innerText == 0 ||
    screenLow.innerText == "."
  ) {
    alert("I can't compute this! There are no numbers! :(");
  } else if (
    !screenLow.innerText.includes("+") &&
    !screenLow.innerText.includes("-") &&
    !screenLow.innerText.includes("x") &&
    !screenLow.innerText.includes("÷")
  ) {
    alert("Add an operator to your equation!");
  } else {
    let equation = screenLow.innerText;
    result(equation);
  }
});

const result = (equation) => {
  let equationArray = equation.split("");
  equationArray.find(locateOperand);
  doTheMaths(equationArray);
};

const locateOperand = (resultArray) => {
  switch (resultArray) {
    case "+":
      resultOperand = "+";
      break;
    case "-":
      resultOperand = "-";
      break;
    case "x":
      resultOperand = "*";
      break;
    case "÷":
      resultOperand = "/";
      break;
  }
};

const doTheMaths = (equationArray) => {
  let tempString = equationArray.join("");

  if (resultOperand == "+") {
    resultArray = tempString.split("+");
  } else if (resultOperand == "*") {
    resultArray = tempString.split("x");
  } else if (resultOperand == "-") {
    resultArray = tempString.split("-");
  } else if (resultOperand == "/") {
    resultArray = tempString.split("÷");
  } else {
    alert("I can't find an operator!");
  }

  let firstNumber = resultArray[0];

  if (resultArray[1] == null || resultArray[1] == 0 || resultArray[1] == "") {
    alert("Please enter another number :)");
  } else {
    let secondNumber = resultArray[1];
    reallyDoTheMaths(firstNumber, resultOperand, secondNumber);
  }
};

const reallyDoTheMaths = (firstNumber, resultOperand, secondNumber) => {
  switch (resultOperand) {
    case "+":
      answer = parseFloat(firstNumber) + parseFloat(secondNumber);
      break;
    case "-":
      answer = firstNumber - secondNumber;
      break;
    case "*":
      answer = firstNumber * secondNumber;
      break;
    case "/":
      answer = firstNumber / secondNumber;
      break;
  }
  screenHigh.innerText = answer;
};
