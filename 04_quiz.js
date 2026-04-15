// 학점 구하기
let score = 90;
let grade;

if (score >= 90) {
    grade = 'A';
} else if (score >= 80) {
    grade = 'B';
} else if (score >= 70) {
    grade = 'C';
} else if (score >= 60) {
    grade = 'D';
} else if (score >= 50) {
    grade = 'E';
} else {
    grade = 'F';
}

console.log(`당신의 학점은 ${grade} 입니다.`);

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('점수를 입력해주세요 : ', (score) => {

//     if (score >= 90) {
//         grade = 'A';
//     } else if (score >= 80) {
//         grade = 'B';
//     } else if (score >= 70) {
//         grade = 'C';
//     } else if (score >= 60) {
//         grade = 'D';
//     } else if (score >= 50) {
//         grade = 'E';
//     } else {
//         grade = 'F';
//     }

//     console.log(`당신의 예상 학점은 ${grade} 입니다.`);
//     rl.close();
// })

// 요일 출력하기
let firstDay = 5 - 1;
let todayDate = 27;
let day = ((todayDate + firstDay) % 7);
let dayStr;

//day = 5;

switch (day) {
    case 0:
        dayStr = '일요일';
        break;
    case 1:
        dayStr = '월요일';
        break;
    case 2:
        dayStr = '화요일';
        break;
    case 3:
        dayStr = '수요일';
        break;
    case 4:
        dayStr = '목요일';
        break;
    case 5:
        dayStr = '금요일';
        break;
    case 6:
        dayStr = '토요일';
        break;
}

console.log(`오늘은 ${dayStr} 입니다.`);