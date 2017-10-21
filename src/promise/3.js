//promise all, promise resolve (promise reject)

let httpGet = url => Promise.resolve(url);

let urls = [
    '/article/promise/user.json',
    '/article/promise/guest.json'
];

Promise.all( urls.map(httpGet) )
    .then(results => {
        console.log(results);
    });