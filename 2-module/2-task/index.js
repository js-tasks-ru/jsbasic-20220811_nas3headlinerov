function isEmpty(obj) {
  let result = true;
  for (let key in obj) {   
    if (typeof(key) === 'string' || typeof(key) === 'symbol') {
      result = false;      
      break;
    }
  }
  return result;
}
