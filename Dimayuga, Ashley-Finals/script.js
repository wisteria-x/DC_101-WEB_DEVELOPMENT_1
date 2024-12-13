const addToCartButtons = document.querySelectorAll('.addToCartBtn');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const viewCartBtn = document.getElementById('viewCartBtn');
const cartContainer = document.getElementById('cartContainer');
const checkoutBtn = document.getElementById('checkoutBtn');

let cart = [];

addToCartButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const productName = product.querySelector('h3').textContent;
        const productPrice = product.querySelector('p').textContent;

        cart.push({ name: productName, price: productPrice });
        updateCart();


    });
});

function updateCart() {
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = {itemname} - {itemprice};
        cartItems.appendChild(li);
    });
    cartCount.textContent = cart.length;
}

viewCartBtn.addEventListener('click', () => {
    cartContainer.style.display = cartContainer.style.display === 'none' || cartContainer.style.display === '' ? 'block' : 'none';
});

checkoutBtn.addEventListener('click', () => {
    alert('Order Placed Successfully! Thanks for buying.');
    cart = [];
    updateCart();
    cartContainer.style.display = 'none';
});