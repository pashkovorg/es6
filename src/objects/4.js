//Object.assign

let a = {name: "Daario Naharis", title: " Commander of the Second Sons"};

let b = {origin: "Free Cities, Tyrosh", name: "unknown"};

let target = {};
Object.assign(target, b, a);

console.log(target);



//first level clone

/*
let a = {name: "Daario Naharis", title: " Commander of the Second Sons"};
let clone = Object.assign({}, a);*/
