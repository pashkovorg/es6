//super

let a = {
    walk() {
        console.log(`i'm walking in object A`);
    },
    talk() {
        console.log(`i'm talking in object A`);
    }
};

let b = {
    walk() {
        super.walk();
        console.log(`i'm walking in object B`);
    },
    talk: function () {
        //super.talk();
        console.log(`i'm talking in object B`);
    },
    walkAndTalk() {
        setTimeout(() => super.walk() || super.talk());
    }
}

//b.walk(); //will not work

Object.setPrototypeOf(b, a);

//b.walk();

//b.talk(); //will not work

b.walkAndTalk();


