const human = {
  name: "Sarah",
  age: 30,
};

console.log(human.name);
human.name = "Peter";
console.log(human.name);

human["age"] = "10";
console.log(human.age);

const eridan = {
  name: "Lala",
  age: 20,
  greet: function () {
    console.log(`Hello! I'm ${this.name}.`);
  },
  goodbye() {
    console.log("Goodbye :)");
  },
};

eridan.greet();
eridan.goodbye();

eridan.name = "James";
eridan.greet();

human.job = "developer";
console.log(human.job);

human.info = function () {
  console.log(`I'm ${this.name} and my job is a ${this.job}.`);
};
human.info();

delete human.age;
console.log(human.age);

// 생성자 함수
console.log("------ 생성자 함수 -----");

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`Hello, I'm ${this.name}!`);
  };
}

const person1 = new Person("Shua", 10);
const person2 = new Person("Jua", 8);
console.log(person1);
console.log(person2);
console.log(person1, person2);
person2.greet();

function Student(name, age, className, major) {
  this.name = name;
  this.age = age;
  this.className = className;
  this.major = major;
  this.sid = studenId++;
  this.info = function () {
    console.log(
      `${this.sid}: ${this.name} is ${this.age} years old, and studying ${this.major} in ${className}.`,
    );
  };
}

let studenId = 1;

const student1 = new Student("Sarah", 30, "A", "Javascript");
const student2 = new Student("Shua", 20, "B", "Java");
const student3 = new Student("Jua", 22, "C", "DataDase");

console.log(student1);
console.log(student2);
console.log(student3);

console.log(student1.sid);
console.log(student2.sid);
console.log(student3.sid);

student1.info();
student2.info();
student3.info();

class Person1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`Hello, ${this.name}`);
    } 
}

const person3 = new Person1('Lee', 25);
console.log(person3.name, person3.age);
person3.greet();


class Person2 {
    #idNo;
    constructor(name, age, idNo) {
        this.name = name;
        this.age = age;
        this.#idNo = idNo;
    }

    getIdNo() {
        console.log(`idNo: ${this.#idNo}`);
    }
}

const person4 = new Person2('Ha', 19, '100100');
person4.getIdNo();
// console.log(person4.age, person4.#idNo); // getter를 통해서만 접근가능


console.log('------ class prac -----');

class Vehicle {
    constructor(speed) {
        this.speed = speed;
    }

    speedUp() {
        this.speed += 10;
    }
    
    speedDown() {
        this.speed -= 10;
    }

    info() {
        console.log(`currennt speed is ${this.speed}`);
    }
}

car1 = new Vehicle(100);
car2 = new Vehicle(200);
car3 = new Vehicle(300);

console.log(car1, car2, car3);

car1.speedUp();
car1.speedUp();
car1.info();
car1.speedDown();
car1.info();

console.log('------ class prac 2 -----');
class Car extends Vehicle {
    constructor(speed, wheels, seats){
        super(speed);
        if(!wheels){
            this.wheels = wheels;
        } 
        this.wheels = 4;
        this.seats = seats;
    }

    drive() {
        console.log(`현재 속도는 ${this.speed}로 운행`)
    }
}

const car4 = new Car(100, 4, 4);
car4.speedUp();
car4.speedUp();
console.log(car4.speed);
car4.info();
car4.drive();

const car5 = new Car(100);
console.log(car5);

class Truck extends Car {
    constructor(speed, wheels, seats, loadage) {
        super(speed, wheels, seats);
        this.loadage = loadage;
    }

    load() {
        this.load += 10;
        console.log();
    }

    unload() {
        this.load -= 10;
        console.log();
    }
}

const truck1 = new Truck(100, 4, 4, 0);
const truck2 = new Truck(100);
console.log(truck1.loadage);
console.log(truck2);

