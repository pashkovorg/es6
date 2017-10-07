//trap apply

let sum = (a, b) => a + b;

sum = new Proxy(sum, {
    // call target, after logging to console
    apply: function(target, thisArg, argumentsList) {
        console.log(`sum is about to be calculated: ${argumentsList}`);
        return target.apply(thisArg, argumentsList);
    }
});

// show message from proxy, and then result
console.log( sum(1, 2) );