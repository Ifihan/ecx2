const Mission = document.querySelector(".vision-list1")
const Vision = document.querySelector(".vision-list2")
const Philosophy = document.querySelector(".vision-list3")
const MissionC = document.querySelector(".content-container1")
const VisionC = document.querySelector(".content-container2")
const PhilosophyC = document.querySelector(".content-container3")

Mission.addEventListener("click",missionFn)

function missionFn() {
    MissionC.classList.add("yes-display");
    MissionC.classList.remove("no-display");
    PhilosophyC.classList.add("no-display");
    VisionC.classList.add("no-display");
    Mission.classList.add("active1");
    Vision.classList.remove("active1");
    Philosophy.classList.remove("active1")
}

Vision.addEventListener("click", visionFn)

function visionFn() {
    MissionC.classList.add("no-display");
    PhilosophyC.classList.add("no-display");
    VisionC.classList.add("yes-display");
    VisionC.classList.remove("no-display");
    Mission.classList.remove("active1");
    Vision.classList.add("active1");
    Philosophy.classList.remove("active1")
}

Philosophy.addEventListener("click", philoFn)

function philoFn() {
    MissionC.classList.add("no-display");
    PhilosophyC.classList.add("yes-display");
    PhilosophyC.classList.remove("no-display");
    VisionC.classList.add("no-display");
    Mission.classList.remove("active1");
    Vision.classList.remove("active1");
    Philosophy.classList.add("active1");
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Gallery Slider
var slideIndex1 = 1;
showDivs(slideIndex1);

function plusDivs(n) {
    showDivs(slideIndex1 += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides1");
    if (n > x.length) {
        slideIndex1 = 1
    }
    if (n < 1) {
        slideIndex1 = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex1 - 1].style.display = "block";
}