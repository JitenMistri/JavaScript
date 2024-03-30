// Dates

let myDate = new Date()

console.log(myDate);        //2024-03-29T17:34:26.907Z
console.log(myDate.toString());     //Fri Mar 29 2024 23:05:01 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());   //Fri Mar 29 2024
console.log(myDate.toLocaleString());   // 29/3/2024, 11:07:54 pm
console.log(myDate.toJSON());           // 2024-03-29T17:37:54.499Z
console.log(myDate.toLocaleDateString());      //29/3/2024

console.log(typeof myDate);         // Object

// --------------------------------------------------------------------------------- //
// Manually declaring Dates

let newDate1 = new Date(2023, 0, 17)    //Month starts with 0 (0->January)
let newDate2 = new Date(2023, 0, 17, 5, 23)
let newDate3 = new Date("2023-01-15")   //YYYY-MM-DD
let newDate4 = new Date("01-15-2023")   //DD-MM-YYYY

console.log(newDate1.toLocaleString());         //17/1/2023, 12:00:00 am
console.log(newDate2.toLocaleString());         //17/1/2023, 5:23:00 am
console.log(newDate3.toLocaleString());         // 15/1/2023, 5:30:00 am
console.log(newDate4.toLocaleString());         // 15/1/2023, 12:00:00 am

// --------------------------------------------------------------------------------- //
// Timestamp

let myTimeStamp = Date.now()
console.log(myTimeStamp);                       // 1711734813027 (in ms)
console.log(Math.floor(Date.now()/1000));       // 1711734813 (in sec)