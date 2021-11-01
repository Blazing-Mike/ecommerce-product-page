const toggle = document.querySelector('.Navbar__toggle');
const closeBtn = document.querySelector('.closebtn');
const Navs = document.querySelector('.Navbar__items');
const CartCount = document.querySelector('.cart-number');
const cartIcon = document.querySelector('.cart-container')
const cartNumberBox = document.querySelector('.notification');
const cartModal = document.querySelector('.cart-modal');
const addToCart = document.querySelector('.btn-submit');
const NoOfProduct = document.querySelector('.no-of-items');
const deleteIcon = document.querySelector('.delete-icon')

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

cartIcon.addEventListener('click', (event) =>{
    cartModal.classList.toggle('cart-modal-toggle');
});



addToCart.addEventListener('click', () =>{

cartNumberBox.style.display = 'flex';
cartNumberBox.style.alignItems = 'center';
cartNumberBox.style.justifyContent = 'center';
CartCount.textContent = btnCount.textContent;
    document.querySelector('.empty-cart').style.display = 'none';
    document.querySelector('.cart-item').style.display = 'flex';
    document.querySelector('.cart-item').style.alignItems = 'center';
    document.querySelector('.checkout').style.display = 'block';
    NoOfProduct.textContent = btnCount.textContent;
});


deleteIcon.addEventListener('click', () =>{
    document.querySelector('.cart-item').style.display = 'none';
    document.querySelector('.checkout').style.display = 'none';
    document.querySelector('.empty-cart').style.display = 'flex';
    btnCount.textContent = 0;
    cartNumberBox.style.display = 'none';
    


});


/* addToCart.addEventListener('click', () =>{
let markup = `
<div class="flex-perfect gap-x cart-item">
  <div class=" thumbnail-container flex-aligned">
    <img src="./images/image-product-1-thumbnail.jpg" alt="image-product-1-thumbnail" class="modal-thumbnail">
  </div>
  <div class="thumbnail-desc">
    <p class="thumbnail-para">Autumn Limited Edition</p>
    <p class="thumnnail-para">$125.00 * <span class="no-of-items"></span> <span class="bold-text">$375.00</span> </p>
  </div>

  <div class="delete-btn">
    <img src="./images/icon-delete.svg" alt="icon-delete" class="delete-icon">
  </div>
</div>` ;
cartModal.innerHTML = markup;
NoOfProduct.innerHTML = btnCount.textContent;
}) */