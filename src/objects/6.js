//object methods

let methodName = "getFirstName";

let name = "Jaime Lannister";
let character = {
    name,
    // instead of "sayHi: function() {" we write just "sayHi() {"
    sayHi() {
        console.log(this.name);
    },

    [methodName]() {
        return this.name.split(" ")[0];
    },

    getLastName: () => {
        console.log(this); //what do you think
    }
};

character.sayHi(); // Jaime Lannister
console.log(character.getFirstName());
character.getLastName();
