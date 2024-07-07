// singletons made by constructors

//object literals
// Object.create // constructor method

const mySym = Symbol("key1") // always use square notation fro symbol as dot notation change it to trings

const Jsuser = {
    name: "Vishakha",
    age: 20,
    "full name": "Vishakha Sharma",
    [mySym]: "mykey1 ", // accesing symbols as a key in objects
    location: "Uttar Pradesh",
    email: "vishakha@gmail.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday", "Tuesday", "Sarurday"]
}

// console.log(Jsuser.email) //old method
// console.log(Jsuser["email"])
// console.log(Jsuser["full name"])
// console.log(Jsuser[mySym])

// Jsuser.email = "vishakha@google.com" //to override or chnaging values
// console.log(Jsuser["email"])
// Object.freeze(Jsuser) // do not allow any changes in the object and its elemets
Jsuser.email = "vishakha@123.com" // console.log(Jsuser["email"])

Jsuser.greeting = function() {
    console.log("Namaste!!JS User!!")
}

Jsuser.greetingTwo = function() {
    console.log(`Hello, JS User, ${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());