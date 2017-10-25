//custom iterator

let range = {
    from: 1,
    to: 5
}

range[Symbol.iterator] = function() {

    let current = this.from;
    let last = this.to;

    // method should return object with with method next()
    return {
        next() {
            if (current <= last) {
                return {
                    done: false,
                    value: current++
                };
            } else {
                return {
                    done: true
                };
            }
        }

    }
};

/*for (let num of range) {
    console.log(num);
}*/

/*
range.to = 8;
for (let num of range) {
    console.log(num);
}*/

/*console.log(Math.max(...range));*/
