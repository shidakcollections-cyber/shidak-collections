// Get wishlist from localStorage or create empty array
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

const wishlistContainer = document.getElementById('wishlist-products');
const emptyMsg = document.getElementById('empty-msg');

function displayWishlist() {
    wishlistContainer.innerHTML = '';

    if (wishlist.length === 0) {
        emptyMsg.style.display = 'block';
        return;
    } else {
        emptyMsg.style.display = 'none';
    }

    wishlist.forEach((item, index) => {
        const card = document.createElement('div');
        card.classList.add('wishlist-card');
        card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p class="price">₹${item.price}</p>
      <button class="remove-btn" onclick="removeFromWishlist(${index})">
        <i class="fa-solid fa-trash"></i> Remove
      </button>
      <button class="buy-btn" onclick="buyNow('${item.name}', ${item.price})">
        <i class="fa-solid fa-bolt"></i> Buy Now
      </button>
    `;
        wishlistContainer.appendChild(card);
    });
}

// Remove item from wishlist
function removeFromWishlist(index) {
    wishlist.splice(index, 1);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    displayWishlist();
}

// Buy Now placeholder
function buyNow(name, price) {
    alert(`Proceeding to buy: ${name} for ₹${price}`);
    // Redirect to checkout page if you have one
}

displayWishlist();