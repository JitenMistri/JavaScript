const accountId = 122081
let accountEmail = "jiten@google.com"
var accountPassword = "98765" //never use var keyword in javascript as it has scope related issues
accountCity = "Delhi" //in javascript variables can be declared without let/const
let accountState //if u do not initialize the declared variable, js will treat it as undefined

// accountId = 12345 --> not allowed as constants cannot be modified 
accountEmail = "mistri@google.com"
accountPassword = "54321"
accountCity = "Gurugram"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])