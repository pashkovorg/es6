//map object as key

let character = { name: "Theon Greyjoy" };

// для каждого пользователя будем хранить количество посещений
let dictionaryMap = new Map();

// объект user является ключом в visitsCountMap
dictionaryMap.set(character, "A former ward of House Stark");

console.log( dictionaryMap.get(character) );