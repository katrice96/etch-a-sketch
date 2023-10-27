const container = document.getElementById('gridContainer');

const rows = 16
const columns = 16 

for ( let i = 0; i < rows; i++) {
    const row = document.createElement('div');
    row.classList.add('row');

    for (let j = 0; j < columns; j++) {
        const cell = document.createElement('div')
        cell.classList.add('cell');
        row.appendChild(cell);
    }

    container.appendChild
    (row)
}

