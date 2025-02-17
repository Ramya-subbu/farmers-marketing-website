// Load products for each category
const categories = ['fruits', 'vegetables', 'grocery', 'artificial-plants'];

categories.forEach(category => {
  const productsContainer = document.getElementById(`${category}-products`);
  fetch(`products/${category}.json`)
    .then(response => response.json())
    .then(products => {
      products.forEach(product => {
        const productHTML = `
          <div class="product">
            <img src="${product.imageUrl}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>Price: $${product.price}</p>
            <p>Quantity: ${product.quantity}</p>
          </div>
        `;
        productsContainer.insertAdjacentHTML('beforeend', productHTML);
      });
    })
    .catch(error => console.error(error));
});
