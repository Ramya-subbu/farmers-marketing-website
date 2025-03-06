// buyer-central.js

let currentIndex = 0;
const productsPerPage = 8;
const products = [
  {
    id: 1,
    name: "Apple",
    imageUrl: "images/fruits/apple.jpg",
    quantityOptions: [1, 2, 3, 4, 5],
    price: 100
  },
  {
    id: 2,
    name: "Banana",
    imageUrl: "images/fruits/banana.jpg",
    quantityOptions: [1, 2, 3, 4, 5],
    price: 50
  },
  {
    id: 3,
    name: "Mango",
    imageUrl: "images/fruits/mango.jpg",
    quantityOptions: [1, 2, 3, 4, 5],
    price: 150
  },
  {
    id: 4,
    name: "Orange",
    imageUrl: "images/fruits/orange.jpg",
    quantityOptions: [1, 2, 3, 4, 5],
    reviews: [],
    price: 80
  },
  {
    id: 5,
    name: "Watermelon",
    imageUrl: "images/fruits/watermelon.jpg",
    quantityOptions: [1, 2, 3, 4, 5],
    reviews: [],
    price: 200
  },
  {
    id: 6,
    name: "Grapes",
    imageUrl: "images/fruits/grapes.jpg",
    quantityOptions: [1, 2, 3, 4, 5],
    reviews: [],
    price: 120
  },
  {
    id: 7,
    name: "Pineapple",
    imageUrl: "images/fruits/pinapple.jpg",
    quantityOptions: [1, 2, 3, 4, 5],
    reviews: [],
    price: 180
  },
  {
    id: 8,
    name: "Peach",
    imageUrl: "images/fruits/peach.jpg",
    quantityOptions: [1, 2, 3, 4, 5],
    reviews: [],
    price: 180
  }
];

// Function to add product to cart
function addProductToCart(productId, quantity) {
  const product = products.find((product) => product.id == productId);
  const existingProductInCart = JSON.parse(localStorage.getItem('cart')) || [];

  // Check if the product already exists in the cart
  const existingProduct = existingProductInCart.find((cartProduct) => cartProduct.id == productId);
  if (existingProduct) {
    existingProduct.quantity += quantity;  // Increase quantity if it already exists
  } else {
    // Add product along with imageUrl
    existingProductInCart.push({
      id: productId,
      name: product.name,
      quantity,
      price: product.price,
      imageUrl: product.imageUrl  // Save product image URL
    });
  }

  // Store the updated cart in localStorage
  localStorage.setItem('cart', JSON.stringify(existingProductInCart));
}


// Function to populate products on the page
function populateFruitsProducts() {
  const productsSection = document.getElementById("products");
  const productsHtml = products.slice(currentIndex, currentIndex + productsPerPage).map((product) => {
    return `
      <div class="product-box">
        <div class="product-image">
          <img src="${product.imageUrl}" alt="${product.name}" class="product-image">
        </div>
        <h2>${product.name}</h2>
        <div class="quantity-selector">
          <select id="quantity-select" data-product-id="${product.id}">
            ${product.quantityOptions.map((option) => `<option value="${option}">${option} kg</option>`).join("")}
          </select>
        </div>
        <p class="price">₹${product.price}</p>
        <div class="product-actions">
          <a href="products.html" class="add-to-cart-btn" data-product-id="${product.id}">Add to cart</button>
          <a href="buy-now.html" class="buy-now-btn" data-product-id="${product.id}">Buy now</a>
        </div>
      </div>
    `;
  }).join("");
  productsSection.innerHTML += productsHtml;

  // Add event listener to "Add to Cart" buttons
  document.querySelectorAll(".add-to-cart-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      const productId = event.target.dataset.productId;
      const quantitySelect = event.target.closest(".product-box").querySelector("#quantity-select");
      const selectedQuantity = parseInt(quantitySelect.value);
      addProductToCart(productId, selectedQuantity);
    });
  });
}

// Populate initial fruit products on page load
document.addEventListener("DOMContentLoaded", () => {
  populateFruitsProducts();
});
