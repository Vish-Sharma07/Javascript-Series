// Immediately InvokrdFunction Expression

// To invoke a function Automatically
(function chai() {
    console.log('DB Connected');
})(); // to end the function so that next one can execute

((name) => {
    console.log(`DB Connected Two ${name}`)
})('vishakha');