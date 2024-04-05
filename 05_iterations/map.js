const nums = [1,2,3,4,5]
const vals = nums.map( (num) => num + 2)
console.log(vals);                              // [ 3, 4, 5, 6, 7 ]

// Chaining of Loops

const newNum = [1,2,3,4,5,6,7,8,9,10]
const newVal = newNum
                    .map( (num) => num * 10)
                    .map( (num) => num + 1)
                    .filter( (num) => num >= 40)

console.log(newVal);                /* [
                                            41, 51,  61, 71,
                                            81, 91, 101
                                        ] */

