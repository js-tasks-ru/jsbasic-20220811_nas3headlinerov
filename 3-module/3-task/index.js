function camelize(str) {
  str = str.split('-');
  for (let i = 0; i < str.length; i++) {      
    let result = str[i];
    if (i > 0) {
      let first = str[i][0].toUpperCase();  
      let second = str[i].slice(1, str[i].length);
      result = first + second;
    }
    str[i] = result;        
  }
  str = str.join('');
  return str;
}
