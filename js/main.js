const headerNavigation = document.querySelector('.header__nav');
const mobileMenuBtn = document.querySelector('.menu__btn');

mobileMenuBtn.addEventListener('click', function() {
    headerNavigation.classList.toggle('active');
	mobileMenuBtn.classList.toggle('active');
})