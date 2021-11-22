import './about.scss';
import 'core-js'; // <- at the top of your entry point

let a = Array.from(new Set([1, 2, 3, 2, 1]));          // => [1, 2, 3]
let b = [1, [2, 3], [4, [5]]].flat(2);                 // => [1, 2, 3, 4, 5]
let c = Promise.resolve(32).then(x => console.log(x)); // => 32

console.log("console", a, b, c);
