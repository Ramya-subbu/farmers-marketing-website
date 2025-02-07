const products = {
  fruits: [
    { id: 1, name: 'Apple', price: 1.99, imageUrl: 'images/apple.jpg', quantity: '1 kg' },
    { id: 2, name: 'Banana', price: 0.49, imageUrl: 'images/banana.jpg', quantity: '500g' },
    { id: 3, name: 'Orange', price: 1.29, imageUrl: 'images/orange.jpg', quantity: '2 kg' },
    { id: 4, name: 'Grapes', price: 2.99, imageUrl: 'images/grapes.jpg', quantity: '250g' },
    { id: 5, name: 'Mango', price: 3.99, imageUrl: 'images/mango.jpg', quantity: '1.5 kg' },
  ],
  // ...
};

function loadProducts(category) {
const productsContainer = document.getElementById('products-container');
const categoryProducts = products[category];

  if (categoryProducts.length> 0) {
productsContainer.innerHTML = '';
categoryProducts.forEach(product => {
const productHTML = `
<div class="product">
<img src="${product.imageUrl}" alt="${product.name}">
<h2>${product.name}</h2>
<p>Quantity: ${product.quantity}</p>
<p>Price: $${product.price}</p>
</div>
      `;
productsContainer.insertAdjacentHTML('beforeend', productHTML);
    });
productsContainer.style.display = 'block';
noProductsMessage.style.display = 'none';
  } else {
productsContainer.style.display = 'none';
noProductsMessage.style.display = 'block';
  }
}
// Add event listeners to the buttons
document.getElementById('fruits-btn').addEventListener('click', () => {
    loadProducts('fruits');
});
document.getElementById('vegetables-btn').addEventListener('click', () => {
    loadProducts('vegetables');
});
document.getElementById('grocery-btn').addEventListener('click', () => {
    loadProducts('grocery');
});
document.getElementById('artificial-plants-btn').addEventListener('click', () => {
    loadProducts('artificial-plants');
});

