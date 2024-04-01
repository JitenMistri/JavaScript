// singleton
// Object.create        // -> constructor method

// Defining Symbols
const mySym = Symbol("new1")

// Object Literals
const newUser = {
    name: "Jiten",
    "full name": "Jiten Mistri",
    age: 24,
    [mySym]: "new123",          // way to declare Symbol type key
    location: "Delhi",
    email: "jiten@yahoo.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday","Wednesday"]
}

console.log(newUser.name);                  //Jiten -> // Way to access a key of object
console.log(newUser["name"]);               //Jiten -> // Another way
console.log(newUser["full name"]);          //Jiten Mistri -> // Here full name cannot be accessed like newUser.full name -> X
console.log(newUser[mySym]);                //new123

 
// Functions in JS
newUser.greetings = function() {
    console.log("Hello World");
}

newUser.greetingsTwo = function(){
    console.log(`Hello Js user, My name is ${newUser.name}`);
}

console.log(newUser.greetings());               // Hello World
console.log(newUser.greetingsTwo());            // Hello Js user, My name is Jiten
