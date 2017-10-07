//arrow functions could not create object
let inc = x => x+1;
new inc();


//no arguments

let showArg = () => console.log(arguments[0]);
showArg();


//arguments just taken from outer function

function f () {
    let showArg = () => console.log(arguments[0]);
    return showArg;
}

f(1)(1, 2);
