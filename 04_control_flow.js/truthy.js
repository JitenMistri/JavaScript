const userEmail = "jiten@mistri.com"

if(userEmail) {
    console.log("email exist");
} else {
    console.log("email doesn't exist");
}

// Falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy Values
// true, "0", 'false', " ", [], {}, function(){}

// checking for arrays
const arr = []
if(arr.length === 0){
    console.log("Empty Array");
}

// checking for Objects
const obj = {}
if(Object.keys(obj).length === 0) {
    console.log("Empty Object");
}


// Nullish Coalescing Operator (??): null undefined

let val;
val = 2 ?? 5                // 2
val = null ?? 5             // 5
val = undefined ?? 10       // 10
val = null ?? 5 ?? 10       // 5


// Terniary Operator
// condition ? true : false

const price = 50
price >= 60 ? console.log("more than 60") : console.log("less than 60")         // less than 60

