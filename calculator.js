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
      // if no numbers, let number become firstNumber
      console.log(`${number.innerText} was pressed`);

      if (screenLow.innerText == 0) {
        screenLow.innerText = number.innerText;
      } else {
        screenLow.innerText += number.innerText;
      }

      // if contains operand, let numbers become secondNumber
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
    // If firstNumber exists, add operand

    // If secondNumber exists, no operand
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

evaluate.addEventListener("click", (e) => {
  console.log("Equals was pressed");
  let equation = screenLow.innerText;
  console.log(equation);
  result(equation);
});

const result = (equation) => {
  let equationArray = equation.split("");
  console.log(equationArray);
  equationArray.find(locateOperand);
  console.log(resultOperand);
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
  console.log(tempString);

  if (resultOperand == "+") {
    resultArray = tempString.split("+");
  } else if (resultOperand == "*") {
    resultArray = tempString.split("x");
  } else if (resultOperand == "-") {
    resultArray = tempString.split("-");
  } else {
    resultArray = tempString.split("÷");
  }

  console.log(resultArray);

  let firstNumber = resultArray[0];
  console.log(firstNumber);

  let secondNumber = resultArray[1];
  console.log(secondNumber);

  console.log(firstNumber, resultOperand, secondNumber);
  reallyDoTheMaths(firstNumber, resultOperand, secondNumber);
};

const reallyDoTheMaths = (firstNumber, resultOperand, secondNumber) => {
  switch (resultOperand) {
    case "+":
      answer = firstNumber + secondNumber;
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

  console.log(answer);
  screenHigh.innerText = answer;
};
