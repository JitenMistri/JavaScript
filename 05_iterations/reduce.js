// Reduce Itertrator

const nums = [1,2,3,4,5]

const total = nums.reduce(function (accumulator, currentValue) {
    console.log(`Accumulator: ${accumulator} and CuurentValue: ${currentValue}`);
    return accumulator + currentValue
},0)

console.log(total);                         /* Accumulator: 0 and CuurentValue: 1
                                                Accumulator: 1 and CuurentValue: 2
                                                Accumulator: 3 and CuurentValue: 3
                                                Accumulator: 6 and CuurentValue: 4
                                                Accumulator: 10 and CuurentValue: 5
                                                15 */

const newTotal = nums.reduce( (acc,curr) => acc+curr,0)
console.log(newTotal);                                      // 15

const shoppingCart = [
    {
        courseName: "java",
        price: 599
    },
    {
        courseName: "js",
        price: 799
    },
    {
        courseName: "py",
        price: 399
    }
]

const totalCost = shoppingCart.reduce( (acc,item) => acc + item.price,0)
console.log(`Total shopping Cost: ${totalCost}`);                       // Total shopping Cost: 1797
