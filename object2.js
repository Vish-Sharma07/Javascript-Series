const tinderUser = new Object() // Singleton empty object

tinderUser.id = "123abc"
tinderUser.name = "Mark"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const newUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Vishakha",
            lastname: "Sharma"
        }
    }
}

// console.log(newUser.fullname.userfullname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }

// const obj3 = { obj1, obj2 }
// console.log(obj3) // This emerges objects in objects just like arrays

// const obj3 = Object.assign({}, obj1, obj2); // {} is given just to store the combintion according to mdn
// console.log(obj3)

// But the most effective way is spread

// const obj3 = {...obj1, ...obj2 }
// console.log(obj3)

// When value comes from database in the form of arrays

const user = [{
        id: 1,
        email: "v@gmail.com"

    },
    {
        id: 1,
        email: "v@gmail.com"

    },
    {
        id: 1,
        email: "v@gmail.com"

    },
]

user[1].email;
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));