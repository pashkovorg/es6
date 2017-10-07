//object methods

let name = "Jaime Lannister";
let user = {
    name,
    // instead of "sayHi: function() {" we write just "sayHi() {"
    sayHi() {
        console.log(this.name);
    }
};

user.sayHi(); // Jaime Lannister
