//Object.setPrototypeOf

let a = {name: "Melisandre"};
function f (){};

let obj = new f();

Object.setPrototypeOf(obj, a);

console.log(obj);

console.log(Object.getPrototypeOf(obj));
