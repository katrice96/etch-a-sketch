const rows = 16// defines rows 
const columns = 16 // defines columns 
const container = document.getElementById('gridContainer');//looks for grid id 

for ( let i = 0; i < rows; i++) { //loops for the amount of rows 
    const row = document.createElement('div');// creates a div for each row 
    row.classList.add('row'); // adds .row class to rows 

    for (let j = 0; j < columns; j++) { // nested loop that will loop for the amount of columns x times based on amount of rows 
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

