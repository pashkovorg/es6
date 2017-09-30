//classical issue with closures

for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    });
}


for (let j = 0; j < 10; j++) {
    setTimeout(function () {
        console.log(j);
    });
}