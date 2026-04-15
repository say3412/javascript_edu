function sayHello() {
  console.log("hello world!");
}

sayHello();

export default function sayHelloName(name) {
  console.log(`hello ${name}!`);
}

sayHelloName("Sarah");
sayHelloName("world");
sayHelloName(1);

console.log("----- function quiz -----");
function getMultiple(dan) {
  for (let i = 1; i < 10; i++) {
    console.log(`${dan} x ${i} = ${dan * i}`);
  }
}

getMultiple(7);

// 반환 함수
function sayHelloReturn(name) {
  return `Hello ${name}`;
}

let greeting = sayHelloReturn("RM");
console.log(greeting);
console.log(sayHelloReturn("Morning"));

function adda(num1, num2) {
  return num1 + num2;
}

let result = adda(5, 4);
console.log(result);

function sayHelloNoEx(name) {
  console.log("function start!");
  return;
  console.log("no execute!");
}

greeting = sayHelloNoEx("RM");
console.log(greeting);

console.log("----- function quiz 2 -----");
function getGrade(score) {
  let grade;

  if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else if (score >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  return grade;
}

console.log(getGrade(93));
console.log(getGrade(83));
console.log(getGrade(73));
console.log(getGrade(63));
console.log(getGrade(33));

console.log("----- function quiz 3 -----");
function calc(num1, op, num2) {
  let result;

  switch (op) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      result = 0;
  }

  return result;
}

console.log(calc(6, "+", 2));
console.log(calc(6, "-", 2));
console.log(calc(6, "*", 2));
console.log(calc(6, "/", 2));

// 함수의 할당
const sayHelloAllocate = sayHello;
sayHelloAllocate();
sayHello();

const calculator = calc;
console.log(calculator(2, "+", 3));

// 함수형 매개변수
function sayHi(name) {
  console.log(`Hi ${name}`);
}

function greet(name, callback) {
  console.log(name);
  callback(name);
}

console.log("----------");
greet("깐부", sayHi);
greet("선생님", sayHelloName);

console.log("----- function quiz 4 -----");
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiple(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function calc2(num1, num2, callback) {
  // console.log(num1 + ' ' + num2);
  console.log(callback(num1, num2));
}

calc2(5, 3, add);
calc2(5, 3, subtract);
calc2(5, 3, multiple);
calc2(5, 3, divide);

// 다양한 함수 정의 방식
console.log("----- 다양한 함수 정의 방식 -----");
function add1(n1, n2) {
  return n1 + n2;
}
console.log(add(1, 2));

let add2 = function (n1, n2) {
  return n1 + n2;
};
console.log(add2(1, 2));

let add3 = (n1, n2) => {
  return n1 + n2;
};
console.log(add3(1, 2));

// 매개변수로써 화살표 함수
console.log("----- function quiz 5 -----");
let resultCalc4 = calc2(10, 5, (num1, num2) => num1 + num2);
let resultCalc6 = calc2(6, 3, (num1, num2) => num1 - num2);
let resultCalc8 = calc2(20, 10, (num1, num2) => num1 * num2);
let resultCalc10 = calc2(1000, 100, (num1, num2) => num1 / num2);
let resultCalc2 = calc2(6, 2, (num1, num2) => {return num1 + num2});
let resultCalc5 = calc2(4, 2, (num1, num2) => {return num1 - num2});
let resultCalc7 = calc2(10, 2, (num1, num2) => {return num1 * num2});
let resultCalc9 = calc2(100, 20, (num1, num2) => {return num1 / num2});
console.log("----- function quiz 5 표현식 -----");
calc2(6, 2, function (num1, num2) {return num1 + num2});
calc2(10, 2, function (num1, num2) {return num1 - num2});
calc2(2, 2, function (num1, num2) {return num1 * num2});
calc2(100, 100, function (num1, num2) {return num1 / num2});

