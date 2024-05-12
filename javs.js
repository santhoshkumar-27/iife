// https://circleci.com/blog/ci-cd-for-js-iifes/#prerequisites
const greeting = "Hello world";

// named functions
(function myFunc() {
    // Beginning of function
    console.log(greeting);
})();


// arrow functions
(() => console.log('arrow functions'))();

(function () { console.log('anonymous functions') })();


const friendlyFunction = (function () {
    let greetCount = 0;
    return function () {
        console.log(`Hello ${greetCount}x`);
        return greetCount++;
    };
})();


console.log('friendlyFunction', friendlyFunction())
console.log('friendlyFunction', friendlyFunction())
var greetCount = 9; // because the iife as different scope
console.log('friendlyFunction', friendlyFunction())
console.log('friendlyFunction', friendlyFunction())