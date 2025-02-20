let currentIndex = 0;
const productsPerPage = 3;
const cart = [];

// Define an array of vegetable objects
const vegetables = [
  {
    id: 1,
    name: "Broccoli",
    imageUrl: "images/vegetables/broccoli.jpg",
    quantityOptions: [1, 2, 3, 4, 5],
    reviews: [],
    price: 2.99
  },
  {
    id: 2,
    name: "Carrots",
    imageUrl: "images/vegetables/carrot.jpg",
    quantityOptions: [1, 2, 3, 4, 5],
    reviews: [],
    price: 1.99
  },
  {
    id: 3,
    name: "Cauliflower",
    imageUrl: "images/vegetables/cauliflower.jpg",
    quantityOptions: [1, 2, 3, 4, 5],
    reviews: [],
    price: 3.49
  },
  {
    id: 4,
    name: "Cucumber",
    imageUrl: "images/vegetables/cucumber.jpg",
    quantityOptions: [1, 2, 3, 4, 5],
    reviews: [],
    price: 1.49
  },
  {
    id: 5,
    name: "Kale",
    imageUrl: "images/vegetables/kale.jpg",
    quantityOptions: [1, 2, 3, 4, 5],
    reviews: [],
    price: 2.49
  },
  {
    id: 6,
    name: "Lettuce",
    imageUrl: "images/vegetables/lettuce.jpg",
    quantityOptions: [1, 2, 3, 4, 5],
    reviews: [],
    price: 1.99
  },
  {
    id: 7,
    name: "Onion",
    imageUrl: "images/vegetables/onion.jpg",
    quantityOptions: [1, 2, 3, 4, 5],
    reviews: [],
    price: 1.29
  },
  {
    id: 8,
    name: "Pepper",
    imageUrl: "images/vegetables/pepper.jpg",
    quantityOptions: [1, 2, 3, 4, 5],
    reviews: [],
    price: 2.99
  }
]
// Function to populate vegetable products
function populateVegetableProducts() {
    const productsSection = document.getElementById("products");
    const productsHtml = vegetables.slice(currentIndex, currentIndex + productsPerPage).map((product) => {
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
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".product-box .quantity-selector select").forEach((selectElement) => {
    selectElement.addEventListener("change", (event) => {
      const productId = event.target.dataset.productId;
      const selectedQuantity = parseInt(event.target.value);
      const product = vegetables.find((product) => product.id == productId);
      const totalPrice = selectedQuantity * product.price;
      const priceElement = event.target.closest(".product-box").querySelector(".price");
      priceElement.innerHTML = `Price: $${totalPrice}`;
    });
  });

  // Add event listener to add to cart buttons
  document.querySelectorAll(".add-to-cart-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      const productId = event.target.dataset.productId;
      const product = vegetables.find((product) => product.id == productId);
      cart.push(product);
      alert(`Added ${product.name} to cart!`);
    });
  });

  // Populate initial vegetable products on page load
  populateVegetableProducts();
});

// Function to handle "Load More" button click
function loadMoreVegetableProducts() {
    currentIndex += productsPerPage;
  populateVegetableProducts();
  if (currentIndex >= vegetables.length) {
    document.getElementById("load-more-veg-btn").style.display = "none";
  }
}

// Add event listener to load more button
document.addEventListener("DOMContentLoaded", () => {
    const loadMoreVegBtn = document.createElement("button");
    loadMoreVegBtn.id = "load-more-veg-btn";
    loadMoreVegBtn.textContent = "Load More";
    loadMoreVegBtn.onclick = loadMoreVegetableProducts;
    document.getElementById("products").appendChild(loadMoreVegBtn);
  });

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

// Create cart page
const cartPage = document.createElement("div");
cartPage.id = "cart-page";
document.body.appendChild(cartPage);

// Create cart table
const cartTable = document.createElement("table");
cartTable.id = "cart-table";
cartPage.appendChild(cartTable);
