// https://github.com/30-seconds/30-seconds-of-code
// 127 Useful JavaScript Snippets You Can Understand in 30 Seconds

export const all = (arr, fn = Boolean) => arr.every(fn);
/*
This snippet returns true if the predicate function returns true for all elements in a collection and false otherwise. You can omit the second argument fnif you want to use Booleanas a default value.
all([4, 2, 3], x => x > 1); // true
all([1, 2, 3]); // true
*/

export const allEqual = (arr) => arr.every((val) => val === arr[0]);
/*
This snippet checks whether all elements of the array are equal.
allEqual([1, 2, 3, 4, 5, 6]); // false
allEqual([1, 1, 1, 1]); // true
*/

export const approximatelyEqual = (v1, v2, epsilon = 0.001) =>
  Math.abs(v1 - v2) < epsilon;
/*
This snippet checks whether two numbers are approximately equal to each other, with a small difference.
approximatelyEqual(Math.PI / 2.0, 1.5708); // true
*/

export const arrayToCSV = (arr, delimiter = ',') =>
  arr.map((v) => v.map((x) => `"${x}"`).join(delimiter)).join('\n');
/*
This snippet converts the elements to strings with comma-separated values.
arrayToCSV([['a', 'b'], ['c', 'd']]); // '"a","b"\n"c","d"'
arrayToCSV([['a', 'b'], ['c', 'd']], ';'); // '"a";"b"\n"c";"d"'```
*/

export const arrayToHtmlList = (arr, listID) =>
  ((el) => (
    (el = document.querySelector('#' + listID)),
    (el.innerHTML += arr.map((item) => `<li>${item}</li>`).join(''))
  ))();
/*
This snippet converts the elements of an array into <li> tags and appends them to the list of the given ID.
arrayToHtmlList(['item 1', 'item 2'], 'myListID');
*/

export const average = (...nums) =>
  nums.reduce((acc, val) => acc + val, 0) / nums.length;
/*
This snippet returns the average of two or more numerical values.
average(...[1, 2, 3]); // 2
average(1, 2, 3); // 2
*/

export const averageBy = (arr, fn) =>
  arr
    .map(typeof fn === 'function' ? fn : (val) => val[fn])
    .reduce((acc, val) => acc + val, 0) / arr.length;
/*
This snippet returns the average of an array after initially doing the mapping of each element to a value using a given function.
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 5
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 5
*/

export const bifurcateBy = (arr, fn) =>
  arr.reduce(
    (acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc),
    [[], []]
  );
/* 
This snippet splits values into two groups, based on a predicate function. If the predicate function returns a truthy value, the element will be placed in the first group. Otherwise, it will be placed in the second group.
You can use Array.prototype.reduce()and Array.prototype.push()to add elements to groups, based on the value returned by fnfor each element.
bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'); // [ ['beep', 'boop', 'bar'], ['foo'] ]
*/

export const capitalize = ([first, ...rest]) =>
  first.toUpperCase() + rest.join('');
/*
This snippet capitalizes the first letter of a string.
capitalize('fooBar'); // 'FooBar'
capitalize('fooBar', true); // 'Foobar'
*/

export const capitalizeEveryWord = (str) =>
  str.replace(/\b[a-z]/g, (char) => char.toUpperCase());
/*
This snippet capitalizes the first letter of every word in a given string.
capitalizeEveryWord('hello world!'); // 'Hello World!'
*/

export const castArray = (val) => (Array.isArray(val) ? val : [val]);
/*
This snippet converts a non-array value into array.
castArray('foo'); // ['foo']
castArray([1]); // [1]
*/

export const compact = (arr) => arr.filter(Boolean);
/*
This snippet removes false values from an array.
compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]); // [ 1, 2, 3, 'a', 's', 34 ]
*/

export const countOccurrences = (arr, val) =>
  arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
/*
This snippet counts the occurrences of a value in an array.
countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3
*/

export const decapitalize = ([first, ...rest]) =>
  first.toLowerCase() + rest.join('');
/*
This snippet turns the first letter of a string into lowercase.
decapitalize('FooBar'); // 'fooBar'
decapitalize('FooBar'); // 'fooBar'
*/

export const deepFlatten = (arr) =>
  [].concat(...arr.map((v) => (Array.isArray(v) ? deepFlatten(v) : v)));
/*
This snippet flattens an array recursively.
deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]
*/

export const defer = (fn, ...args) => setTimeout(fn, 1, ...args);
/*
This snippet delays the execution of a function until the current call stack is cleared.
defer(console.log, 'a'), console.log('b'); // logs 'b' then 'a'
*/

export const difference = (a, b) => {
  const s = new Set(b);
  return a.filter((x) => !s.has(x));
};
/*
This snippet finds the difference between two arrays.
difference([1, 2, 3], [1, 2, 4]); // [3]
*/

export const differenceBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter((x) => !s.has(fn(x)));
};
/*
This method returns the difference between two arrays, after applying a given function to each element of both lists.
differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [1.2]
differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x); // [ { x: 2 } ]
*/

export const differenceWith = (arr, val, comp) =>
  arr.filter((a) => val.findIndex((b) => comp(a, b)) === -1);
/*
differenceWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b)); 
This snippet removes the values for which the comparator function returns false.
*/

// export const digitize = (n) => [...`${n}`].map((i) => parseInt(i));
/*
This snippet gets a number as input and returns an array of its digits.
digitize(431); // [4, 3, 1]
*/

