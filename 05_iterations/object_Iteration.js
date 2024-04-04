// Iteration in Objects

const myObj = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift'
}

for (const key in myObj) {
    console.log(key);           // js
}                               // cpp
                                // rb
                                // swift


for (const key in myObj) {
    console.log(`${key} shortcut is for ${Object[key]}`);
}                                                                   // js shortcut is for undefined
                                                                    // cpp shortcut is for undefined
                                                                    // rb shortcut is for undefined
                                                                    // swift shortcut is for undefined


const prog = ["js","rb","py","java"]

for (const key in prog) {
    console.log(prog[key]);
}                                   /*  js
                                        rb
                                        py
                                        java */

