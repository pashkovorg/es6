//trap has

let dictionary = {
    'Hello': 'Hola'
};

dictionary = new Proxy(dictionary, {
    has(target, phrase) {
        return true;
    }
});

console.log("BlaBlaBla" in dictionary);