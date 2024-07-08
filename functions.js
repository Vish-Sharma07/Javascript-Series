// node basics/functions


function myName() {
    console.log("V");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("K");
    console.log("H");
    console.log("A");
}

//myName()

function addTwoNo(num1, num2) {
    return num1 + num2;
}

const result = addTwoNo(3, 7);
//console.log("Result:", result);

function loginUserMessage(username) {
    if (username === undefined) {
        console.log("Please enter  your name!");
        return
    }
    return `${username} has logged in!!`
}

//console.log(loginUserMessage("Vishakha"));
// console.log(loginUserMessage());


// When we don't know about the total no of arguements passed by the user just like a shopping cart, we use restoperator

// rest is just same as spread(...) but the difference is their usecase

function calcCartPrice(...number1) {
    return number1;
}

//console.log(calcCartPrice(200, 300, 500, 400));

const user = {
    username: "Vishakha",
    price: 100
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user);