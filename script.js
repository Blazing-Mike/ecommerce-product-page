const toggle = document.querySelector('.Navbar__toggle');
const closeBtn = document.querySelector('.closebtn');
const Navs = document.querySelector('.Navbar__items');

toggle.addEventListener('click', function (e) {
    Navs.style.width = '50%';
    Navs.style.padding = '10px';
    Navs.style.paddingTop = '50px';
    closeBtn.style.display = 'block';
    toggle.style.display = ' none';


})

closeBtn.addEventListener('click', function (e) {
    Navs.style.width = '0%'
    Navs.style.padding = '0px';
    toggle.style.display = ' block';
    closeBtn.style.display = 'none';
});


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("product-item");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";

}

// cart-counter
let count = 0;
const btnPlus = document.querySelector('.plus-icon');
const btnMinus = document.querySelector('.minus-icon');
const btnCount = document.querySelector('.count');




btnPlus.addEventListener('click', function (e) {
    e.preventDefault();
    btnCount.textContent = count++;
});

btnMinus.addEventListener('click', function (e) {

    btnCount.textContent = count--;
});