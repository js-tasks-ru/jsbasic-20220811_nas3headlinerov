function makeDiagonalRed(table) {
  let rows = table.rows;
  for (let row of rows) {
    let cells = row.cells;
    for (let cell of cells) {
      if (row.rowIndex == cell.cellIndex) {
        cell.style.backgroundColor = 'red';
      }
    }
  }
}
