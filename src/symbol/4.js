//symbol use


let isMarried = Symbol("isMarried");

let character = {
    name: "Stannis Baratheon",
    [isMarried]: true
};

console.log(character[isMarried]);

console.log( Object.keys(character) );
