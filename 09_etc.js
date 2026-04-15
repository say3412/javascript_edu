// short-circuit evaluation
console.log(true && "hello"); // hello
console.log(false && "hello"); // false
console.log(true || "hello"); // true
console.log(false || "hello"); // hello

let userName = ""; // falsy
let displayName = userName || "guest";
console.log(displayName);

userName = "Brain";
displayName = userName || "guest";
console.log(displayName);

let isLoggedIn = true;
let userProfile = { name: "Alice" };

isLoggedIn && console.log(userProfile.name); // name

isLoggedIn = false;
isLoggedIn && console.log(userProfile.name); // nothing

// Null 병합 연산자 ?? :  null, undefined 만 따짐
console.log("// Null 병합 연산자 ?? :  null, undefined 만 따짐");

const name1 = null ?? "Guest";
console.log(name1);

const name2 = undefined ?? "Guest";
console.log(name2);

const name3 = "RM" ?? "Guest";
console.log(name3);

const name4 = "" || "Guest";
console.log(name4); // Guest

const name5 = "" ?? "Guest";
console.log(name5); // ""

// Object Desturing
const user = {
  name: "Alice",
  age: 30,
  school: "UofT",
};

const name6 = user.name;
const age6 = user.age;
console.log(name6, age6);

const { name, age } = user;
console.log(name, age);

const { name: userName1, age: userAge1 } = user;
console.log(userName1, userAge1);

// spread
console.log("--- // spread - 펼쳐주기 ---");

const arr1 = [1, 2, 3];
const arr2 = [...arr1];
console.log(arr2);

const person = { name: "Any", age: 15 };
const personNew = { ...person};
const personNew2 = { ...person,  heigh: 9};
console.log(personNew);

const user1 = { name: "Brown", age: 30, heigh: 9 };
const userNew = { ...user1, age: 21, heigh: 10 };
console.log(userNew);

// Rest 매개변수
console.log("--- // Rest 매개변수 - 모아주기 ---");

function sum(...nums) {
  console.log(nums);
}

sum(1, 2, 3, 4, 5);


function sum1(num1, num2, ...nums) {
  console.log(num1);
  console.log(num2);
  console.log(nums);
}

sum1(1, 2, 3, 4, 5);

// 문자열 조작
console.log("// 문자열 조작");

const str = "JavaScript";

console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.includes("script")); // f
console.log(str.includes("Java")); // t
console.log(str.startsWith("java")); // f
console.log(str.startsWith("Java")); // t
console.log(str.endsWith("Script")); //t
console.log(str.indexOf("a")); // 1  첫번째로 찾은 값
console.log(str.indexOf("z")); // -1
console.log(str.slice(0, 4)); // Java
console.log(str.slice(4)); // Script 주어진 값 뒤 전부
console.log(str.slice(1)); // avaScript
console.log(str.replace("Script", "script")); // Javascript

const str1 = "a,b,c";
const arr = str1.split(","); // [a,b,c]
console.log(arr);

const str2 = "   hello ";
console.log(str2.trim());

const str3 = "ha";
console.log(str3.repeat(3));

const str4 = "hello";
console.log(str4.charAt(1));

// 예외처리 try-catch-finally
console.log("// 예외처리 try-catch-finally");

try{
    console.log(a);
} catch (e) {
    console.log('error: ' + e);
}

try {
    // console.log('excute!')
    console.log(a);
} catch (e) {
    console.log('error!');
} finally {
    console.log('unconditionally excute!')
}

try {
    throw new Error('문제발생');
} catch (e) {
    console.log(e.message);
}

function checkAge(age) {
    if (age < 18) {
        throw new Error('미성년자')
    }

    return '통과';
}

try {
    checkAge(15)
} catch (e) {
    console.error(e)
}

