//arrow functions does not have THIS

let group = {
    title: "Hobbit",
    characters: ["Bilbo Baggins", "Frodo Baggins", "Samwise Gamgee"],

    showList: function() {
        this.characters.forEach(
            character => console.log(this.title + ': ' + character)
        )
    }
}

group.showList();