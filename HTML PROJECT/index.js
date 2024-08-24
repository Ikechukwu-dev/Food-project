function addToCart(food, price) {
    cart.push({ food, price });
    cartCount++;
    cartTotal += price;
    updateCart();
    alert(food + ' has been added to your cart!');
}

function updateCart() {
    document.getElementById('cart-count').innerText = cartCount;
    document.getElementById('cart-total').innerText = cartTotal.toFixed(2);

    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.food} - $${item.price.toFixed(2)}`;
        cartList.appendChild(li);
    });
}

function toggleCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.style.display = cartItems.style.display === 'block' ? 'none' : 'block';
}

function goHome() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function searchFood() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const foods = document.querySelectorAll('.food-item, .hidden-food-item');
    foods.forEach(food => {
        const foodName = food.querySelector('h3').innerText.toLowerCase();
        if (foodName.includes(searchTerm)) {
            food.style.display = 'inline-block';
        } else {
            food.style.display = 'none';
        }
    });
}

let cart = [];
let cartCount = 0;
let cartTotal = 0;

function addToCart(food, price) {
cart.push({ food, price });
cartCount++;
cartTotal += price;
updateCart();
alert(food + ' has been added to your cart!');
}
function updateCart() {
document.getElementById('cart-count').innerText = cartCount;
document.getElementById('cart-total').innerText = cartTotal.toFixed(2);

const cartList = document.getElementById('cart-list');
cartList.innerHTML = '';
cart.forEach(item => {
const li = document.createElement('li');
li.innerText = `${item.food} - $${item.price.toFixed(2)}`;
cartList.appendChild(li);
});
}
function toggleCart() {
const cartItems = document.getElementById('cart-items');
cartItems.style.display = cartItems.style.display === 'block' ? 'none' : 'block';
}
function rateItem(star, rating) {
const ratingContainer = star.parentNode;
const stars = ratingContainer.querySelectorAll('.star');
stars.forEach((s, index) => {
if (index < rating) {
    s.classList.add('active');
} else {
    s.classList.remove('active');
}
});
ratingContainer.querySelector('.rating-value').textContent = rating;
}

function submitReview(button) {
const reviewContainer = button.parentNode;
const reviewInput = reviewContainer.querySelector('.review-input');
const reviewList = reviewContainer.querySelector('.review-list');
}
if (reviewInput.value.trim() !== "") {
const li = document.createElement('li');
li.textContent = reviewInput.value;
reviewList.appendChild(li);
reviewInput.value = ""; // Clear the textarea
}
function rateItem(star, rating) {
const ratingContainer = star.parentNode;
const stars = ratingContainer.querySelectorAll('.star');
stars.forEach((s, index) => {
if (index < rating) {
    s.classList.add('active');
} else {
    s.classList.remove('active');
}
});
ratingContainer.querySelector('.rating-value').textContent = rating;
}

function submitReview(button) {
const reviewContainer = button.parentNode;
const reviewInput = reviewContainer.querySelector('.review-input');
const reviewList = reviewContainer.querySelector('.review-list');

if (reviewInput.value.trim() !== "") {
const li = document.createElement('li');
li.textContent = reviewInput.value;
reviewList.appendChild(li);
reviewInput.value = ""; // Clear the textarea
}
}
function login() {
const username = document.getElementById('username-input').value.trim();
if (username) {
localStorage.setItem('username', username);
document.getElementById('user-name').textContent = username;
document.getElementById('welcome-message').style.display = 'inline';
document.getElementById('login-form').style.display = 'none';
document.getElementById('user-info').style.display = 'block';
document.getElementById('favorites-section').style.display = 'block';
loadFavorites();
}
}

function logout() {
localStorage.removeItem('username');
localStorage.removeItem('favorites');
document.getElementById('user-name').textContent = '';
document.getElementById('welcome-message').style.display = 'none';
document.getElementById('login-form').style.display = 'block';
document.getElementById('user-info').style.display = 'none';
document.getElementById('favorites-section').style.display = 'none';
document.getElementById('favorites-list').innerHTML = '';
}

function addFavorite(food) {
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
if (!favorites.includes(food)) {
favorites.push(food);
localStorage.setItem('favorites', JSON.stringify(favorites));
loadFavorites();
}
}

function loadFavorites() {
const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
const favoritesList = document.getElementById('favorites-list');
favoritesList.innerHTML = '';
favorites.forEach(favorite => {
const li = document.createElement('li');
li.textContent = favorite;
favoritesList.appendChild(li);
});
}

function checkUser() {
const username = localStorage.getItem('username');
if (username) {
document.getElementById('user-name').textContent = username;
document.getElementById('welcome-message').style.display = 'inline';
document.getElementById('login-form').style.display = 'none';
document.getElementById('user-info').style.display = 'block';
document.getElementById('favorites-section').style.display = 'block';
loadFavorites();
}
}

// Run on page load to check if the user is logged in
checkUser();
let slideIndex = 0;
showSlides(slideIndex);

function showSlides(n) {
const slides = document.querySelectorAll('.carousel-slide');
if (n >= slides.length) {
slideIndex = 0;
} else if (n < 0) {
slideIndex = slides.length - 1;
}
slides.forEach(slide => slide.style.display = 'none');
slides[slideIndex].style.display = 'block';
}
function displayCartOverview() {
const cartList = document.getElementById('checkout-cart-list');
const cartTotal = document.getElementById('checkout-cart-total');
const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
let total = 0;

cartList.innerHTML = '';
cartItems.forEach(item => {
const li = document.createElement('li');
li.textContent = `${item.food} - $${item.price.toFixed(2)}`;
cartList.appendChild(li);
total += item.price;
});

cartTotal.textContent = total.toFixed(2);
}

function processPayment() {
const cardNumber = document.getElementById('card-number').value.trim();
const cardExpiry = document.getElementById('card-expiry').value.trim();
const cardCvc = document.getElementById('card-cvc').value.trim();

if (cardNumber === '' || cardExpiry === '' || cardCvc === '') {
alert('Please fill in all payment details.');
return;
}

// Simulate payment processing and order confirmation
const orderId = Math.floor(Math.random() * 1000000000);
const total = document.getElementById('checkout-cart-total').textContent;

document.getElementById('order-id').textContent = orderId;
document.getElementById('order-total').textContent = total;

document.getElementById('checkout').style.display = 'none';
document.getElementById('order-confirmation').style.display = 'block';

// Clear cart after successful order
localStorage.removeItem('cart');
updateCartCount();
}

function updateCartCount() {
const cartCount = document.getElementById('cart-count');
const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
cartCount.textContent = cartItems.length;
}

// Call this function to display the cart overview when the page loads
displayCartOverview();
function submitContactForm() {
const name = document.getElementById('name').value.trim();
const email = document.getElementById('email').value.trim();
const message = document.getElementById('message').value.trim();

if (name && email && message) {
// Simulate form submission (you would typically send this to a server)
document.getElementById('contact-form-response').textContent = 'Thank you for your message. We will get back to you soon.';
document.getElementById('name').value = '';
document.getElementById('email').value = '';
document.getElementById('message').value = '';
} else {
alert('Please fill in all fields.');
}
return false; // Prevent form submission (for demo purposes)
}

function toggleFAQ(faq) {
const answer = faq.nextElementSibling;
if (answer.style.display === 'block') {
answer.style.display = 'none';
} else {
answer.style.display = 'block';
}
}

function toggleChat() {
const chatBox = document.getElementById('live-chat-box');
if (chatBox.style.display === 'none' || chatBox.style.display === '') {
chatBox.style.display = 'block';
} else {
chatBox.style.display = 'none';
}
}

function sendMessage(event) {
if (event.key === 'Enter') {
const chatInput = document.getElementById('chat-input');
const chatContent = document.getElementById('chat-content');
const message = chatInput.value.trim();

if (message !== '') {
    const messageElement = document.createElement('p');
    messageElement.textContent = `You: ${message}`;
    chatContent.appendChild(messageElement);
    chatContent.scrollTop = chatContent.scrollHeight; // Scroll to the bottom
    chatInput.value = '';

    // Simulate a response from the support agent
    setTimeout(() => {
        const responseElement = document.createElement('p');
        responseElement.textContent = `Support: Thank you for your message. How can I help you today?`;
        chatContent.appendChild(responseElement);
        chatContent.scrollTop = chatContent.scrollHeight;
    }, 1000);
}
}
}
function shareOnFacebook() {
const url = encodeURIComponent(window.location.href);
const text = encodeURIComponent("Check out this amazing website!");
window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`, '_blank');
}

function shareOnTwitter() {
const url = encodeURIComponent(window.location.href);
const text = encodeURIComponent("Check out this amazing website!");
window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
}

function shareOnInstagram() {
const url = encodeURIComponent(window.location.href);
const text = encodeURIComponent("Check out this amazing website!");
// Instagram does not have a direct sharing URL, but you can use a similar approach to redirect users
window.open(`https://www.instagram.com/`, '_blank');
}

// Run this function on page load to set the default language
changeLanguage();
function increaseTextSize() {
const body = document.body;
let currentSize = window.getComputedStyle(body).fontSize;
body.style.fontSize = (parseFloat(currentSize) + 2) + "px";
}

function decreaseTextSize() {
const body = document.body;
let currentSize = window.getComputedStyle(body).fontSize;
body.style.fontSize = (parseFloat(currentSize) - 2) + "px";
}

function toggleContrast() {
const body = document.body;
body.classList.toggle('high-contrast');
}
function showPopup() {
document.getElementById('subscription-popup').style.display = 'block';
}

function closePopup() {
document.getElementById('subscription-popup').style.display = 'none';
}

// Show the pop-up after a delay or based on user interaction
window.setTimeout(showPopup, 5000); // Show after 5 seconds