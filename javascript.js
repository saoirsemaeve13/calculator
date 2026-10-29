function addition(num1, num2) {
  console.log(+num1 + +num2);
}

function subtraction(num1, num2) {
  console.log(+num1 - +num2);
}

function multiplication(num1, num2) {
  console.log(+num1 * +num2);
}

function division(num1, num2) {
  console.log(+num1 / +num2);
}

function exponent(num1, num2) {
  console.log(num1 ** num2);
}

function factorial(num1) {
  let product = 1;
  for (let i = 1; i <= +num1; i++) {
    product *= i;
  }
  console.log(product);
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
