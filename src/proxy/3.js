//trap delete

let dictionary = {
    'Hello': 'Hola'
};

dictionary = new Proxy(dictionary, {
    deleteProperty(target, phrase) {
        console.log(`somebody try to delete property: ${phrase}`);
        console.log(new Error().stack);
        return true; // do nothing but return true
    },

    apply() {
        console.log('apply')
    }
});

delete dictionary['Hello'];

console.log(dictionary['Hello']);

dictionary.fuck();