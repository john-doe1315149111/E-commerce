window.onload = function() {
    window.scrollTo(0, 0);
};

const addToCartButtons = document.querySelectorAll('.add-to-cart');
const popArtAlerts = document.querySelectorAll('.pop-art-alert');

function showPopArtAlert(event) {
    const alertBox = event.target.nextElementSibling;

    alertBox.style.display = 'block';

    setTimeout(() => {
        alertBox.style.display = 'none';
    }, 1500);
}

addToCartButtons.forEach(button => {
    button.addEventListener('click', showPopArtAlert);
});

function searchProducts() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        const productDescription = product.querySelector('h5').textContent.toLowerCase();
        const productCategory = product.getAttribute('data-category').toLowerCase();

        if (productName.includes(query) || productDescription.includes(query) || productCategory.includes(query)) {
            product.style.display = 'inline-block';
        } else {
            product.style.display = 'none';
        }
    });
}

function searchCategory() {
    const query = document.getElementById('search-bar').value.trim().toLowerCase();
    const products = document.querySelectorAll('.product');

    let foundProduct = null;

    products.forEach(product => {
        const category = product.getAttribute('data-category').toLowerCase();

        if (category === query) {
            foundProduct = product;
        }
    });


    if (foundProduct) {
        foundProduct.scrollIntoView({
            behavior: 'smooth',
            block: 'start' 
        });
    } else {
        alert('Category not found');
    }
}

document.getElementById('search-bar').addEventListener('input', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

let currentIndex = 0;
const ads = document.querySelectorAll('.ad-headline');
const totalAds = ads.length;

function changeSlide() {
  ads[currentIndex].classList.remove('active');
  
  currentIndex = (currentIndex + 1) % totalAds;
  

  ads[currentIndex].classList.add('active');
}


setInterval(changeSlide, 3000);


ads[currentIndex].classList.add('active');


