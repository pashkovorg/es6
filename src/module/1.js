//export example

const one = 1;

let character = {
    name: `Hodor`,
    walk() {
        console.log(`${this.name}  walking`)
    }
}

export {one as ONE, character}