//destructuring arguments

function firstFunction() {} // firstFunction.name == "firstFunction"

let blablaFunction = function secondFunction() {}; // secondFunction.name == "secondFunction"

let superFunction = function () {}; // secondFunction.name == "secondFunction"

console.log(firstFunction.name); // firstFunction
console.log(blablaFunction.name); // secondFunction
console.log(superFunction.name); // superFunction


