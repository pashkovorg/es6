//destructuring using existing variables;

let a, b;
//{a, b} = {a:5, b:6}; // error, compiler count {a,b} - as block

({a, b} = {a:5, b:6}); // inside expression it's not a block