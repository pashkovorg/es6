//function are visible only inside block

//'use strict';

if (true) {

    sayHi(); // works

    function sayHi() {
        console.log("Hello!");
    }

}
sayHi();