export const drop = (arr, n = 1) => arr.slice(n);
/*
This snippet returns a new array with n elements removed from the left.
drop([1, 2, 3]); // [2,3]
drop([1, 2, 3], 2); // [3]
drop([1, 2, 3], 42); // []
*/

export const dropRight = (arr, n = 1) => arr.slice(0, -n);
/*
This snippet returns a new array with n elements removed from the right.
dropRight([1, 2, 3]); // [1,2]
dropRight([1, 2, 3], 2); // [1]
dropRight([1, 2, 3], 42); // []
*/

export const dropRightWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[arr.length - 1])) arr = arr.slice(0, -1);
  return arr;
};
/*
This snippet removes elements from the right side of an array until the passed function returns true.
dropRightWhile([1, 2, 3, 4], n => n < 3); // [1, 2]
*/

export const dropWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
  return arr;
};
/*
This snippet removes elements from an array until the passed function returns true.
dropWhile([1, 2, 3, 4], n => n >= 3); // [3,4]
*/

export const hasClass = (el, className) => el.classList.contains(className);
/*
This snippet checks whether an element has a particular class.
hasClass(document.querySelector('p.special'), 'special'); // true
*/

export const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter((x) => s.has(x));
};
/*
This snippet can be used to get an array with elements that are included in two other arrays.
intersection([1, 2, 3], [4, 3, 2]); // [2, 3]
*/

// export const is = (type, val) =>
//   ![, null].includes(val) && val.constructor === type;
/*
This snippet can be used to check if a value is of a particular type.
is(Array, [1]); // true
is(ArrayBuffer, new ArrayBuffer()); // true
is(Map, new Map()); // true
is(RegExp, /./g); // true
is(Set, new Set()); // true
is(WeakMap, new WeakMap()); // true
is(WeakSet, new WeakSet()); // true
is(String, ''); // true
is(String, new String('')); // true
is(Number, 1); // true
is(Number, new Number(1)); // true
is(Boolean, true); // true
is(Boolean, new Boolean(true)); // true
*/

export const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);
/*
This snippet returns the n largest elements from a list. If nis greater than or equal to the list’s length, then it will return the original list (sorted in descending order).
maxN([1, 2, 3]); // [3]
maxN([1, 2, 3], 2); // [3,2] 	
*/

export const minN = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n);
/*
This snippet returns the n smallest elements from a list. If nis greater than or equal to the list’s length, then it will return the original list (sorted in ascending order).
minN([1, 2, 3]); // [1]
minN([1, 2, 3], 2); // [1,2]
*/

export const negate =
  (func) =>
  (...args) =>
    !func(...args);
/*
This snippet can be used to apply the not operator (!) to a predicate function with its arguments.
[1, 2, 3, 4, 5, 6].filter(negate(n => n % 2 === 0)); // [ 1, 3, 5 ]
*/

export const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};
/*
This snippet can be used to do a smooth scroll to the top of the current page.
scrollToTop();
*/

export const serializeCookie = (name, val) =>
  `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;
/*
This snippet can be used to serialize a cookie name-value pair into a Set-Cookie header string.
serializeCookie('foo', 'bar'); // 'foo=bar'
*/

export const setStyle = (el, ruleName, val) => (el.style[ruleName] = val);
/*
This snippet can be used to set the value of a CSS rule for a particular element.
setStyle(document.querySelector('p'), 'font-size', '20px');
The first <p> element on the page will have a font-size of 20px
*/

export const sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0);
/*
This snippet can be used to find the sum of two or more numbers or arrays.
sum(1, 2, 3, 4); // 10
sum(...[1, 2, 3, 4]); // 10
*/

export const take = (arr, n = 1) => arr.slice(0, n);
/*
This snippet can be used to get an array with nelements removed from the beginning.
take([1, 2, 3], 5); // [1, 2, 3]
take([1, 2, 3], 0); // []
*/

export const toCurrency = (n, curr, LanguageFormat = undefined) =>
  Intl.NumberFormat(LanguageFormat, {
    style: 'currency',
    currency: curr,
  }).format(n);
/* 
This snippet can be used to format a number like a currency.
toCurrency(123456.789, 'EUR'); // €123,456.79  | currency: Euro | currencyLangFormat: Local
toCurrency(123456.789, 'USD', 'en-us'); // $123,456.79  | currency: US Dollar | currencyLangFormat: English (United States)
toCurrency(123456.789, 'USD', 'fa'); // ۱۲۳٬۴۵۶٫۷۹$ | currency: US Dollar | currencyLangFormat: Farsi
toCurrency(322342436423.2435, 'JPY'); // ¥322,342,436,423 | currency: Japanese Yen | currencyLangFormat: Local
toCurrency(322342436423.2435, 'JPY', 'fi'); // 322 342 436 423 ¥ | currency: Japanese Yen | currencyLangFormat: Finnish
*/

export const toggleClass = (el, className) => el.classList.toggle(className);
/*
This snippet can be used to toggle a class for an element.
toggleClass(document.querySelector('p.special'), 'special'); // The paragraph will not have the 'special' class anymore
*/

export const union = (a, b) => Array.from(new Set([...a, ...b]));
/*
This snippet can be used to find the union of two arrays, resulting in an array that has elements that come from both arrays but that do not repeat.
union([1, 2, 3], [4, 3, 2]); // [1,2,3,4]
*/

// export const uniqueElements = (arr) => [...new Set(arr)];
/*
This snippet uses ES6 Setandthe…restoperator to get every element only once.
uniqueElements([1, 2, 2, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]
*/

export const validateNumber = (n) =>
  !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;
/*
This snippet can be used to check whether a value is a number.
validateNumber('10'); // true
*/
