
let apples = 5; // (*)

if (true) {
    let apples = 10;

    console.log(apples); // 10 (inside block)
}

console.log(apples); // 5 (outside the block we have different value)
