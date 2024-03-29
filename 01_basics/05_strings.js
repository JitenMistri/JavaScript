const name = "Jiten"
const count = 10

// console.log(name + count + "Mistri");   //Jiten10Mistri

console.log(`Hello my name is ${name} and count is ${count}`);

// Best way to declare a string is to declare it as Object
const myName = new String('Jiten')

console.log(myName);            //[String: 'Jiten']
console.log(myName[0]);         //J
console.log(myName.length);     //5
console.log(myName.toUpperCase());  //JITEN
console.log(myName.substring(0,3)); //Jit
console.log(myName.slice(-3,4));

const newStringOne = "  Jiten   "
console.log(newStringOne);          //  Jiten
console.log(newStringOne.trim());   //Jiten

const url = "https://jiten.com/jiten%20mistri"
console.log(url.replace('%20','-'));    //https://jiten.com/jiten-mistri

const dashName = "jiten-mistri-dot-com"
console.log(dashName.split('-'));      // [ 'jiten', 'mistri', 'dot', 'com' ]
