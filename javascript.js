let num1 = "";
num2 = "";
operator = "";

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
