//commonJS export

let character = {
    name: `Hodor`,
    walk() {
        console.log(`${this.name}  walking`)
    }
}

module.exports.ONE = 1;
module.exports.character = character;