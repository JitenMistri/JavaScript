const number = 400
console.log(number);                //400

const newNumber = new Number(400)
console.log(newNumber);             //[Number: 400]

console.log(newNumber.toString());          //400 (string)
console.log(newNumber.toString().length);   //3

console.log(newNumber.toFixed(3));      //400.000


const balance1 = 12.57456
const balance2 = 123.34532
const balance3 = 1123.432

console.log(balance1.toPrecision(3));       //12.6
console.log(balance2.toPrecision(3));       //123
console.log(balance3.toPrecision(3));       //1.12e+3

const num = 1000000
console.log(num.toLocaleString());              //1,000,000
console.log(num.toLocaleString('en-IN'));       //10,00,000

// +++++++++++++++++++++ Maths +++++++++++++++++++++++

console.log(Math.abs(-5));      //5 -> just make the negetive number positive
console.log(Math.round(4.3));   //4
console.log(Math.ceil(6.2));    //7
console.log(Math.floor(6.8));   //6

console.log(Math.random());         //0.235325332 -> gives random value in the range of 0-1
console.log((Math.random()*10)+1);    //4.245345234 -> will give a number greater than 0 always as we have multiplied by 10. 
                                    //It may be possible that the random is 0.025245, than multiplying 10 will be 0 again so we add 1 to it

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1)) + min);
