const resultEl = document.querySelector('.result');

let a = 12421;

// const result = Number.Nan;

// MAX_VALUE;
// MIN_VALUE;
// NEGATIVE_INFINITY;
// NaN;
// POSITIVE_INFINITY;

// Number.prototype.divisionMethod = function () {
//   return this.valueOf() / 2;
// };
// let number = 241;
// const result = number.divisionMethod();

// Number.isFinite(25); //true
// Number.isFinite(-1.22); //true
// Number.isFinite(15 - 2); //true
// Number.isFinite(0); //true
// Number.isFinite('25'); //false
// Number.isFinite('Hi'); //false
// Number.isFinite('2019/01/01'); //false
// Number.isFinite(Infinity); //false
// Number.isFinite(-Infinity); //false
// const result = Number.isFinite(25 / 0); //false

// Number.isInteger(0) //true
// Number.isInteger(0.25) //false

// Number.isNaN(NaN) //true
// Number.isNaN(25 / 0) //true

// Number.isSafeInteger(25) //true
// Number.isSafeInteger(-1) //true
// Number.isSafeInteger(15-2) //true
// Number.isSafeInteger(0) //true
// Number.isSafeInteger(0.25) //false
// Number.isSafeInteger('55') //false
// Number.isSafeInteger(Math.pow(2, 53)) //false
// Number.isSafeInteger(Math.pow(2, 53) - 1) //true
// Number.isSafeInteger(false) //false
// Number.isSafeInteger(Infinity) //false
// Number.isSafeInteger(-Infinity) //false
// Number.isSafeInteger(25 / 0) //false

// let number = 2.26519;
// let result = number.toExponential(2);

// let number = 2.26519;
// let result = number.toFixed(3);

// let number = 2.26519;
// let result = number.toPrecision(1);

// let number = 2.26519;
// let result = number.toString();

let number = 25;
let result = number.valueOf(); // 25

resultEl.innerHTML = result;
console.log(resultEl);
