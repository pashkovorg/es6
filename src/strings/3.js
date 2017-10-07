//complex expressions

function isLargeScreen() {
    return true;
}

let item = {isCollapsed: true};

const classes = `header ${ isLargeScreen() && item.isCollapsed ?
    'icon-expander' : 'icon-collapser' } sapUiTitle`;

console.log(classes); //header icon-expander sapUiTitle