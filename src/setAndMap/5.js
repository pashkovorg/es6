// текущие активные пользователи
let activeCharacters = {
        char1: {name: "Ygritte"},
        char2: {name: "Missandei"},
        char3: {name: "Gilly"}
    };

let weakMap = new WeakMap();

weakMap.set(activeCharacters.char1, 1);
weakMap.set(activeCharacters.char2, 2);
weakMap.set(activeCharacters.char3, 3);
//weakMap.set('nobody', 4); //TypeError: "nobody" is not a non-null object

console.log( weakMap.get(activeCharacters.char1) ); // 1

delete activeCharacters.char1; // Ygritte is not active any more

delete activeCharacters.char3; // Gilly is not active any more

//trust that weakMap has only one active character;