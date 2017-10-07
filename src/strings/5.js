//template functions


//function
function f(strings, ...values) {
    let str = "";
    console.log(strings); //["", " apples + ", " oranges = ", " fruits", raw: Array(4)]
    console.log(strings.raw); // original string
    console.log(values); //[2, 3, 5]

    for(let i=0; i<values.length || i<strings.length; i++) {
        str += strings[i] || "";
        str += values[i]  || "";
    }

    return str;
}

let apples = 2;
let oranges = 3;

let str = f`${apples} apples + ${oranges} oranges \n = ${apples + oranges} fruits`;

console.log(str);