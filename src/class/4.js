//static methods

class Animal {
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log("I walk: " + this.name);
    }
}

class Rabbit extends Animal {
    constructor(name) {
        //try to comment this
        super(name);
        console.log(`i'm in constructor`)
    }

    walk() {
        super.walk();
        console.log("...and jump!");
    }
}

let rabbit = new Rabbit("Roger");
rabbit.walk();

console.log(Rabbit.prototype);