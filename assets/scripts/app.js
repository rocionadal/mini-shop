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

class ShoppingCart {
  items = [];

  render() {
    const cartEl = document.createElement('section');
    cartEl.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order Now!</button>
      `;
      cartEl.className = 'cart';
      return cartEl;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    console.log('adding product to cart');
    console.log(this.product);
  }

  render() {
    const prodEl = document.createElement('li');
    prodEl.className = 'product-item';
    prodEl.innerHTML = `
    <div> 
      <img src="${this.product.imageUrl}" alt="${this.product.title}">
      <div class="product-item__content">
        <h2>${this.product.title}</h2>
        <h3>\$${this.product.price}</h3>
        <p>${this.product.description}</p>
        <button>Add to Cart</button>
      </div>
    </div>
    `;
  const addCartButton = prodEl.querySelector('button');
  addCartButton.addEventListener('click', this.addToCart.bind(this));
  return prodEl;
  }
}

class ProductList {
  products = [
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
  ];

  constructor() {}

  render() {
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    return prodList;
  }
}

class Shop {
  render() {
    const renderHook = document.getElementById('app');

    const cart = new ShoppingCart();
    const cartEl = cart.render();
    const productList = new ProductList();
    const prodListEl = productList.render();

    renderHook.append(cartEl);
    renderHook.append(prodListEl);
  }
}

const shop = new Shop();
shop.render();
