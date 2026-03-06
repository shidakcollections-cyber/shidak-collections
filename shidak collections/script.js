// Get cart from localStorage or empty array
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Update cart count in header
function updateCartCount() {
  document.getElementById("cart-count").textContent = cart.length;
}

updateCartCount();

// Add to cart button functionality
document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", () => {
    const product = {
      name: button.dataset.name,
      price: button.dataset.price,
      image: button.dataset.image
    };

    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();
    alert(`${product.name} added to cart 🛒`);
  });
});
// Wishlist Array
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

// Wishlist Buttons
document.querySelectorAll(".add-to-wishlist").forEach(button => {
  button.addEventListener("click", () => {
    const product = {
      name: button.dataset.name,
      price: button.dataset.price,
      image: button.dataset.image
    };

    // Check if already in wishlist
    const exists = wishlist.find(item => item.name === product.name);
    if (!exists) {
      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      alert(`${product.name} added to Wishlist ❤️`);
    } else {
      alert(`${product.name} is already in your Wishlist`);
    }
  });
});
// Initialize wishlist from localStorage
let = JSON.parse(localStorage.getItem('wishlist')) || [];

// Update counters
function updateWishlistCounter() {
  const count = wishlist.length;
  document.getElementById('wishlist-count').textContent = count;
  const mobileCounter = document.getElementById('mobile-wishlist-count');
  if (mobileCounter) mobileCounter.textContent = count;
}

// Show a toast message
function showWishlistToast(productName) {
  const toast = document.createElement('div');
  toast.className = 'wishlist-toast';
  toast.textContent = `${productName} added to wishlist!`;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2000);
}

// Add product to wishlist
document.querySelectorAll('.add-to-wishlist').forEach(btn => {
  btn.addEventListener('click', () => {
    const name = btn.dataset.name;
    const price = btn.dataset.price;
    const image = btn.dataset.image;

    // Check if already in wishlist
    const exists = wishlist.some(item => item.name === name);
    if (!exists) {
      wishlist.push({ name, price, image });
      localStorage.setItem('wishlist', JSON.stringify(wishlist));

      // Animate button
      btn.classList.add('added');
      setTimeout(() => btn.classList.remove('added'), 500);

      // Update counter
      updateWishlistCounter();

      // Show toast
      showWishlistToast(name);
    } else {
      showWishlistToast(`${name} is already in wishlist`);
    }
  });
});


