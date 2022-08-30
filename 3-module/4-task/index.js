function showSalary(users, age) {
  let filter = users.filter((elem) => elem.age <= age);
  let result = [];
  for (let elem of users) {    
    result = filter.map(elem => `${elem.name}, ${elem.balance}`)
    .join('\n');
  }
  return result;
}
