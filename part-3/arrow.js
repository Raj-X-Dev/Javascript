const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
    
}

// user.welcomeMessage()

// user.username = "Raj"

// user.welcomeMessage()

// console.log(this);


// function chai() {
//     console.log(this);
// }

// chai()


const chai =  () => {
    let username = "hitesh"
    console.log(this);
}

// chai()

const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(3,4));