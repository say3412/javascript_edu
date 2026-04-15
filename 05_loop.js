for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log('-------');
let index = 0;
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        index += 1;
        console.log(`${index}. ${i}, ${j}`);
    }
}

console.log('-------');
let value;
for (let i = 2; i < 10; i++) {
    console.log(`* ${i} 단`);
    for (let j = 1; j < 10; j++) {
        value = i * j;
        console.log(`${i} x ${j} = ${value}`);
    }
}

// while
let age = 0;

// while (age < 5) {
//     console.log(`${age}살 입니다.`);
//     age += 1;
// }

console.log("-----------------")
// 2중 while문은 내부로직의 조건 값을 초기화 해야함, 주로 while 2중 문은 사용 하지 않음.
let num = 0;
while (age < 5) {
    while (num < 10) {
        console.log(`${age}살 입니다.`);
        // console.log(`num : ${num} 입니다.`);
        num += 1;
    }
    num = 0;
    age += 1;
}

console.log("-----------------")
num = 0;
do {
    num += 1;
    console.log(num);
} while (num < 10);

console.log("-----------------");
for (let i = 0; i < 10; i++) {
    if (i === 2) {
        break;
    }
    console.log(`${i} was executed!`);
}

console.log("-----------------");
for (let i = 0; i < 10; i++) {
    if (i === 2) {
        continue;
    }
    console.log(`${i} was executed!`);
}

console.log("-----------------");
age = 0;
while (age < 5) {
    age += 1;
    if (age === 2) {
        continue;
    }
    console.log(`${age}살 입니다.`);
}

console.log("-------- loop quiz ---------");
for (let i = 0; i < 11; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}