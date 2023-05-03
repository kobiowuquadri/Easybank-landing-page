let hamburger = document.createElement('img');
hamburger.src = '../images/icon-hamburger.svg';
console.log(hamburger);

let closebar = document.createElement('img');
closebar.src = '../images/icon-close.svg';
console.log(closebar);

let navcard = document.querySelector('.navcard');
console.log(navcard);

let menu = document.querySelector('#menu');

menu.appendChild(hamburger);
console.log(menu);

hamburger.addEventListener('click', () => {
    navcard.classList.add('show');
    hamburger.remove();
    menu.appendChild(closebar);
});

closebar.addEventListener('click', () =>{
    navcard.classList.remove('show');
    closebar.remove();
    menu.appendChild(hamburger);
});