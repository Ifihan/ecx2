const navC = document.querySelector(".container2");
var previousScroll = window.scrollY;
window.addEventListener("scroll", scrollFn);

function scrollFn() {
    if (window.scrollY < previousScroll) {
        navC.classList.remove("nav-down")
        navC.classList.add("nav-up")
    } else if (window.scrollY > previousScroll) {
        navC.classList.add("nav-down")
        navC.classList.remove("nav-up")
    } else {
        navC.classList.add("nav-up")
    }
    previousScroll = window.scrollY;
}

const menu = document.querySelector(".hidden-menu");
const nav = document.querySelector(".nav");
const menuspan = document.querySelector(".menu-span");
const menuspan2 = document.querySelector(".menu-span2");
const menuspan3 = document.querySelector(".menu-span3");
const overlay = document.querySelector('div.overlay');

const show = function () {
    nav.classList.toggle("sample");
    menu.querySelector(".span2").classList.toggle("spanTrans")
    overlay.classList.toggle('show-overlay')
    navC.classList.toggle("nav-stable")
    menuspan.classList.toggle("menu-span-black")
    menuspan2.classList.toggle("menu-span-black")
    menuspan3.classList.toggle("menu-span-black")
    closeNav()
}
menu.addEventListener("click", show);

const closeNav = () =>  {
 if (true) {
  overlay.addEventListener("click",()=>{
        show()
   })
 }
}