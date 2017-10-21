//generator with params

function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

let sequence = [...generateSequence(2, 5)];

console.log(sequence); // 2, 3, 4, 5