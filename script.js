const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.nav-links')

hamburger.addEventListener('click' , function(){
    navlinks.classList.toggle('active');
});