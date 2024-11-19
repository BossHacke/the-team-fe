var header = document.getElementById('header');
var menu = document.getElementById("mobile-menu");
var navHeader = document.getElementById("nav");
var headerHeight = header.clientHeight;

menu.onclick = function () {
    let isClosed = header.clientHeight === headerHeight;
    if (isClosed) {
        header.style.height = 'auto';
        navHeader.style.display = 'block';
    } else {
        header.style.height = null;
        navHeader.style.display = 'none';
    }
}

var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
console.log(menuItems);
for (let i = 0; i < menuItems.length; i++) {
    let menuItem = menuItems[i];

    menuItem.onclick = function () {
        if (header.clientWidth < 800) {
            header.style.height = null;
            navHeader.style.display = 'none';
        } else {
            header.style.height = null;
        }
    }
}