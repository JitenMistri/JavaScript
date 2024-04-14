// Storing the Promise object in a variable, then later using it to consume

const myPromise = new Promise(function(resolve, reject){
    // Do an Async Task
    // DB Calls, Cryptography, Network

    setTimeout(function(){
        console.log("Async task is completed");
        resolve()
    },1000)
})

myPromise.then(function(){
    console.log("Resolve is completed");
})

// *********************************************************************************** //

// Without storing the Promise object to a variable
// Directly consuming promise in single step

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2 Completed");
        resolve()
    },1000)
}).then(function(){
    console.log("Resolve 2 Completed");
})

// *********************************************************************************** //

// Passing parameter in resolve to get in consume

const PromiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async 3 is completed");
        resolve({userName: 'Jiten', email: 'jiten@mistri.com'})
    },1000)
})

PromiseThree.then(function(user){
    console.log(user);                          // { userName: 'Jiten', email: 'jiten@mistri.com' }
})

// *********************************************************************************** //

// Using reject to handle error cases

// 1.
// Using error case
const promiseFour1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let iserror = true
        if(iserror){
            reject("There is some issue, promise rejected")
        } else {
            resolve({userName: "JitenM", age: 24})
    }
    }, 1000)
})

promiseFour1.then( (user) => {
    console.log(user);
    return user.userName
}).then( (userName) => {
    console.log(userName);
}).catch( (error) => {
    console.log(error);
}).finally( () => console.log("The promise is either resolved or rejected"))

//**** Solution ****
// There is some issue, promise rejected
// The promise is either resolved or rejected

// 2.
// Using Success Case
const promiseFour2 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let iserror = false
        if(iserror){
            reject("There is some issue, promise rejected")
        } else {
            resolve({userName: "JitenM", age: 24})
    }
    }, 1000)
})

promiseFour2.then( (user) => {
    console.log(user);
    return user.userName
}).then( (userName) => {
    console.log(userName);
}).catch( (error) => {
    console.log(error);
}).finally( () => console.log("The promise is either resolved or rejected"))

// **** Solution ****
// { userName: 'JitenM', age: 24 }
// JitenM
// The promise is either resolved or rejected

// *********************************************************************************** //

// Async Await
// It doesn't directly handles the error case, so have to use try-catch block

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let iserror = true
        if(iserror){
            reject("There is some issue, JavaScript promise rejected")
        } else {
            resolve({userName: "JavaScript", age: 24})
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()                    // There is some issue, JavaScript promise rejected

// *********************************************************************************** //

// fetch Object 
// 1. Using Async

async function getAllUsers(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")          // using await bcz fetch ops takes time
        const jsonResponse = await response.json()                                          // using await bcz convertion to json takes time
        console.log(jsonResponse);
    } catch (error) {
        console.log("Error: ",error);
    }
}
getAllUsers()

// 2. Using then and catch

fetch('https://jsonplaceholder.typicode.com/users')
.then( (response) => {
    return response.json()
})
.then( (data) => {
    console.log(data);
})
.catch( (error) => console.log(error))