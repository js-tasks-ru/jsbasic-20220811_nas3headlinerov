import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.render();
    this.selector();
    this.change();
    this.changeSlidePosition();
    
  }
  render() {
    this.elem = createElement(`
      <div class="slider">
        <div class="slider__thumb">
          <span class="slider__value">${this.value}</span>
        </div>      
        <div class="slider__progress"></div>
        <div class="slider__steps"></div>
      </div>
    `);
    let stepsWrapper = this.selector('.slider__steps');
    for (let i = 0; i < this.steps; i++) {
      stepsWrapper.insertAdjacentHTML('beforeEnd', '<span></span>');      
    }
    stepsWrapper.firstChild.classList.add('slider__step-active');
  }
  selector(selector) {
    return this.elem.querySelector(`${selector}`);
  }
  change() {       
    this.elem.addEventListener('click', event => {        
      this.changeValue(event);
      this.sliderStepActive();
      this.changeSlidePosition();
      this.changeSlider();
      
    });
  }
  changeValue() {
    let slider = getComputedStyle(this.elem);
    let sliderWidth = (slider.width).slice(0, (slider.width).length - 2);
    let target = this.elem.getBoundingClientRect();
    let valueX = event.clientX - target.left;
    let valuePercent = (valueX / sliderWidth * 100).toFixed(0);
    let interval = 100 / (this.steps - 1);
    let sliderValue = this.selector('.slider__value');
    for (let step = 0; step < this.steps; step++) {
      if (valuePercent < (interval * (2 * step + 1) / 2) && valuePercent >= (interval * (2 * (step - 1) + 1) / 2)) {
        this.value = step;
        sliderValue.innerText = step;
      }   
    }
    return sliderValue;
  }
  sliderStepActive() {
    let stepActive = this.selector('.slider__step-active');    
    let spans = this.selector('.slider__steps').querySelectorAll('span');
    stepActive.classList.remove('slider__step-active');
    for (let i = 0; i < this.steps; i++) {
      if (this.changeValue().innerText == i) {
        spans[i].classList.add('slider__step-active');
      }
    }
  }
  changeSlidePosition() {    
    let thumb = this.selector('.slider__thumb');
    let progress = this.selector('.slider__progress');
    let sliderValue = this.selector('.slider__value');
    let leftPercents = sliderValue.innerText * (100 / (this.steps - 1));
    thumb.style.left = `${leftPercents}%`;
    progress.style.width = `${leftPercents}%`;
  }
  changeSlider() {
    let myEvent = new CustomEvent("slider-change", {
      detail: this.value, 
      bubbles: true
    });
    this.elem.dispatchEvent(myEvent);
  }
}
