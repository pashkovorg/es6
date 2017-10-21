//promise chaining

function randomFail() {
    if (Math.random() < 0.5) {
        throw new Error('unpredicted fail');
    }

}


var getUserInfo = () => new Promise(function(resolve, reject) {
    console.log(`get user data from server`);
    randomFail();
    setTimeout(() => resolve({name: 'noname'}), 300);
});

var getOnlineStatus = () => new Promise(function(resolve, reject) {
    console.log(`get user online status`);
    setTimeout(() => resolve({online: true, git: 'https://github.com'}), 200);
});

var getGitHubInfo = () => new Promise(function(resolve, reject) {
    console.log(`get GitHub Info`);
    randomFail();
    setTimeout(() => resolve({online: true}), 400);
});


getUserInfo()
    .then(response => {
        console.log(response);
        return getOnlineStatus();
    })
    .then(response => {
        console.log(response);
        return getGitHubInfo();
    })
    .then(response => (
       console.log(response)
    ))
    .catch(error => {
        console.log(`ERROR: ${error}`);
        throw new Error();
    })
    /*.then(response => {
        console.log("OK");
    });*/