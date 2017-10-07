//trap get and set

let character = {};

let proxyHandler = {
    get(target, prop) {
        console.log(`Reading trap: ${prop}`);
        return target[prop];
    },
    set(target, prop, value) {
        console.log(`Writing trap: ${prop} ${value}`);
        target[prop] = value;
        return true;
    }
}

let proxy = new Proxy(character, proxyHandler);

proxy.name = "Shae"; // Writing trap

proxy.name; // Reading trap

console.log(character.name); // Shae