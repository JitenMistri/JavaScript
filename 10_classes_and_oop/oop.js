function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function () {
        console.log(`Welcome ${this.username}`);
    }
    return this
}

const userOne = new User('Jiten', 7, true);
const userTwo = new User('Mistri', 10, false);

console.log(userOne);
console.log(userTwo);