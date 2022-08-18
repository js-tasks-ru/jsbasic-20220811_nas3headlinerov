function sumSalary(salaries) {
  let sum = 0;
  for (let key in salaries) {
    if (!isFinite(salaries[key])) {
      continue;
    } else if (typeof(salaries[key]) == 'number') {
      sum = sum + salaries[key];
    }      
  }
  return sum;
}
