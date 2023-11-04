const rows = 16// make rows 
const columns = 16 // rows are made and then columns are 
const container = document.getElementById('gridContainer');//looks for grid id 

for ( let i = 0; i < rows; i++) { // fills 
    const row = document.createElement('div');
    row.classList.add('row');

    for (let j = 0; j < columns; j++) {
        const cell = document.createElement('div')
        cell.classList.add('cell');
        row.appendChild(cell);
    }

    container.appendChild(row);
}

const cells = document.querySelectorAll('.cell')

cells.forEach(function(cell) {
    console.log(cell);
    cell.addEventListener('mouseover', function(){
        if (!cell.classList.contains('hovered')) {
            cell.classList.add('hovered');
        }
          console.log('mouse over cell')  
    });
});

