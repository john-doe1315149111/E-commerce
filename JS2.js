window.onload = function() {
    window.scrollTo(0, 0); // Scrolls the page to the top when loaded
};

// Select all "Add to Cart" buttons and pop art alert elements
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const popArtAlerts = document.querySelectorAll('.pop-art-alert');

// Function to show the pop art alert when an item is added to the cart
function showPopArtAlert(event) {
    const alertBox = event.target.nextElementSibling; // Get the next element after the clicked button (the alert box)

    alertBox.style.display = 'block'; // Show the alert box

    // Hide the alert box after 1.5 seconds
    setTimeout(() => {
        alertBox.style.display = 'none';
    }, 1500);
}

// Add event listeners to each "Add to Cart" button
addToCartButtons.forEach(button => {
    button.addEventListener('click', showPopArtAlert);
});

// Function to search products based on query input
function searchProducts() {
    const query = document.getElementById('search-bar').value.toLowerCase(); // Get the search query and convert to lowercase
    const products = document.querySelectorAll('.product'); // Select all product elements

    // Loop through each product and check if it matches the query
    products.forEach(product => {
        const productName = product.querySelector('h3').textContent.toLowerCase(); // Get product name
        const productDescription = product.querySelector('h5').textContent.toLowerCase(); // Get product description
        const productCategory = product.getAttribute('data-category').toLowerCase(); // Get product category

        // If the product name, description, or category matches the search query, display the product
        if (productName.includes(query) || productDescription.includes(query) || productCategory.includes(query)) {
            product.style.display = 'inline-block'; // Show the product
        } else {
            product.style.display = 'none'; // Hide the product
        }
    });
}

// Function to search products based on category
function searchCategory() {
    const query = document.getElementById('search-bar').value.trim().toLowerCase(); // Get the search query and trim any spaces
    const products = document.querySelectorAll('.product'); // Select all product elements

    let foundProduct = null;

    // Loop through each product and check if it matches the category
    products.forEach(product => {
        const category = product.getAttribute('data-category').toLowerCase(); // Get product category

        if (category === query) {
            foundProduct = product; // If category matches, store the product
        }
    });

    // If a product with the matching category is found, scroll to it
    if (foundProduct) {
        foundProduct.scrollIntoView({
            behavior: 'smooth',
            block: 'start' // Scroll to the start of the found product
        });
    } else {
        alert('Category not found'); // Alert if no matching category is found
    }
}

// Add an event listener to the search bar to scroll to top when input changes
document.getElementById('search-bar').addEventListener('input', function() {
    window.scrollTo({
        top: 0, // Scroll to the top of the page
        behavior: 'smooth' // Smooth scroll animation
    });
});

// Set up a slideshow of ads that cycles through every 3 seconds
let currentIndex = 0;
const ads = document.querySelectorAll('.ad-headline'); // Select all ad headline elements
const totalAds = ads.length; // Get the total number of ads

// Function to change the ad every 3 seconds
function changeSlide() {
  ads[currentIndex].classList.remove('active'); // Remove the active class from the current ad
  
  currentIndex = (currentIndex + 1) % totalAds; // Update the index to the next ad (loop back to 0 if the last ad is reached)

  ads[currentIndex].classList.add('active'); // Add the active class to the new ad
}

// Set the slideshow to change every 3 seconds
setInterval(changeSlide, 3000);

// Make sure the first ad starts as active
ads[currentIndex].classList.add('active');

let cart = []; // Array to store cart items

// Function to toggle the cart modal
function toggleCart() {
    const cartModal = document.getElementById('cartModal');
    cartModal.style.display = (cartModal.style.display === "none" || cartModal.style.display === "") ? "flex" : "none";
    displayCartItems();
}
// Function to add an item to the cart
function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
}
// Function to display the cart items inside the modal
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    cartItemsContainer.innerHTML = ""; // Clear current cart items
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        cart.forEach(item => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.innerHTML = `<p>${item.name} - ${item.price}</p>`;
            cartItemsContainer.appendChild(cartItemDiv);
        });
    }
}
// Function to clear the cart
function clearCart() {
    cart = []; // Empty the cart
    displayCartItems();
}