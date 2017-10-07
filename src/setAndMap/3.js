//map delete, clear, has, keys, values, entries

let recipeMap = new Map([
    ['potato',   '500 gr'],
    ['mushrooms', '350 gr'],
    ['salt',   '10 gr'],
    ['rat poison',   '100 gr']
]);

if (recipeMap.has('rat poison')) {
    recipeMap.delete('rat poison');
}

// цикл по ключам
for(let ingredient of recipeMap.keys()) {
    console.log(ingredient); // potato, mushrooms, salt
}

// цикл по значениям [ключ,значение]
for(let amount of recipeMap.values()) {
    console.log(amount); // 500 gr, 350 gr, 10 gr
}

// цикл по записям
for(let entry of recipeMap.entries()) { // то же что и recipeMap.entries()
    console.log(entry); // 3 arrays of 2 values
}

recipeMap.clear();
console.log(recipeMap);