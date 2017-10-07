//arrow functions

let inc = x => x+1;

let inc2 = function(x) { return x + 1; };

//two and more arguments

let sum = (a,b) => a + b;


//function has more operators (result are not automatically returned)

let getTime = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    return hours + ':' + minutes;
};


