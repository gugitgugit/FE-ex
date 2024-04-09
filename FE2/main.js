const barsBtn = document.querySelector('.navbar_bars');
const menu = document.querySelector('.navbar_menu');
const links = document.querySelector('.navbar_links');

function barsEvent() {
    console.log('bars Click');
    menu.classList.toggle('active');
    links.classList.toggle('active');
}

barsBtn.addEventListener('click', barsEvent);
