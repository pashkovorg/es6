//setter setter

class Character {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    // getter
    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }

    // setter
    set fullName(newValue) {
        [this._firstName, this._lastName] = newValue.split(' ');
    }

};

let character = new Character("Jorah", "Mormont");
console.log( character.fullName ); // Jorah Mormont
character.fullName = "Alex Pashkov";
console.log( character.fullName ); // Alex Pashkov
