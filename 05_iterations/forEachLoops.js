const coding = ["js", "java", "ruby"]

coding.forEach( function (val) {
    console.log(val);
} )                                     /*  js
                                            java
                                            ruby */

coding.forEach( (val) => {
    console.log(val);
})
                                            /*  js
                                            java
                                            ruby */

function printMe(item){
    console.log(item);
}

coding.forEach(printMe)                 /*  js
                                            java
                                            ruby */ 


coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
} )
                                        /* js 0 [ 'js', 'java', 'ruby' ]
                                        java 1 [ 'js', 'java', 'ruby' ]
                                        ruby 2 [ 'js', 'java', 'ruby' ]  */

const myCoding = [
    {
        languageName: "javascript",
        languageFile: "js"
    },
    {
        languageName: "java",
        languageFile: "java"
    },
    {
        languageName: "python",
        languageFile: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )
                                            /*javascript
                                            java
                                            python*/



