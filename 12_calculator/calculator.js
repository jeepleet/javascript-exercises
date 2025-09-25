const add = function(a ,b) {
  const plus = a + b;
  return plus;
}

const subtract = function(a, b) {
  const minus = a - b;
  return minus;

}

const sum = function(array) {
  let sum = 0;
  array.forEach(num => {
    sum += num;
  })
    return sum;
};

const multiply = function(array) {
let sum = 1;
array.forEach(num => {
  sum *= num;
})
return sum;
};

const power = function(a, b) {
  return Math.pow(a, b);

}

const factorial = function(n) {
  let result = 1;
  while (n > 1) {
    result *= n;
    n--;
  }
  return result;

}


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
