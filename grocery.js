let currentIndex = 0;
const productsPerPage = 3;
const cart = [];

// Define an array of grocery objects
const groceries = [
    {
      id: 1,
      name: "Rice",
      imageUrl: "images/grocery/rice.jpg",
      quantityOptions: [1, 2, 3, 4, 5],
      reviews: [],
      price: 2.99
    },
    {
      id: 2,
      name: "Pasta",
      imageUrl: "images/grocery/pasta.jpg",
      quantityOptions: [1, 2, 3, 4, 5],
      reviews: [],
      price: 1.99
    },
    {
      id: 3,
      name: "Olive Oil",
      imageUrl: "images/grocery/olive-oil.jpg",
      quantityOptions: [1, 2, 3, 4, 5],
      reviews: [],
      price: 3.49
    },
    {
      id: 4,
      name: "Salt",
      imageUrl: "images/grocery/salt.jpg",
      quantityOptions: [1, 2, 3, 4, 5],
      reviews: [],
      price: 1.49
    },
    {
      id: 5,
      name: "Sugar",
      imageUrl: "images/grocery/sugar.jpg",
      quantityOptions: [1, 2, 3, 4, 5],
      reviews: [],
      price: 2.49
    },
    {
      id: 6,
      name: "Flour",
      imageUrl: "images/grocery/flour.jpg",
      quantityOptions: [1, 2, 3, 4, 5],
      reviews: [],
      price: 1.99
    },
    {
      id: 7,
      name: "Bread",
      imageUrl: "images/grocery/bread.jpg",
      quantityOptions: [1, 2, 3, 4, 5],
      reviews: [],
      price: 1.29
    },
    {
      id: 8,
      name: "Milk",
      imageUrl: "images/grocery/milk.jpg",
      quantityOptions: [1, 2, 3, 4, 5],
      reviews: [],
      price: 2.99
    }
  ]
// Function to populate grocery products
function populateGroceryProducts() {
  const productsSection = document.getElementById("grocery-products");
  const productsHtml = groceries.slice(currentIndex, currentIndex + productsPerPage).map((product) => {
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
  populateGroceryProducts();

  // Add event listener to load more button
  const loadMoreGroceryBtn = document.createElement("button");
  loadMoreGroceryBtn.id = "load-more-grocery-btn";
  loadMoreGroceryBtn.textContent = "Load More";
  loadMoreGroceryBtn.onclick = loadMoreGroceryProducts;
  document.getElementById("grocery-products").appendChild(loadMoreGroceryBtn);
});

// Function to handle "Load More" button click
function loadMoreGroceryProducts() {
  currentIndex += productsPerPage;
  populateGroceryProducts();
  if (currentIndex >= groceries.length) {
    document.getElementById("load-more-grocery-btn").style.display = "none";
  }
}
