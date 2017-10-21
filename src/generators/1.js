//generator example

function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
}

let generator = generateSequence();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());