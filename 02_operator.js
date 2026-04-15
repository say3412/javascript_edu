// 산술 연산자
let num1 = 5;
let num2 = 3;
console.log(-num1);
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

// 비교 연산자
console.log(123 == 123);
console.log(123 == '123');
console.log(123 === 123);
console.log(123 === '123');

console.log(123 != 123);
console.log(123 != '123');
console.log(123 !== 123);
console.log(123 !== '123');


//  논리 연산자
let num3 = 2;

console.log(num1 > num2 && num2 > num3);
console.log(num1 == num2 && num1 > num2);
console.log(num1 == num2 || num1 > num2);

console.log(num1 - num2 > num2 -num3 && num2 ==0);
console.log(num1 + num2 > num3 || num3 > 0);

// 대입 연산자
let num = 0;
console.log(num);
num++;
console.log(num);
num --;
console.log(num);

num = 1;
console.log(num++); // 1
num = 1;
console.log(++num); // 2

let num4 = num++;
console.log(num); // 3
console.log(num4); // 2

// 삼항 조건 연산자
const age = 20;
const result = age > 19 ? '당신은 성인 입니다.' : '당신은 미성년자 입니다.';
console.log(result);


let a = 2;
let b = 3;
let result1 = a + (b * 4) / 5;
console.log(result1);

