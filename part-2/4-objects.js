// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Samay"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1,obj2)

const obj3 = {...obj1,...obj2}

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com",
    },
    {
        id: 1,
        email: "h@gmail.com",
    },
    {
        id: 1,
        email: "h@gmail.com",
    },
    {
        id: 1,
        email: "h@gmail.com",
    },
]

// console.log(users[1].email);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));


const course = {
    coursename: "js in Hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const { courseInstructor } = course

console.log(courseInstructor);


// const navbar = ({company}) => {

// }

// navbar(company = "hitesh")


// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {},
    {}
]