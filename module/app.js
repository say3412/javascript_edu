import { add, multiple } from "./math.js";
import greet from "./greet.js";
import getUserName, {age} from "./user.js";

console.log(add(2, 3));
console.log(add("a", "b"));
console.log(multiple(2, 3));

console.log(greet("하니"));

console.log(getUserName());
console.log(age);

console.log('aaa');
const itmes = [ 'yellow', 'red', 'green'];

console.log(itmes);
delete itmes[1];
console.log(itmes);
console.log(itmes.sort());