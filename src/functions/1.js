//default parameters

function showMenu(title = "No Title", width = 100, height = 200) {
    console.log(title + ' ' + width + ' ' + height);
}

showMenu("Menu1");

showMenu(undefined, null);
