function getMinMax(str) {
  let arr = str.split(' ')
  .map(item => +item)
  .filter(item => {
    if (!isNaN(item)) {
      return item;
    }
  });
  let result = {};  
  result.min = Math.min(...arr);
  result.max = Math.max(...arr);
  return result;
}
