// Arrays

const myArray = [1, 3, 5, 7, 8]
const myHeros = ["shaktiman", "naagraj"]

const myArray2 = new Array(1, 2, 3, 4, 5)

console.log(myArray[1]);

// Array Methods

myArray.push(9)
myArray.push(2)     // Adds element to the last of the array
myArray.pop()       // No Arguments needed as it just removes the last element

myArray.unshift(0)      //Adds the element to the beginning of the file
myArray.shift()         // Just removes the first element from the array

console.log(myArray.includes(3));       // true
console.log(myArray.indexOf(5));        // 2

const newArr = myArray2.join()      // Converts the array to string

console.log(myArray2);      // [1, 2, 3, 4, 5]
console.log(newArr);        // 1,2,3,4,5    (string)
console.log(typeof newArr); // String

const newArr1 = myArray2.slice(1, 3)    // -> Don't change any thing on the main array (call by value)
console.log(newArr1);                   // [ 2, 3 ]
console.log("A", myArray2);             // A [ 1, 2, 3, 4, 5 ]

const newArr2 = myArray2.splice(1,3)    // -> Removes the elements from original array (call by reference)
console.log(newArr2);                   // [ 2, 3, 4 ]
console.log("B", myArray2);             // B [ 1, 5 ]
