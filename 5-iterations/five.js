const coding = ["java", "cpp", "python", "ruby", "js"]

// coding.forEach(function (item) {
//     console.log(item);
// } )

// coding.forEach((ii) => {
//     console.log(ii);
// } )

function printMe(ii) {
    // console.log(ii);
}

// coding.forEach(printMe)

// coding.forEach((item, index, arr)=> {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },{
        languageName: "python",
        languageFileName: "py"
    },{
        languageName: "ruby",
        languageFileName: "rb"
    },
]

myCoding.forEach((item) => {
    
    console.log(item.languageName);
} )