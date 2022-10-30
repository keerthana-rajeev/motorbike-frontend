const navMenu = () => {
    const menu = document.querySelector('.burger-menu')
    const nav = document.querySelector('.nav-list')
    const link = document.querySelectorAll('.nav-link')
    menu.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active')
        menu.classList.toggle('toggle')
    })
    function linkAction(){
        nav.classList.toggle('nav-active')
        menu.classList.toggle('toggle')
    }
    link.forEach(n => n.addEventListener('click', linkAction))

}
window.onscroll = function() {myFunction()};
var header = document.getElementById("header");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
} 
navMenu();
