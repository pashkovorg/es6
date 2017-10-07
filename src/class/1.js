//class syntax

class Character {

    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(this.name);
    }

}

//does not make sense
Character.prototype = {
    bla:5
}

let character = new Character("Brienne of Tarth");
character.sayHi(); // Brienne of Tarth

/*Object.setPrototypeOf(character, {a: 5});
character.sayHi(); //will not work*/





/*
function Character(name) {
    this.name = name;
}

 Character.prototype.sayHi = function() {
 console.log(this.name);
};*/
