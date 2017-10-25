class MyMath {
    constructor() {
    }

    static get PI() {
        return 3.14;
    }
};

console.log(MyMath.PI);
MyMath.PI = 0;
console.log(MyMath.PI);