// Function to update cart item count
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = document.getElementById("cart-count");
    cartCount.textContent = cart.length; // Update the count based on cart length
  }
  
  // Call updateCartCount function when the page loads
  document.addEventListener("DOMContentLoaded", function() {
    updateCartCount();
  });
  
