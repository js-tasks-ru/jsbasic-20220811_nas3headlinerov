function factorial(n) {
  if (n < 0) {
    console.log('n должно быть натуральным числом!');
  } else if (n == 0 || n == 1) {        
    return 1;
  } else {
    let result = 1;
    for (let i = 2; i < n + 1; i++) {
      result = result * i;            
    }        
    return result;
  }
}
