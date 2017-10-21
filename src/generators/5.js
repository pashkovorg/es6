//two way yield

function* gen() {
    // send question outside and wait for answer
    let result = yield "2 + 2?";

    console.log(result);
}

let generator = gen();

let question = generator.next().value;
// "2 + 2?"

setTimeout(() => generator.next(4), 2000);