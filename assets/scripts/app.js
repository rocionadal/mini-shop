class Product {
  // title = 'DEFAULT';
  // imageUrl;
  // description;
  // price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

const productList = {
  products: [
    new Product(
      'A Pillow', 
      'https://images.unsplash.com/photo-1592789705501-f9ae4278a9c9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8cGlsbG93fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60', 
      'A soft pillow', 
      19.99
    ),
    new Product(
      'A Carpet',
      'https://cdn.shopify.com/s/files/1/1491/7484/products/KEN-1731-GRY_S_28ae44e1-85f6-4000-bb87-0f85193922c0.jpg?v=1552881158',
      'A carpet which you may like - or not',
      89.99
    )
  ],
  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
      <div> 
        <img src="${prod.imageUrl}" alt="${prod.title}">
        <div class="product-item__content">
          <h2>${prod.title}</h2>
          <h3>\$${prod.price}</h3>
          <p>${prod.description}</p>
          <button>Add to Cart</button>
        </div>
      </div>
      `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList); 
  }
};

productList.render();