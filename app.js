// cart.js

document.addEventListener("DOMContentLoaded", function () {
    const cartItemsContainer = document.getElementById("cart-items");
  
    // Retrieve the cart from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // If cart is empty, display a message
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
    } else {
      // Loop through each product in the cart and display it
      cart.forEach((product) => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
          <img src="${product.imageUrl}" alt="${product.name}" class="cart-item-image">
          <div class="cart-item-details">
            <h3>${product.name}</h3>
            <p>Quantity: ${product.quantity}</p>
            <p>Price: ₹${product.price}</p>
            <p>Total: ₹${product.price * product.quantity}</p>
          </div>
          <a href="remove.html" class="remove-from-cart" data-product-id="${product.id}">Remove</button>
        `;
        // Append the item to the cart container
        cartItemsContainer.appendChild(cartItem);
      });
    }
  
    // Add event listener to remove product from cart using event delegation
    cartItemsContainer.addEventListener("click", function (event) {
      if (event.target && event.target.classList.contains("remove-from-cart")) {
        const productId = event.target.dataset.productId;
        removeFromCart(productId);
      }
    });
  });
  
  // Function to remove product from cart
  function removeFromCart(productId) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = cart.filter((product) => product.id !== parseInt(productId));
  
    // Update localStorage with the updated cart
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  
    // Reload the cart page to reflect the change
    window.location.reload();
  }
  
