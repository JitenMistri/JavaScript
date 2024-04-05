// Filter loops
// filter basically returns values 

const nums = [1,2,3,4,5]
const val = nums.filter( (num) => num > 2 )
console.log(val);                                   // [ 3, 4, 5 ]

const books = [
    {
        title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004
    },
    {
        title: 'Book Two', genre: 'Non-Fiction', publish: 1990, edition: 2002
    },
    {
        title: 'Book Three', genre: 'Science', publish: 1995, edition: 2008
    },
    {
        title: 'Book Four', genre: 'Fiction', publish: 1999, edition: 2006
    }
]

let booksFinal = books.filter( (bk) => bk.genre === 'Fiction' )

console.log(booksFinal);            /* [
                                            { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
                                            {
                                            title: 'Book Four',
                                            genre: 'Fiction',
                                            publish: 1999,
                                            edition: 2006
                                            }
                                        ] */

booksFinal = books.filter( (bk) => { return bk.edition <= 2006})
console.log(booksFinal);            /* [
                                            { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
                                            {
                                            title: 'Book Two',
                                            genre: 'Non-Fiction',
                                            publish: 1990,
                                            edition: 2002
                                            },
                                            {
                                            title: 'Book Four',
                                            genre: 'Fiction',
                                            publish: 1999,
                                            edition: 2006
                                            }
                                        ] */


