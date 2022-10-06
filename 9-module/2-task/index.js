import Carousel from '../../6-module/3-task/index.js';
import slides from '../../6-module/3-task/slides.js';

import RibbonMenu from '../../7-module/1-task/index.js';
import categories from '../../7-module/1-task/categories.js';

import StepSlider from '../../7-module/4-task/index.js';
import ProductsGrid from '../../8-module/2-task/index.js';

import CartIcon from '../../8-module/1-task/index.js';
import Cart from '../../8-module/4-task/index.js';

export default class Main {

  constructor() {    
  }

  async render() {
    this.carousel = new Carousel(slides);
    let carouselHolder = document.querySelector('[data-carousel-holder]');
    carouselHolder.append(this.carousel.elem);

    this.ribbonMenu = new RibbonMenu(categories);
    let ribbonHolder = document.querySelector('[data-ribbon-holder]');
    ribbonHolder.append(this.ribbonMenu.elem);

    this.stepSlider = new StepSlider({steps: 5, value: 3});
    let sliderHolder = document.querySelector('[data-slider-holder]');
    sliderHolder.append(this.stepSlider.elem);

    this.cartIcon = new CartIcon();
    let cartIconHolder = document.querySelector('[data-cart-icon-holder]');
    cartIconHolder.append(this.cartIcon.elem);
    
    this.cart = new Cart(this.cartIcon);
    
    let url = 'products.json';
    let response = await fetch(url);    
    this.products = await response.json();

    this.productsGrid = new ProductsGrid(this.products);
    let productsHolder = document.querySelector('[data-products-grid-holder]');
    productsHolder.innerHTML = '';
    productsHolder.append(this.productsGrid.elem);
    this.productsGrid.updateFilter({
      noNuts: document.getElementById('nuts-checkbox').checked,
      vegeterianOnly: document.getElementById('vegeterian-checkbox').checked,
      maxSpiciness: this.stepSlider.value,
      category: this.ribbonMenu.value
    });
    // addEventListeners
    document.body.addEventListener('product-add', ({detail: productId}) => {
      let findCart = this.products.find(product => product.id == productId);
      this.cart.addProduct(findCart);      
    });

    document.body.addEventListener('slider-change', ({detail: value}) => {     
      this.productsGrid.updateFilter({ maxSpiciness: value });
    });

    document.body.addEventListener('ribbon-select', ({detail: categoryId}) => {
      this.productsGrid.updateFilter({ category: categoryId });
    });

    let checkNoNuts = document.querySelector('#nuts-checkbox');
    checkNoNuts.addEventListener('change', event => {
      this.productsGrid.updateFilter({
        noNuts: event.target.checked
      });      
    });

    let checkVegeterianOnly = document.querySelector('#vegeterian-checkbox');
    checkVegeterianOnly.addEventListener('change', event => {
      this.productsGrid.updateFilter({
        vegeterianOnly: event.target.checked
      });
    });
  }  
}
