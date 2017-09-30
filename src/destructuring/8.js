//destructuring object using default values

let options = {
    title: "Menu"
};

let {width: w = 100, height = 200, title} = options;

console.log(w);
console.log(height);
console.log(title);