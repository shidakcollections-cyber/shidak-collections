let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

function displayCart() {
    cartItemsContainer.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty 🛒</p>";
        cartTotal.textContent = "Total: ₹0";
        return;
    }

    cart.forEach((item, index) => {
        total += parseInt(item.price);

        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");

        cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-info">
        <h3>${item.name}</h3>
        <p>₹${item.price}</p>
      </div>
      <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
    `;

        cartItemsContainer.appendChild(cartItem);
    });

    cartTotal.textContent = "Total: ₹" + total;
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

displayCart();