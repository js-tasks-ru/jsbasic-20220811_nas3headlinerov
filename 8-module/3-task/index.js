export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }

  addProduct(product) {
    if (!product) {
      return;
    }
    let cartItem = this.cartItems.find(item => item.product.id == product.id);

    if (!cartItem) {
      cartItem = {product: product, count: 1};
      this.cartItems.push(cartItem);
    } else {
      cartItem.count++;
    }   
    this.onProductUpdate(cartItem);    
  }
  
  updateProductCount(productId, amount) {
    let cartItem = this.cartItems.find(item => item.product.id == productId);
    if (cartItem) {
      cartItem.count += amount;
      if (cartItem.count == 0) {
        this.cartItems = this.cartItems.filter(item => item.product.id != productId);
      }
    }
    this.onProductUpdate(cartItem);
  }

  isEmpty() {
    if (this.cartItems.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  getTotalCount() {
    let counter = 0;
    for (let cartItem of this.cartItems) {
      counter += cartItem.count;
    }
    return counter;
  }

  getTotalPrice() {
    let totalPrice = 0;
    for (let cartItem of this.cartItems) {
      totalPrice += cartItem.product.price * cartItem.count;
    }
    return totalPrice;
  }

  onProductUpdate(cartItem) {
    // реализуем в следующей задаче
    this.cartIcon.update(this);
  }
}