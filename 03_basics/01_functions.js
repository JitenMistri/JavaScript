// Function Defination
function sayMyName () {
    console.log("My name is Jiten");
}


// Function Execution
sayMyName()         // My name is Jiten

function addTwoNumbers(number1, number2) {
    console.log(number1+number2);               // never use a logger to return a value
}

addTwoNumbers(5,7)      // 12
const result = addTwoNumbers(5, 7)
console.log("Result:",result);              // Result: undefined


// Proper way to store and return inside function

function addTwoNumbers2(number1, number2) {
    let result = number1 + number2
    return result

    // return number1 + number2         -> can also be possible
}
const result2 = addTwoNumbers(5, 7)
console.log("Result:", result2);         // 12

function loginUserMessage(username) {
    return `${username} logged in Successfully`
}

console.log(loginUserMessage("Jiten"));             // Jiten logged in Successfully


// Default value in parameters

function loginUserMessage2(username = "Lucky") {
    if(!username){
        console.log("Please pass a username");
        return
    }
    return `${username} logged in Successfully`
}

console.log(loginUserMessage2());       // Its okk here to pass no value
                                        // Lucky logged in Successfully 




// Cart Problem
// Rest Operator (...abc)

function calculateCartPrice(...num) {
    return num
}

console.log(calculateCartPrice(100, 200, 300, 400));        // [100, 200, 300, 400]


// Handling Objects with Functions

const user = {
    name: "Jiten",
    age: 24
}

function handlingObjects(obj) {
    console.log(`Username is ${obj.name} and age is ${obj.age}`);
}

handlingObjects(user)           // Username is Jiten and age is 24


// Handling Arrays with functions

const newArray = [10, 20, 30, 40]

function handleArray(arr) {

    return arr[2]
    
}

console.log(handleArray(newArray));
