//destructuring arguments

function showMenu({title="My Title", width:w=100, height:h=200} = {}) {
    alert(title + ' ' + w + ' ' + h);
}

showMenu(); // Заголовок 100 200
