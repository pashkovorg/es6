//trap constructor

class Soup {
    constructor(...ingredients) {
        //cook some soup
    }
}

Soup = new Proxy(Soup, {
    construct(target, argumentsList) {
        if (!argumentsList.length) {
            console.log(`NO soup for you, go back in one year`);
            return new Error();
        }

        return new target(...argumentsList);
    }
});

console.log(new Soup());

console.log(new Soup("salt", "pepper"));