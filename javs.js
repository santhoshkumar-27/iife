// https://circleci.com/blog/ci-cd-for-js-iifes/#prerequisites

// named functions
(function myFunc() {
    // Beginning of function
    console.log('named functions');
})();


// arrow functions
(() => console.log('arrow functions'))();

(function (){ console.log('anonymous functions')})();