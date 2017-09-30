//object spread, not in standard but will be. (works in chrome)

let options = {
    title: "Меню",
    width: 100,
    height: 200
};

let {title, ...size} = options;

console.log(size)