//promise race

let httpGet = url => Promise.resolve(url);

let urls = [
    '/article/promise/user.json',
    '/article/promise/guest.json'
];

Promise.race([
    httpGet('/article/promise/user.json'),
    httpGet('/article/promise/guest.json')
]).then(firstResult => {
    console.log( firstResult ); // what to be first
});