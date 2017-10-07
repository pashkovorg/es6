//default parameters expression

function sayHi(who = getCurrentUser().toUpperCase()) {
    console.log('Hello, ' + who);
}

function getCurrentUser() {
    return 'Sansa Stark';
}

sayHi();
