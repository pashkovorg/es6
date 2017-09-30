
var apples = 5;

if (true) {
    var apples = 10;

    console.log(apples); // 10 (inside block)
}

console.log(apples); // 10 (outside block is the same)