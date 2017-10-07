//set

let set = new Set();

let ygritte = {name: "Ygritte"};
let missandei = {name: "Missandei"};
let gilly = {name: "Gilly"};

// some characters are met twice
set.add(ygritte);
set.add(missandei);
set.add(gilly);
set.add(ygritte);
set.add(missandei);

// set stores only unique values
console.log( set.size ); // 3

set.forEach( character => console.log(character.name ) );

//set.add(item)
//set.delete(item)
//set.has(item)
//set.clear()