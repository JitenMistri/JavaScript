// Immediately Invoked Function Expression (IFFE)
// Needs semicolon to define the scope

(function chai(){               // named IFFE
    console.log(`Function Called Immediately`);
})();

( (name) => {
    console.log(`Second ${name} function called Immediately`);
})("Arrow")