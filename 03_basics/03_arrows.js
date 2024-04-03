// 'this' method

const user = {
    username: "jiten",
    age: 24,

    message: function(){
        console.log(`${this.username}, welcome back`);      // this is used to refer to the current context
    }
}

user.message()      // jiten, welcome back
user.username = "mistri"                        // context of name has been changed
user.message()      // mistri, welcome back


const myuser = {
    username: "jiten",
    age: 24,

    message: function(){
        console.log(this);
    }
}
myuser.message()            // { username: 'jiten', age: 24, message: [Function: message] }


console.log(this);      // {} -> no context

// 'this' with functions

function chai() {
    let user = "jiten"
    console.log(this.user);
}
chai()      // undefined  -> this doesn't work with functions


// 'Arrow' functions

const chai2 = () => {
    let user = "jiten"
    console.log(this.user);
}
chai()      // undefined  -> this doesn't work with Arrow functions also

// basic Arrow function
const addTwo = (n1, n2) => {
    return n1 + n2
}
console.log(addTwo(1,2))         // 3

// Implicit return
const addThree = (n1,n2,n3) => n1+n2+n3
console.log(addThree(1,2,3))     // 6

const returnObj = () => ({user: "jiten"})
console.log(returnObj());           // { user: 'jiten' }
