function ucFirst(str) {
  if (str.length == 0) {
    str = '';
    return str;
  } else {
    let first = str[0].toUpperCase();
    let second = str.slice(1, str.length);
    str = first + second;
    return str;
  }
}
