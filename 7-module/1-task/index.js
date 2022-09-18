import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.render();
    this.selector();
    this.slideShift();
  }
  render() {
    this.elem = createElement(`
      <div class="ribbon">
        <button class="ribbon__arrow ribbon__arrow_left">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </button>
        <nav class="ribbon__inner">          
        </nav>
        <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </button>
      </div>
    `);
    let categories = this.categories.map(item => createElement(`
      <a href="#" class="ribbon__item" data-id="${item.id}">${item.name}</a>
    `))
    .forEach(item => this.selector('.ribbon__inner').append(item));
  }   
  selector(selector) {
    return this.elem.querySelector(`${selector}`);    
  }
  slideShift() {
    const arrowRight = this.selector('.ribbon__arrow_right');
    const arrowLeft = this.selector('.ribbon__arrow_left');
    const inner = this.selector('.ribbon__inner');
    let scrollLeft = inner.scrollLeft;
    let scrollWidth = inner.scrollWidth;
    let clientWidth = inner.clientWidth;
    let scrollRight = scrollWidth - scrollLeft - clientWidth;
    console.log(scrollLeft);
    
    arrowRight.addEventListener('click', () => { 
      // this.counter = ++this.counter;
      inner.scrollBy(350, 0);
      
      // this.checkCounter();
    });  
    arrowLeft.addEventListener('click', () => {  
      // this.counter = --this.counter;  
      inner.scrollBy(-350, 0);
      console.log(scrollLeft);
      // console.log(scrollLeft);
      // console.log(scrollRight);
      // console.log(scrollWidth);
      // console.log(clientWidth);
      // this.checkCounter();
    }); 
    inner.addEventListener('scroll', () => {
      console.log(scrollRight);
      console.log(scrollLeft);
      if (scrollLeft > 0) {
        
        
        
        arrowLeft.classList.add('ribbon__arrow_visible');
      } else {
        arrowLeft.classList.remove('ribbon__arrow_visible');
      }
      if (scrollRight < 1) {
        arrowRight.classList.remove('ribbon__arrow_visible');
      } else {
        arrowRight.classList.add('ribbon__arrow_visible');
      }
    });
    

    

    
  }
  
  
}


// export default [
//   {
//     id: '',
//     name: 'All'
//   },
//   {
//     id: 'salads',
//     name: 'Salads'
//   },
//   {
//     id: 'soups',
//     name: 'Soups'
//   },
//   {
//     id: 'chicken-dishes',
//     name: 'Chicken dishes'
//   },
//   {
//     id: 'beef-dishes',
//     name: 'Beef dishes'
//   },
//   {
//     id: 'seafood-dishes',
//     name: 'Seafood dishes'
//   },
//   {
//     id: 'vegetable-dishes',
//     name: 'Vegetable dishes'
//   },
//   {
//     id: 'bits-and-bites',
//     name: 'Bits and bites'
//   },
//   {
//     id: 'on-the-side',
//     name: 'On the side'
//   }
// ];