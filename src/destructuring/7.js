//destructuring object with custom variables names

let options = {
    title: "Menu",
    width: 100,
    height: 200
};

let {width: w, height: h} = options;

console.log(w);
console.log(h);
