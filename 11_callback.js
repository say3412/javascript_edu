const DB = [];

function save2DB(user, callback) {
  DB.push(user);
  console.log(`${user.name}님 DB 저장 완료`);
  return callback(user);
}

function sendEmail(user, callback) {
  console.log(`${user.name}님의 ${user.email} 메일주소로 메일전송 완료`);
  return callback(user);
}

function getResult(user) {
  return `${user.name}님의 회원가입 성공!`;
}

function register(user) {
  return save2DB(user, (user) => {
    return sendEmail(user, (user) => {
      return getResult(user);
    });
  });
}

const result = register({ name: "손흥민", email: "son@gmail.com" });
console.log(result);

