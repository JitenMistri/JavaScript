let score = "33"
// console.log(typeof score);
let valueInNumber = Number(score)
// console.log(typeof valueInNumber);


// What we get after conversion
// "33" -> 33
// "33abc" -> NaN (Not a Number)
// true => 1; false -> 0
// null -> 0


let isLoggedIn = true
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);


// 1 -> true; 0 -> false
// "" -> false
// "jiten" -> true


let someNumber = 17
let stringNumber = String(someNumber)
// console.log(stringNumber);           -> 17
// console.log(typeof stringNumber);    -> string



// ***************Operations***************

let value = 7
let negvalue = -value
// console.log(negvalue); //-7

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a**3); //a to power 3
// console.log(a/b);
// console.log(a%b);


let str1 = "Hello"
let str2 = " Jiten"
let str3 = str1 + str2
// console.log(str3); // Hello Jiten

// console.log("1" + 2);       -> 12
// console.log(1 + "2");       -> 12
// console.log("1" + 2 + 2);   -> 122
// console.log(1 + 2 + "2");   -> 32

console.log(true);      //true
console.log(+true);     //1
console.log(+"");       //0