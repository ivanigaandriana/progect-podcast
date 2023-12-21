const burger = document.querySelector('.burger');
const header__list = document.querySelector('.header__list');
burger.addEventListener('click', ()=> {
    burger.classList.toggle('is-active');
    header__list.classList.toggle('open');
});