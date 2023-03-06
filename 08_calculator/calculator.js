const add = function() {
	let sum = 0;
  for (const item of arguments) {
    if (typeof item === "number") {
      sum += item;
    }
  }
  return sum;
};

const subtract = function() {
	let output = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    if (typeof arguments[i] === "number") {
      output -= arguments[i];
    }
  }
  return output;
};

const sum = function(arr) {
	let sum = 0;
  for (const item of arr) {
    if (typeof item === "number") {
      sum += item;
    }
  }
  return sum;
};

const multiply = function() {
  let output = 1;
  for (const item of arguments) {
    if (typeof item === "number") {
      output *= item;
    }
    if (typeof item === "object") {
      for (const arrItem of item) {
        output *= arrItem;
      }
    }
  }
  return output;
};

const power = function(base, exp) {
	let output = 1;
  for (let i = 1; i <= exp; i++) {
    output *= base;
  }
  return output;
};

const factorial = function(input) {
	let output = 1;
  for (let i = 1; i <= input; i++) {
    output *= i;
  }
  return output;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
