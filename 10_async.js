import sayHelloName from './06_funtion.js';

console.log("no 1");
setTimeout(() => console.log("no 2"), 1000);
console.log("no 3");

function sayHello(name) {
  console.log(`hello ${name}`);
}

function asyncTest(name, callback) {
  console.log("timer start!");
  setTimeout(() => {
    callback(name);
  }, 3000);
}

function doAnotherThing() {
  for (let i = 1; i <= 300; i++) {
    console.log(`${i}번째 처리`);
  }
}

asyncTest("뷔", sayHello);
asyncTest('Alice', (name)=>{console.log(`Hello, ${name}!`)})
asyncTest("Peter", function (name) {
  console.log(`Nice to meet you, ${name}`);
});
asyncTest("Mia", sayHelloName); // import function
doAnotherThing();
