// Declaring block scope
if(true){
    let a = 10
    const b = 20
    var c = 30
}

// Will give error as variable are out of the scope of the below console.log()
console.log(a);         // a is not defined
console.log(b);         // b is not defined

// This is execute properly as var doesnt have scope
console.log(c);         // 30




