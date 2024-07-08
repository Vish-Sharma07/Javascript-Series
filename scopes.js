let a = 10,
    b = 20,
    c = 40;
// console.log(a);
// console.log(b);
// console.log(c); // Dp not have any scope bcs of curly braces

// Global Scope -Can be accesed anywhere in or outside ofloops
//Block Scope = can only be accessedwithin the block or curly braces only

function one() { // Nested Scope
    const username = "Vishakha"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
one()