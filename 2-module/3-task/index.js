let calculator = {
  read(a, b) {
    this.prop1 = a;
    this.prop2 = b;
  },
  sum() {
    return(this.prop1 + this.prop2);
  },
  mul() {
    return(this.prop1 * this.prop2);
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
