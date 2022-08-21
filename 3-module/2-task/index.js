function filterRange(arr, a, b) {
  let result = arr.filter(function(name) {
    if ((name >= a && name <= b) || (name <= a && name >= b)) {
      return name;
    }
  });
  return result; 
}
