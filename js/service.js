burger = document.querySelector('.burger')
navList = document.querySelector('.nav-list')
navbar = document.querySelector('.navbar')
rightNav =  document.querySelector('.rightNav')
burger.addEventListener('click', ()=>{
    navbar.classList.toggle('h-nav-resp');
    navList.classList.toggle('v-class-resp');
    rightNav.classList.toggle('v-class-resp');
})