//static methods

class Character {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    //factory method
    static createGuest() {
        return new Character("Guest", "friend");
    }
};

//unfortunately no static properties, but nobody can stop us from this
Character.staticProperty = "winter is coming..."


let user = Character.createGuest();

console.log( user.firstName ); // Guest

console.log( Character.createGuest ); // createGuest ... (function)
