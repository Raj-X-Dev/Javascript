
function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");

}

// sayMyName()

function addTwoNumbers(num1, num2) {
    // console.log(num1+num2)
    // console.log(num1+num2);
    return num1 + num2
}

const result = addTwoNumbers(4, 5)

// console.log("result : ",result)

function loginUserMessage(username = "GuestUser") {
    if (username == undefined) {
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"));

function calculateCartPrice(val1,val2,...num1) {
    return num1
}

// console.log(calculateCartPrice(300,200,100,500));

const user = {
    username: "raj",
    price: 199
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

const mynewArray = [200, 100, 400, 134, 532]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(mynewArray));