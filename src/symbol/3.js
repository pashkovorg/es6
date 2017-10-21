//symbol register


let name = Symbol.for("Samwell Tarly");


console.log( Symbol.for("Samwell Tarly") == name ); // true

console.log( Symbol.keyFor(name));