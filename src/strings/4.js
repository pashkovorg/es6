//nesting templates
//please don't do that :-)

function isLargeScreen() {
    return true;
}

let item = {isCollapsed: true};

const classes = `header ${ isLargeScreen() && `icon-${item.isCollapsed ? 'expander' : 'collapser'}` }`;

console.log(classes);