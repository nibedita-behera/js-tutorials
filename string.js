// "" or '' is string is a collection
//string count is started from 0

// let str2 = "Hello Javascript";
// let str3 = "c";
// console.log(str + str2 + str3);
// console.log(str.length);

// //slice,substring,substr
// // let ans = str.slice(2,5);
// if we use -ve index inside the slice method it will work from the end
// let str = "Hello world";
// let ans = str.slice(-9, -4); // slice(start index,end index) where end index is excluded
// console.log(ans);

// let strg = "Welcome js";

//substring()-- it is similar to slice but it doesn't support -ve value
//if we pass a -ve value it we take it as 0
// let nwstr = "Hello Js";
// let ans = nwstr.substring(-2);
// console.log(ans);

//substr()-Gets a substring beginning at the specified location and having the specified length.

// let antstr = "Hello world";
// let ans = antstr.substr(2, 3);
// let ans1 = antstr.slice(2, 3);
// console.log(ans);
// console.log(ans1);

let str = "any value";
// console.log(str.charAt(1));
// console.log(str.search("n")); //exercise try a char outside the string
// console.log(str.split(" "));
// console.log(str.trimStart());
// console.log(str.trimEnd());
// console.log(str.trim());
// let ans=str.replace("a","z") // replace method bydefault change  or replace the first occurance of the given parameter
// console.log(ans)
//  let ans1=str.replace("ny","pk")
//  console.log(ans1)

// let str2="Hello world, welcome to the world" // we always get a new string from the replace method the old remains same
// let ans=str2.replace(/world/g,"john")  // /g update the parameter globally or in every occurance
// console.log(ans)
// console.log(str2)

// let ans1=str2.replace(/WORLD/g,"john") // replace is case insenstive
// console.log(ans1)

// let ans2=str2.replace(/WORLD/i,"john") // using /i we can make replace method caseinsenstitive
// console.log(ans2)


//Symbol-

let str1="Hello"
let str2="Hello"

let sy1= Symbol("john")
let sy2= Symbol("john") // symbol is used to store unique data

console.log(str1===str2)
console.log(sy1===sy2)







