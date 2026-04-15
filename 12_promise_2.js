// // promise again
// console.log("==============");
// const p3 = new Promise((resolve, reject) => {
//   const success = true;

//   if (success) {
//     resolve("success!");
//   } else {
//     reject("error!");
//   }
// });

// p3.then(console.log("성공 결과:")).catch((error) => {
//   console.error("실패 결과:", error);
//   ß;
// });

// const p4 = new Promise((resolve) => {
//   resolve(10);
//   console.log("1. excuted");
// });

// console.log("2. coding");

// p4.then((num) => console.log("3. then executed!", num));

// console.log("==============");
// const p5 = new Promise((resolve) => {
//   const result = 10;
//   resolve(result);
// });

// const p6 = p5.then((num) => console.log(num));

// p6.then((num) => console.log(num));
// p5.then((num) => num + 1).then((num) => console.log(num));

console.log("======= 즉시성공 =======");
new Promise((resolve) => resolve(10));
Promise.resolve(10);

function getData() {
  return Promise.resolve("data");
}

function aa() {
  console.log("aa");
}
// getData().then(console.log);
getData().then(aa);

Promise.resolve("data").then(console.log);

console.log("======= 즉시실패 =======");

function checkAge(age) {
  if (age < 18) {
    return Promise.reject("under");
  }
  return Promise.resolve("upper");
}

checkAge(19).then(console.log).catch(console.log);

console.log("======= promise - register =======");
// const DB = [];

// function saveDB(user) {
//   const oldDBLen = DB.length;
//   DB.push(user);
//   console.log(`${user.name} 회원 DB 저장`);

//   return new Promise((resolve, reject) => {
//     if (DB.length > oldDBLen) {
//       resolve(user);
//     } else {
//       reject("DB 저장 실패");
//     }
//   });
// }

// function sendEmail(user) {
//   console.log(`${user.name}님의 ${user.email}로 메일 전송`);
//   return new Promise((resolve) => {
//     resolve(user);
//   });
// }

// function getResult(user) {
//   return new Promise((resolve) => {
//     resolve(`${user.name}님 회원가입 성공`);
//   });
// }

// function registerByPromise(user) {
//   const result = saveDB(user)
//     .then(sendEmail)
//     .then(getResult)
//     .catch((e) => new Error(e));
//   return result;
// }

// const myUser = {name:'손흥민', email:'son@gmail.com'};
// const result = registerByPromise(myUser);
// result.then(console.log);

console.log("======= promise - register simple =======");
const DB = [];

function saveDB(user) {
  const oldDBLen = DB.length;
  DB.push(user);
  console.log(`${user.name} 회원 DB 저장`);

  if (DB.length > oldDBLen) {
    return Promise.resolve(user);
  } else {
    return Promise.reject("DB 저장 실패");
  }
}

function sendEmail(user) {
  console.log(`${user.name}님의 ${user.email}로 메일 전송`);
  return Promise.resolve(user);
}

function getResult(user) {
  return Promise.resolve(`${user.name}님 회원가입 성공`);
}

function registerByPromise(user) {
  const result = saveDB(user)
    .then(sendEmail)
    .then(getResult)
    .catch((e) => new Error(e));
  return result;
}

const myUser = { name: "손흥민", email: "son@gmail.com" };
const result = registerByPromise(myUser);
result.then(console.log);

console.log("======= promise - movie =======");
const url =
  "http://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json";

fetch(url)
  .then((response) => response.json())
  .catch((e) => console.log("요청 실패: ", e.message))
  .then((data) => {
    if (!data || !data.articleList || data.articleList.length === 0) {
      throw new Error("데이터가 없습니다.");
    }
    return data.articleList;
  })
  .catch((e) => console.log("에러발생: ", e.message))
  .then((articles) => articles.map((articles, index) => ({title: articles.title, rank: index + 1 })))
  .then((results) => {
    for (let movie of results) {
      console.log(`[${movie.rank}위] ${movie.title}`);
    }
  })
  .catch(e => console.log(e.message));
