function initCarousel() {
  const arrowRight = document.querySelector('.carousel__arrow_right');
  const arrowLeft = document.querySelector('.carousel__arrow_left');
  const inner = document.querySelector('.carousel__inner');
  let counter = 1;

  function checkCounter() {
    if (counter == 4) {
      arrowRight.style.display = 'none';
    } else if (counter == 1) {
      arrowLeft.style.display = 'none';
    } else if (counter > 1 && counter < 4) {
      arrowRight.style.display = '';
      arrowLeft.style.display = '';
    }
  }
  checkCounter();

  arrowRight.addEventListener('click', () => { 
    counter = ++counter;
    inner.style.transform = `translateX(-${inner.offsetWidth * (counter - 1)}px)`;
    checkCounter();
  });

  arrowLeft.addEventListener('click', () => {  
    counter = --counter;  
    inner.style.transform = `translateX(-${inner.offsetWidth * (counter - 1)}px)`;
    checkCounter();
  });  
}
