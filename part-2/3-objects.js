// singleton

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "8586",
    age: 20,
    location: "Delhi",
    email: "mandalrajji123@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "hitesh@gpt"
// console.log(jsUser.email);

// Object.freeze(jsUser)
jsUser.age = 25

// console.log(jsUser);

jsUser.greeting = function () {
    console.log("Hello HS user");
}

jsUser.greetingTwp = function () {
    console.log(`Hello HS user, ${this.name}`);
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwp`())