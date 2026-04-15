const promise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("작업 성공 :)");
  } else {
    reject("작업 실패 :S");
  }
});

// promise
//   .then((result) => console.log("성공 결과: ", result))
//   .catch((error) => console.log("실패 결과: ", error));

const p = new Promise((resolve) => {
  console.log("1. Promise excuted!");
  resolve(10);
});

console.log("2. code ing");

p.then((num) => {
  (console.log("3. then 실행"), num);
});

// promise chainning
const p1 = new Promise((resolve) => {
  const result = 10;
  resolve(result);
});

// 한줄로 표기
p1.then((num) => num + 1).then((num) => console.log(num));

// 반환값: 11 => resolve(11)을 호출하는 Promise를 생성
const p2 = p1.then((num) => num + 1);
p2.then((num) => console.log(num));

// promise again
console.log("==============");
const p3 = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("success!");
  } else {
    reject("error!");
  }
});

promise
  .then((result) => {
    console.log("성공 결과:", result);
  })
  .catch((error) => {
    console.error("실패 결과:", error);
  });

const p4 = new Promise((resolve) => {
  resolve(10);
  console.log("1. excuted");
});

console.log("2. coding");

p4.then((num) => console.log("3. then executed!", num));
