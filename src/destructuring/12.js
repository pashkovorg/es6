//Included properties and existing objects

let options = {
    size: {
        width: 100,
        height: 200
    },
    items: ["Bread", "Cheese"]
}

let { title="Menu", size: {width: w, height: h}, items: [item1, item2] } = options;

// Menu 100 200 Bread Cheese
console.log(title);  // Menu
console.log(w);  // 100
console.log(h); // 200
console.log(item1);  // Bread
console.log(item2);  // Cheese




let existing = {h: 50};
({size: {width: existing.w}} = options);
console.log(existing);