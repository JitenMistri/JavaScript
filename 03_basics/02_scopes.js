// Declaring block scope
if(true){
    let a = 10
    const b = 20
    var c = 30
}

// Will give error as variable are out of the scope of the below console.log()
console.log(a);         // a is not defined
console.log(b);         // b is not defined

// This is execute properly as var doesnt have scope
console.log(c);         // 30

function one() {
    const name = "jiten"

    function two() {
        const age = 24
        console.log(name);      // jiten -> global variables can be used inside any scope
    }
    // console.log(age);        // -> will give error as this is out of the scope of age

    two()
}

one()


// javascript hoisting

addOne(3)       // can easily access
function addOne(num) {
    return num + 1
}

addTwo(3)        // This will give error as "Cannot access 'addTwo' before initializing" as we are holding this function in a variable
const addTwo = function(num) {
    return num + 2
}
