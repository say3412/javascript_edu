const numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]);

let array = new Array(2);
console.log(array);

array = new Array(1, 2, 3, 4, 5);
console.log(array);

console.log(numbers.length);

numbers[3] = -4;
numbers[5] = 6;
console.log(numbers.length, numbers);

numbers[8] = 7;
console.log(numbers.length, numbers);

delete numbers[1];
console.log(numbers.length, numbers);
delete numbers[8];
console.log(numbers.length, numbers);

// Array
console.log("-----array----");

let bts1 = ["진", "슈가", "제이홉", "RM"];
console.log(bts1);

let bts2 = new Array("지민", "뷔", "정국");
console.log(bts2);
console.log(bts1.indexOf("슈가"));
console.log(bts2.indexOf("슈가"));

console.log(bts1.includes("RM"));
console.log(bts2.includes("지민"));

bts1.push("박보검"); // 맨 뒤에 추가
console.log(bts1);
console.log(bts1.length);
bts1.unshift("이도현"); // 맨 앞에 추가
console.log(bts1);

let first = bts1.shift(); // 맨 첫 아이템 삭제
console.log(bts1);
console.log(first);
let last = bts1.pop(); // 마지막 아이템 삭제
console.log(bts1);
console.log(last);

// splice - 특정 위치에 넣는 기능 (index, 몇개)
console.log("// splice - 특정 위치에 넣는 기능 (index, 몇개)")
const deleted = bts1.splice(1, 1);
console.log(deleted);

bts1.splice(1, 0, "박보검", "이도현");
console.log(bts1);

// slice - 새로운 배열을 만듬
let bts3 = bts1.slice(0, 2);
console.log(bts1);
console.log(bts3);

bts3 = bts1.slice(-1); // - 값은 뒤에서 자리 수
console.log(bts3);

// 배열 합치기 concat
console.log("// 배열 합치기");
const bts = bts1.concat(bts2);
console.log(bts);

// 역순 배열 reverse
console.log("// 역순 배열");
const rbts = bts.reverse();
console.log(bts);
console.log(rbts);

// 배열을 문자로 합치기 join
console.log("// 배열을 문자로 합치기");
let members = bts.join(", ");
console.log(members);
let members1 = bts.join(" ");
console.log(members1);

// sort
console.log("// sort");
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);

const numbers1 = [40, 100, 1, 5, 25, 10];
numbers1.sort();
console.log(numbers1);

numbers1.sort(function (n1, n2) {
  return n1 - n2;
});
console.log(numbers1);

numbers1.sort((n1, n2) => n2 - n1);
console.log(numbers1);

const items = [
  { name: "Apple", price: 50 },
  { name: "Banana", price: 10 },
  { name: "Mange", price: 30 },
];

console.log("// item price sorting");
items.sort((a, b) => a.price - b.price);
console.log(items);

items.sort((a, b) => b.price - a.price);
console.log(items);

items.sort((a, b) => a.name.localeCompare(b.name));
console.log(items);

// Array 순회
const btsFull = ["RM", "진", "슈가", "제이홉", "지민", "뷔", "정국"];
// for loop
console.log("------");
for (let i = 0; i < btsFull.length; i++) {
  console.log(btsFull[i]);
}

console.log("------");
for (let member of btsFull) {
  console.log(member);
}

console.log("------");
btsFull.forEach((member, index) =>
  console.log(`${index}번째 멤버 '${member}'입니다,`),
);

console.log("--- quiz ---");
const list = ["슈가", "차은우", "박서준", "이도현", "제이홉", "주우재", "지민"];
const btsList = [];

for (let member of list) {
  if (btsFull.includes(member)) {
    // console.log(member);
    btsList.push(member);
  }
}

console.log(btsList);
console.log(btsList.join(", "));

// map - 고차 함수 : 함수를 인자로 받아 item 개수만큼 함수처리하여 Array 만들어 줌
console.log("// map - 고차 함수");

const nums = [1, 2, 3, 4, 5];
const doubled = nums.map((num) => num * 2);
console.log(doubled);

// filter
console.log("// filter");

const evenNumbers = nums.filter((num) => {
  return num % 2 === 0;
});

console.log(evenNumbers);

console.log("--- quiz 2 ---");
const result = list.filter((member) => btsFull.includes(member)).join(", ");
console.log(result);

// reduce
console.log("--- reduce - 하나의 값으로 반환 ---");

const sum = nums.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); // 0 초기값

console.log(sum);

console.log("--- quiz 3 ---");
const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result2 = nums2
  .filter((num) => num % 3 === 0)
  .map((num) => num * 2)
  .reduce((a, b) => a + b, 0);
console.log(result2);

// set
console.log("--- // set ---");
const set = new Set([1, 2, 3, 4, 5]);
console.log(set);
console.log(set.size);

set.add(6);
console.log(set);
set.add(6);
console.log(set);

const setEmpty = new Set();
console.log(setEmpty);
console.log(setEmpty.size);

// set.has 갖고있는지, 존재유무
console.log(set.has(3));
console.log(set.has(6));
console.log(set.has(7));

set.delete(6);
console.log(set);

//set.clear();
console.log(set);

// set 순회, set.value()
set.forEach((item) => console.log(item));
for (const value of set.values()) {
  console.log(value);
}

// math
console.log("// math");
console.log(Math.abs(-10));
console.log(Math.ceil(1.4));
console.log(Math.floor(1.4));
console.log(Math.round(1.49));
console.log(Math.round(1.5));
console.log(Math.trunc(1.57589495));
console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10 + 1));

// quiz
console.log("--- quiz lotto ---");
function genLottoBySet() {
  const lottoSet = new Set(); // 주소값 반환이기 때문에 const

  while (lottoSet.size < 6) {
    const num = Math.floor(Math.random() * 45 + 1);
    lottoSet.add(num);
  }

  const lottoResult = [...lottoSet].sort((num1, num2) => num1 - num2);
  return lottoResult;
}

function genLottoByArray() {
  const lottoArr = [];

  while (lottoArr.length < 6) {
    const num = Math.floor(Math.random() * 45 + 1);

    if (!lottoArr.includes(num)) {
      lottoArr.push(num);
    }
  }

  return lottoArr.sort((num1, num2) => num1 - num2);
}

console.log(genLottoBySet());
console.log(genLottoByArray());

console.log("--- self lotto ---");
function test() {
  const lottoArr = [];

  while (lottoArr.length < 6) {
    const num = Math.floor(Math.random() * 45 + 1);
    lottoArr.push(num);

    if (!lottoArr.includes(num)) {
      lottoArr.push(num);
    }
  }

  return lottoArr.sort((n1, n2) => n1 - n2);
}

function test2() {
  const lottoSet = new Set();

  while (lottoSet.size < 6) {
    const num = Math.floor(Math.random() * 45 + 1);
    lottoSet.add(num);
  }
}

console.log(test());
console.log(test2());
