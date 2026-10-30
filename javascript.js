function addition(num1, num2) {
  display.textContent = +num1 + +num2;
}

function subtraction(num1, num2) {
  display.textContent = +num1 - +num2;
}

function multiplication(num1, num2) {
  display.textContent = +num1 * +num2;
}

function division(num1, num2) {
  display.textContent = +num1 / +num2;
}

function exponent(num1, num2) {
  display.textContent = num1 ** num2;
}

function factorial(num1) {
  let product = 1;
  for (let i = 1; i <= +num1; i++) {
    product *= i;
  }
  display.textContent = product;
}
let shouldResetDisplay = false;
const numbers = document.querySelectorAll(".numberButtons");
const display = document.getElementById("display");
numbers.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (shouldResetDisplay) {
      display.textContent = "";
      shouldResetDisplay = false;
    }
    const append = e.target.dataset.text;
    display.textContent += append;
  });
});

const back = document.getElementById("delete");
back.addEventListener("click", (e) => {
  display.textContent = display.textContent.slice(0, -1);
});

const allClear = document.getElementById("allClear");
allClear.addEventListener("click", (e) => {
  display.textContent = "";
  num1 = "";
  num2 = "";
  operator = "";
});

let num1 = "";
num2 = "";
operator = "";

const operatorButton = document.querySelectorAll(".operatorButtons");
operatorButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (operator === "") {
      operator = e.target.id;
      num1 = "";
      num2 = display.textContent;
      console.log(`operator contains: ${operator}. num1 contains: ${num1}.`);
      display.textContent = "";
    } else {
      num1 = display.textContent;
      operate();
      num2 = display.textContent;
      operator = e.target.id;
      num1 = "";
      shouldResetDisplay = true;
    }
  });
});

function operate() {
  switch (operator) {
    case "addition":
      addition(num2, num1);
      break;

    case "subtraction":
      subtraction(num2, num1);
      break;

    case "multiplication":
      multiplication(num2, num1);
      break;

    case "division":
      division(num2, num1);
      break;

    case "exponent":
      exponent(num2, num1);
      break;

    case "factorial":
      factorial(num2);
      break;
  }
}

const equals = document.getElementById("equals");
equals.addEventListener("click", (e) => {
  compute();
});

function compute() {
  if (num1 === "") {
    num1 = display.textContent;
  }
  console.log(`num1 = ${num1} and num2 = ${num2}`);
  operate();
  num2 = display.textContent;
  operator = "";
  shouldResetDisplay = true;
}
