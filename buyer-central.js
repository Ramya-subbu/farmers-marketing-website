let currentIndex = 0;
const productsPerPage = 3;
const cart = [];

// Define an array of product objects
const products = [
  {
    id: 1,
    name: "Apple",
    imageUrl: "images/fruits/apple.jpg",
    quantityOptions: [1, 2, 3, 4, 5],
    reviews: [],
    price: 100
  },
  {
    id: 2,
    name: "Banana",
    imageUrl: "images/fruits/banana.jpg",
    quantityOptions: [1, 2, 3, 4, 5],
    reviews: [],
    price: 50
  },
  {
    id: 3,
    name: "Mango",
    imageUrl: "images/fruits/mango.jpg",
    quantityOptions: [1, 2, 3, 4, 5],
    reviews: [],
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
]
// Function to populate fruit products
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
        <p class="price">$${product.price}</p>
        <div class="product-actions">
          <button class="add-to-cart-btn" data-product-id="${product.id}">Add to Cart</button>
          <button class="buy-now-btn" data-product-id="${product.id}">Buy Now</button>
        </div>
      </div>
    `;
  }).join("");
  productsSection.innerHTML += productsHtml;
}
// Add event listener to quantity select elements
document.querySelectorAll(".product-box .quantity-selector select").forEach((selectElement) => {
  selectElement.addEventListener("change", (event) => {
    console.log("Change event triggered");
    const productId = event.target.dataset.productId;
    console.log("Product ID:", productId);
    const selectedQuantity = parseInt(event.target.value);
    console.log("Selected quantity:", selectedQuantity);
    const product = products.find((product) => product.id == productId);
    console.log("Product found:", product);
    const totalPrice = selectedQuantity * product.price;
    console.log("Total price:", totalPrice);
    const priceElement = event.target.closest(".product-box").querySelector(".price");
    console.log("Price element found:", priceElement);
    priceElement.innerHTML = `Price: $${totalPrice}`;
  });
});

  // Add event listener to add to cart buttons
  document.querySelectorAll(".add-to-cart-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      const productId = event.target.dataset.productId;
      const product = products.find((product) => product.id == productId);
      cart.push(product);
      alert(`Added ${product.name} to cart!`);
    });
  });

  // Add event listener to rating stars
  document.querySelectorAll(".rating-stars .star").forEach((star) => {
    star.addEventListener("click", (event) => {
      const productId = event.target.parentNode.dataset.productId;
      const rating = parseInt(event.target.dataset.rating);
      const product = products.find((product) => product.id == productId);
      product.reviews.push({ rating });
      populateFruitsProducts();
    });
  });
  
// Function to handle "Load More" button click
function loadMoreProducts() {
  currentIndex += productsPerPage;
  populateFruitsProducts();
  if (currentIndex >= products.length) {
    document.getElementById("load-more-btn").style.display = "none";
  }
}

// Populate initial fruit products on page load
document.addEventListener("DOMContentLoaded", () => {
  populateFruitsProducts();
  const loadMoreBtn = document.createElement("button");
  loadMoreBtn.id = "load-more-btn";
  loadMoreBtn.textContent = "Load More";
  loadMoreBtn.onclick = loadMoreProducts;
  document.getElementById("products").appendChild(loadMoreBtn);
})
  // Create cart page
    const cartPage = document.createElement("div");
  cartPage.id = "cart-page";
  document.body.appendChild(cartPage);

  // Create cart table
  const cartTable = document.createElement("table");
  cartTable.id = "cart-table";
  cartPage.appendChild(cartTable);

// Function to update cart table
function updateCartTable() {
  const cartTableRows = document.createElement("tr");
  cart.forEach((product) => {
    const cartTableRow = document.createElement("tr");
    cartTableRow.innerHTML = `
      <td>${product.name}</td>
      <td>1</td>
      <td>$${product.price}</td>
      <td>$${product.price}</td>
    `;
    cartTableRows.appendChild(cartTableRow);
  });
  const cartTable = document.getElementById("cart-table");
  cartTable.innerHTML = ""; // Clear the table
  cartTable.appendChild(cartTableRows);
}

  // Add event listener to buy now button
  document.querySelectorAll(".buy-now-btn").forEach((button) => {
    button.addEventListener("click", () => {
      // Update cart table
      updateCartTable();
      // Show cart page
      document.getElementById("cart-page").style.display = "block";
    });
  });
