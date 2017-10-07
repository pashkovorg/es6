//promise chaining

var getUserInfo = new Promise(function(resolve, reject) {
    console.log(`get user data from server`);
    setTimeout(() => resolve({name: 'noname'}), 100);
});

var getOnlineStatus = new Promise(function(resolve, reject) {
    console.log(`get user online status`);
    setTimeout(() => ({online: true, git: 'https://github.com'}), 100);
});

var getGitHubInfo = new Promise(function(resolve, reject) {
    console.log(`get user online status`);
    setTimeout(() => ({online: true}), 100);
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
