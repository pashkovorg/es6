//generator.throw

function* gen() {
    try {
        // в этой строке возникнет ошибка
        let result = yield "What is result for 2 + 2?"; // (**)

        console.log("it will throw exception ^^^");
    } catch(e) {
        console.log(e, "inside catch"); // output error
    }
}

let generator = gen();

let question = generator.next().value;

generator.throw(new Error("no such answer in my database")); // (*)