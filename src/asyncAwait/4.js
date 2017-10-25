//real example

var getUserInfo = () => new Promise(function(resolve, reject) {
    setTimeout(() => resolve({name: 'noname'}), 300);
});

var getOnlineStatus = userInfo => new Promise(function(resolve, reject) {
    setTimeout(() => resolve({online: true, git: 'https://github.com'}), 200);
});

async function runDeferred() {
    try {
        let userInfo = await getUserInfo();
        console.log(userInfo);
        let onlineStatus = await getOnlineStatus(userInfo);
        console.log(onlineStatus);
        console.log(`done`);

    } catch (e) {
        //todo
    }
}

runDeferred();