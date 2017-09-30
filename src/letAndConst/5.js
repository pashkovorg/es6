
//variable i is visible in whole function
for(var i=0; i<10; i++) { /* … */ }

console.log(i); // 10


// every block has his own variable i
for(let j = 0; j<10; j++) { /* … */ }
for(let j = 0; j<10; j++) { /* … */ }

console.log( j ); // error: global variable j does not exist
