const user = new Object()       // Singleton Declaration

user.id = "001a"
user.name = "Rahul"
user.logged = false

console.log(user);          //{ id: '001a', name: 'Rahul', logged: false }

const newUser = {
    email: "some@google.com",
    fullName: {
        userFullName: {
            firstName: "Jiten",
            lastName: "Mistri"
        }
    }
}

console.log(newUser.fullName.userFullName.firstName);       //Jiten

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }

const obj3 = {obj1, obj2}
console.log(obj3);                              // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const obj4 = Object.assign(obj1,obj2)
console.log(obj4);                              // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' } 

const obj5 = {...obj1,...obj2}
console.log(obj5);                              // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

console.log(Object.keys(user));             // [ 'id', 'name', 'logged' ]
console.log(Object.values(user));           // [ '001a', 'Rahul', false ]
console.log(Object.entries(user));          // [ [ 'id', '001a' ], [ 'name', 'Rahul' ], [ 'logged', false ] ]

console.log(user.hasOwnProperty('name'));   // true


// Object De-structuring

const course = {
    courseName: "javascript course",
    price: "999",
    courseInstructor: "Jiten"
}

// course.courseInstructor      // General way of extracting object values

// de-structuring object
const {courseInstructor} = course
const {courseInstructor: instructor} = course       // instructor can be used to fetch the value

console.log(courseInstructor);          // Jiten
console.log(instructor);                // Jiten

