const products = [
  { id: 1, name: "Poster", price: 10, description: "Eye-catching event poster.", image: "Assets/Images/poster.jpg" },
  { id: 2, name: "Tent Card", price: 20, description: "Tent card to provide information on tables.", image: "Assets/Images/tent-card.jpg" }, // Fixed space issue
  { id: 3, name: "Flyer", price: 5, description: "Handout flyers for your audience.", image: "Assets/Images/Flyer.jpg" }
];

const productContainer = document.getElementById('products');
const basket = document.getElementById('basket-btn');
const shoppingCart = document.querySelector('.shopping-cart'); // Fixed selection

function displayProducts() {
  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
      <img class="shop-img" src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p>Price: £${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productContainer.appendChild(productDiv);
  });
}

displayProducts();

let cart = JSON.parse(localStorage.getItem('cart')) || [];

const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

function updateCart() {
  if (!cartItems || !cartTotal) return;

  cartItems.innerHTML = '';
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <img class="cart-img" src="${item.image}" /> - ${item.name} - £${item.price.toFixed(2)}
      <button class="delete-btn" onclick="removeFromCart(${index})">Remove</button>
    `;
    cartItems.appendChild(li);
  });

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  cartTotal.textContent = `Total: £${total.toFixed(2)}`;
  localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  updateCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

const clearCartBtn = document.getElementById('clear-cart');
if (clearCartBtn) {
  clearCartBtn.addEventListener('click', () => {
    cart = [];
    updateCart();
  });
}

if (basket) {
  basket.addEventListener('click', showCart);
} else {
  console.error("Basket button not found!");
}

function showCart() {
  console.log("Basket clicked!"); // Check if the function is running

  if (shoppingCart.classList.contains('visible')) {
    shoppingCart.classList.remove('visible');
  } else {
    shoppingCart.classList.add('visible');
  }
}


updateCart();
