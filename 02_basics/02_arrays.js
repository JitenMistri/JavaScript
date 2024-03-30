const marvel = ["thor", "ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

// Merging using Push

// marvel.push(dc)     // -> adds the dc array as a single element in marvel array
// console.log(marvel);    // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// Merging using Concat
// const allHeros = marvel.concat(dc)      // -> adds all the elements of dc to marvel and stores in a new array
// console.log(allHeros);                  // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// Merging using Spread Operator 
const all_new = [...marvel, ...dc]      // Simply just adds all the elements of mentioned arrays in the new array
console.log(all_new);                   // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// Flat Operator -> Multilevel array to normal array
const newArray = [1, 2, 3, [3, 4, 5], 6, [6, 7, [8, 9, 0]]]
const flatArray = newArray.flat(Infinity)
console.log(flatArray);         //  [
                                //     1, 2, 3, 3, 4,
                                //     5, 6, 6, 7, 8,
                                //     9, 0
                                //  ]

// Converting anything to Arrays

console.log(Array.from("Jiten"));       // [ 'J', 'i', 't', 'e', 'n' ]
console.log(Array.from({name: "Jiten"}));   // [] -> Will give empty array because we havent specified key or value to be converted

let sc1 = 100
let sc2 = 200
let sc3 = 300

console.log(Array.of(sc1, sc2, sc3));   // [ 100, 200, 300 ]
