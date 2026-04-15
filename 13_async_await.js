console.log("--- async/await ---");
// 비동기 코드인데, 동기 코드처럼 작동 가능
// 자동으로 Promise로 감싸서 return

async function fun1() {
  return "hello";
}

fun1().then(console.log);

function fun2() {
  return new Promise((resolve) => {
    resolve("hello");
  });
}

fun2().then(console.log);

console.log("--- async/await - register ---");
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

async function registerByAsync(user) {
  try {
    const savedUser = await saveDB(user);
    const emailedUser = await sendEmail(savedUser);
    const result = await getResult(emailedUser);
    return result;
  } catch (e) {
    return new Error(e);
  }
}

const myUser2 = { name: "손흥민", email: "son@gmail.com" };
registerByAsync(myUser2).then(console.log);

console.log("--- async/await - movie ---");
async function fetchMovieDate(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("요청실패 상태코드 : " + response.status);
  }

  const data = await response.json();
  return data;
}

function validateMovieData(data) {
  if (!data.articleList || data.articleList.length === 0) {
    console.log("eeeeeeee");
    throw new Error("데이터가 없습니다.");
  }
}

function extractMovieInfos(articleList) {
  return articleList.map((articleList, index) => ({
    title: articleList.title,
    rank: index + 1,
  }));
}

function displayMovie(movieinfos) {
  for (const movie of movieinfos) {
    console.log(`[${movie.rack}위] ${movie.title}`);
  }
}

const url =
  "http://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json";

async function movies() {
  try {
    const data = await fetchMovieDate(url);
    validateMovieData(data); 

    const movieinfos = extractMovieInfos(data.articleList);
    displayMovie(movieinfos);
  } catch (e) {
    console.error("에러 발생: ", e);
  }
}

movies();
