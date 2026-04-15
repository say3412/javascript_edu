const adult = 19;
let age = 15;

// age = 21;

if (age < adult) {
    console.log('당신은 미성년자 입니다.');
} else {
    console.log('당신은 성인 입니다.');
}

let gender = 'male';

if (age < adult) {
    if (gender === 'male') {
        console.log('당신은 미성년 남성이네요.');
    } else {
        console.log('당신은 미성년 여성이네요.');
    }
}


let isLoggedIn = true;
let token = 0;

if (isLoggedIn && token) {
    console.log('로그인 상태입니다.');
} else if (isLoggedIn && !token) {
    console.log('토큰이 없습니다.')
} else {
    console.log('로그인이 필요합니다.');
}

let isMember = false;
age = 7;

if (age < 18 || isMember) {
    console.log('할인 대상 입니다.');
} else {
    console.log('할인 대상이 아닙니다.');
}


const browser = 'chrome';
let browserName;

if (browser === 'edge') {
    browserName = '엣지';
} else if (browser === 'safari') {
    browserName = '사파리';
} else if (browser === 'chrome') {
    browserName = '크롬';
} else {
    browserName = 'n.a.'
}

console.log(`브라우저 명은 ${browserName} 입니다.`)


let menu = 4;
switch (menu) {
    case 1:
        console.log('아메리카노');
        break;
    case 2:
        console.log('초코라떼');
        break;
    case 3:
    case 4:
        console.log('딸기바나나 쥬스');
        break;
    default:
        console.log('없는 메뉴 입니다.');
}


let browser1 = 'ff';
let browserName1;
switch (browser1) {
    case 'chrome':
        browserName1 = '크롬';
        break;
    case 'edge':
        browserName1 = '엣지';
        break;
    case 'safari':
        browserName1 = '사파리';
        break;
    case 'opera':
        browserName1 = '오페라';
        break;
    case 'ff':
        browserName1 = '파이어폭스';
        break;
    default:
        browserName1 = '알려지지 않은 브라우저';
        break;
}
console.log(`브라우저 명은 ${browserName1}`);
console.log(` `);

console.log(`true is ${Boolean(true)}`);
console.log(`false is ${!!false}`);
console.log(`true is ${!!true}`);
console.log(`0 is ${Boolean(0)}`);
console.log(`-0 is ${Boolean(-0)}`);
console.log(`1 is ${Boolean(1)}`);
console.log(`-1 is ${Boolean(-1)}`);
console.log(`'' is ${Boolean('')}`);
console.log(`'0' is ${Boolean('0')}`);
console.log(`'false' is ${Boolean('false')}`);
console.log(`null is ${Boolean(null)}`);
console.log(`undefined is ${Boolean(undefined)}`);
console.log(`NaN is ${Boolean(NaN)}`);
console.log(`[] is ${Boolean([])}`);
console.log(`{} is ${Boolean({})}`);

