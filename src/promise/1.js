//native promise

var coinFlipPromise = new Promise(function(resolve, reject) {
    Math.random() >= 0.5 ? resolve('heads') : reject('tails');
});

coinFlipPromise.then(success => {
    console.log(success);
}, fail => {
    console.log(fail);
});

//same as

/*
coinFlipPromise.then(success => {
    console.log(success);
});
coinFlipPromise.catch(fail => {
    console.log(fail);
});*/
