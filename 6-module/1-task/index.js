/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {  
  constructor(rows) {    
    this.rows = rows;
    this.render();
    this.removeRow();
  }
  render() {
    this.elem = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    let row = document.createElement('tr'); 
    let cell;
    this.elem.append(thead);
    this.elem.append(tbody);
    thead.append(row);

    for (let i = 0; i < 5; i++) {
      cell = document.createElement('th');
      row.append(cell);
      if (i == 0) {
        cell.innerHTML = 'Имя';
      } else if (i == 1) {
        cell.innerHTML = 'Возраст';
      } else if (i == 2) {
        cell.innerHTML = 'Зарплата';
      } else if (i == 3) {
        cell.innerHTML = 'Город';
      } else {
        cell.innerHTML = '';
      }
    }
    this.rows.forEach((item) => {
      row = document.createElement('tr');
      tbody.append(row);
      for (let i = 0; i < 5; i++) {
        cell = document.createElement('td');
        row.append(cell);
        if (i == 0) {
          cell.innerHTML = item.name;
        } else if (i == 1) {
          cell.innerHTML = item.age;
        } else if (i == 2) {
          cell.innerHTML = item.salary;
        } else if (i == 3) {
          cell.innerHTML = item.city;
        } else {
          cell.innerHTML = '<button>X</button>';
        }
      }
    });
  }
  removeRow() {
    let buttons = this.elem.querySelectorAll("button");
    for (let button of buttons) {
      button.addEventListener('click', (event) => {
        event.target.closest("tr").remove();
      });
    }
  }
}