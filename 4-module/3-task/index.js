function highlight(table) {
  let rows = table.rows;
  for (let row of rows) {
    let cells = row.cells;
    for (let i = 0; i < cells.length; i++) {  
      if (cells[1].textContent < 18) {
        row.style.textDecoration = 'line-through';
      }

      if (cells[3].dataset.available === 'true') {
        row.classList.add('available');
      } else if (cells[3].dataset.available === 'false') {
        row.classList.add('unavailable');
      } else {
        row.hidden = true; 
      }

      if (cells[2].textContent === 'm') {
        row.classList.add('male');
      } else if (cells[2].textContent === 'f') {
        row.classList.add('female');
      }     
    }
  }
}
