//bigInt
// 9007199254740991-This is the max Number
//we can perform the math operations on the bigInt +,-,*,/
//All most all the browsers except internet explorer

//Drawbacks
//Cannot mix BigInt and other types, use explicit conversions
//if we want to use Mathlib we won't support
//it will not return decimal values it will truncate the value
let b = 67788990000n;
console.log(typeof b);

let c = BigInt(6778990000000788);
console.log(typeof c);
// console.log(678n + 67);
console.log(5n / 2n);

console.log(5n + 67n);
