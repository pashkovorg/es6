//map

let map = new Map();

map.set('1', 'str1');   // key-string
map.set(1, 'num1');     // number
map.set(true, 'bool1'); // boolean key
//or
/*let map = new Map([
    ['1',  'str1'],
    [1,    'num1'],
    [true, 'bool1']
]);*/

// in regular object it would be the same
// map stores type
console.log( map.get(1)   ); // 'num1'
console.log( map.get('1') ); // 'str1'

console.log( map.size ); // 3