const user = {
    username: "Vishakha",
    price: 999,
    wlecomeMessage: function() {
            console.log(`${this.username}, welcome to website`);
            console.log(this);
        } // we can use this keyword in the defined scope
}

// user.wlecomeMessage()
// user.username = "Pamm";
// user.wlecomeMessage()

console.log(this); // Thisrefers to node environment andgives an empty output

// const chai = function() {
//         username: "Vishakha"
//         console.log(this.username);
//     }
// chai()

// Arrow function

const chai = () => {
    username: "Vishakha"
    console.log(this.username);
}