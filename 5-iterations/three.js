// for of

const arr=[4, 5, 34, 64, 34, 23, 55]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const i of greetings) {
    // console.log(i);
}

// Maps

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

for (const [key, i] of map) {
    // console.log(key, ':-',i);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [i,value] of myObject) {
//     // console.log(i, ":-", value);
// }

