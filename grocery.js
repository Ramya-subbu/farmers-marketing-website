let currentIndex = 0;
const productsPerPage = 8;
const cart = [];

// Define an array of grocery product objects
const products = [
  {
    id: 1,
    name: "Rice",
    imageUrl: "images/groceries/rice.jpg",
    quantityOptions: [1, 2, 3, 4, 5],
    reviews: [],
    price: 50
  },
  {
    id: 2,
    name: "Wheat Flour",
    imageUrl: "images/groceries/wheat flour.jpeg",
    quantityOptions: [1, 2, 3, 4, 5],
    reviews: [],
    price: 40
  },
  {
    id: 3,
    name: "Sugar",
    imageUrl: "images/groceries/sugar.jpg",
    quantityOptions: [1, 2, 3, 4, 5],
    reviews: [],
    price: 30
  },
  {
    id: 4,
    name: "Tea",
    imageUrl: "images/groceries/tea.jpg",
    quantityOptions: [1, 2, 3, 4, 5],
    reviews: [],
    price: 20
  },
  {
    id: 5,
    name: "Coffee",
    imageUrl: "images/groceries/coffee.jpg",
    quantityOptions: [1, 2, 3, 4, 5],
    reviews: [],
    price: 25
  },
  {
    id: 6,
    name: "Bread",
    imageUrl: "images/groceries/bread.jpg",
    quantityOptions: [1, 2, 3, 4, 5],
    reviews: [],
    price: 35
  },
  {
    id: 7,
    name: "Milk",
    imageUrl: "images/groceries/milk.jpg",
    quantityOptions: [1, 2, 3, 4, 5],
    reviews: [],
    price: 45
  },
  {
    id: 8,
    name: "Eggs",
    imageUrl: "images/groceries/eggs.jpg",
    quantityOptions: [1, 2, 3, 4, 5],
    reviews: [],
    price: 50
  }
]


// Function to add product to cart
function addProductToCart(productId, quantity) {
    const product = products.find((product) => product.id == productId);
    const existingProductInCart = cart.find((cartProduct) => cartProduct.id == productId);
  
    if (existingProductInCart) {
      existingProductInCart.quantity += quantity;
    } else {
      cart.push({ id: productId, quantity, price: product.price });
    }
  
    updateCartTable();
  }
  
  // Function to update cart table
  function updateCartTable() {
    const cartTableRows = document.createElement("tr");
    cart.forEach((product) => {
      const cartTableRow = document.createElement("tr");
      cartTableRow.innerHTML = `
        <td>${product.name}</td>
        <td>${product.quantity}</td>
        <td>₹${product.price}</td>
        <td>₹${product.price * product.quantity}</td>
      `;
      cartTableRows.appendChild(cartTableRow);
    });
    const cartTable = document.getElementById("cart-table");
    cartTable.innerHTML = ""; // Clear the table
    cartTable.appendChild(cartTableRows);
  }
  // Function to populate grocery products
  function populateGroceryProducts() {
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
          <a href="cart.html" id="add-to-cart-btn" class="add-to-cart-btn" data-product-id="${product.id}">Add to cart</a>
          <a href="buy now.html" id="buy-now-btn" class="buy-now-btn" data-product-id="${product.id}">Buy now</a>
          </div>
        </div>
      `;
    }).join("");
    productsSection.innerHTML += productsHtml;
  
    // Add event listener to quantity select elements after they have been rendered
    document.querySelectorAll(".quantity-selector select").forEach((selectElement) => {
      selectElement.addEventListener("change", (event) => {
        const productId = event.target.dataset.productId;
        const selectedQuantity = parseInt(event.target.value);
        const product = products.find((product) => product.id == productId);
        const totalPrice = selectedQuantity * product.price;
        const priceElement = event.target.closest(".product-box").querySelector(".price");
        priceElement.innerHTML = `₹${totalPrice}`;
      });
    });
  }
  
  
    // Attach event listener to add to cart buttons after they have been rendered
    document.querySelectorAll(".add-to-cart-btn").forEach((button) => {
      button.addEventListener("click", (event) => {
        const productId = event.target.dataset.productId;
        const quantitySelect = event.target.closest(".product-box").querySelector("#quantity-select");
        const selectedQuantity = parseInt(quantitySelect.value);
        addProductToCart(productId, selectedQuantity);
      });
    });
  
  
  // Add event listener to rating stars
  document.querySelectorAll(".rating-stars .star").forEach((star) => {
    star.addEventListener("click", (event) => {
      const productId = event.target.parentNode.dataset.productId;
      const rating = parseInt(event.target.dataset.rating);
      const product = products.find((product) => product.id == productId);
      product.reviews.push({ rating });
      populateGroceryProducts();
    });
  });
  
  // Function to handle "Load More" button click
  function loadMoreProducts() {
    console.log("Load More button clicked");
    currentIndex += productsPerPage;
    console.log("currentIndex:", currentIndex);
    populateGroceryProducts();
    if (currentIndex >= products.length) {
      console.log("All products loaded");
      const loadMoreBtn = document.getElementById("load-more-btn");
      if (loadMoreBtn) {
        console.log("Hiding Load More button");
        loadMoreBtn.style.display = "none"; // Hide the button after all products are loaded
      }
    }
  }
  
  // Populate initial fruit products on page load
  document.addEventListener("DOMContentLoaded", () => {
    populateGroceryProducts();
    const loadMoreBtn = document.createElement("button");
    loadMoreBtn.id = "load-more-btn";
    loadMoreBtn.textContent = "Load More";
    loadMoreBtn.onclick = loadMoreProducts;
    document.getElementById("products").appendChild(loadMoreBtn);
  
    // Check if all products are loaded and hide the button
    if (products.length <= productsPerPage) {
      const loadMoreBtn = document.getElementById("load-more-btn");
      if (loadMoreBtn) {
        loadMoreBtn.style.display = "none";
      }
    }
  
    // Create cart page
    const cartPage = document.createElement("div");
    cartPage.id = "cart-page";
    document.body.appendChild(cartPage);
  
    // Create cart table
    const cartTable = document.createElement("table");
    cartTable.id = "cart-table";
    cartPage.appendChild(cartTable);
  
    // Add event listener to buy now button
    document.querySelectorAll(".buy-now-btn").forEach((button) => {
      button.addEventListener("click", () => {
        // Update cart table
        updateCartTable();
        // Show cart page
        document.getElementById("cart-page").style.display = "block";
      });
    });
  });
