const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// newNumbers = myNumbers.forEach( (num)=> num+10 )
// console.log(newNumbers);


const newNums = myNumbers
                            .map((num) => num * 10)
                            .map( (num) => num+1 )

console.log(newNums);