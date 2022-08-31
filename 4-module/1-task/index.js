function makeFriendsList(friends) {
  let result = friends.map(item => item.firstName + ' ' + item.lastName);
  
  document.body.innerHTML = '<ul></ul>';
  let list = document.querySelector('ul');  
  for (let name of result) {
    list.insertAdjacentHTML('beforeEnd', `<li>${name}</li>`);
  }
  return list;
}
