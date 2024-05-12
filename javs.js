// https://circleci.com/blog/ci-cd-for-js-iifes/#prerequisites
const greeting = "Hello world";

// named functions
(function myFunc() {
    // Beginning of function
    console.log(greeting);
})();


// arrow functions
(() => console.log('arrow functions'))();

(function (){ console.log('anonymous functions')})();