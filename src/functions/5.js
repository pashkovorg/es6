//destructuring arguments

function showMenu({title="My Title", width:w=100, height:h=200} = {}) {
    console.log(title + ' ' + w + ' ' + h);
}

showMenu(); // Заголовок 100 200
