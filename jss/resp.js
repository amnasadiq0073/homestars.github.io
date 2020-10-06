burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightNav = document.querySelector('.rightNav')
navlist = document.querySelector('.navlist')

burger.addEventListener('click', () => {
    navbar.classList.toggle('h-nav-resp')
    rightNav.classList.toggle('v-class-resp')
    navlist.classList.toggle('v-class-resp')
})