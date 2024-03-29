console.log("2" > 1);   //true
console.log("02" > 1);  //true

console.log(null > 0);  //false
console.log(null == 0); //false
console.log(null >= 0); //true

// The reason is that an equality check == and comparisions > < >= <= work differently
// Comparisions convert null to a number, treating it as 0.
// That's why "console.log(null >= 0); -> true" and "console.log(null > 0); -> false".