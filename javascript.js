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

const numbers = document.querySelectorAll(".numberButtons");
const display = document.getElementById("display");
numbers.forEach((button) => {
  button.addEventListener("click", (e) => {
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
});

let num1 = "";
num2 = "";
operator = "";

const operatorButton = document.querySelectorAll(".operatorButtons");
operatorButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    operator = e.target.id;
    num1 = display.textContent;
    console.log(`operator contains: ${operator}. num1 contains: ${num1}.`);
    display.textContent = "";
  });
});

function operate() {
  switch (operator) {
    case "addition":
      addition(num1, display.textContent);
      break;

    case "subtraction":
      subtraction(num1, display.textContent);
      break;

    case "multiplication":
      multiplication(num1, display.textContent);
      break;

    case "division":
      division(num1, display.textContent);
      break;

    case "exponent":
      exponent(num1, display.textContent);
      break;

    case "factorial":
      factorial(num1);
      break;
  }
}

const equals = document.getElementById("equals");
equals.addEventListener("click", (e) => {
  operate();
});
