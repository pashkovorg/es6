//symbol us non conflict

let obj = {
    iterator: 1,
    [Symbol.iterator]() {}
}

console.log(obj.iterator); // 1
console.log(obj[Symbol.iterator]) // function, not conflicted

console.log(obj);

console.log(Object.getOwnPropertySymbols(obj));
//console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);