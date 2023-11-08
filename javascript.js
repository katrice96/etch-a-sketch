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

function resetGrid() {
    const container = document.getElementById('gridContainer');
    container.innerHTML = ''; // Clear the existing grid

    const rows = 16;
    const columns = 16;

    for (let i = 0; i < rows; i++) {
        const row = document.createElement('div');
        row.classList.add('row');

        for (let j = 0; j < columns; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }

        container.appendChild(row);
    }

    const cells = document.querySelectorAll('.cell');

    cells.forEach(function(cell) {
        cell.addEventListener('mouseover', function() {
            if (!cell.classList.contains('hovered')) {
                cell.classList.add('hovered');
            }
        });
    });
}

const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', resetGrid)

function bigGrid() {
    const container = document.getElementById('gridContainer');
    container.innerHTML = ''; // Clear the existing grid

    const rows = 32;
    const columns = 32;

    for (let i = 0; i < rows; i++) {
        const row = document.createElement('div');
        row.classList.add('row');

        for (let j = 0; j < columns; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }

        container.appendChild(row);
    }

    const cells = document.querySelectorAll('.cell');

    cells.forEach(function(cell) {
        cell.addEventListener('mouseover', function() {
            if (!cell.classList.contains('hovered')) {
                cell.classList.add('hovered');
            }
        });
    });

}

const sizeButtonOne = document.getElementById('sizeButtonOne');
sizeButtonOne.addEventListener('click', bigGrid);


sizeButtonOne.addEventListener('click', function () {
    
    const gridContainer = document.getElementById('gridContainer');
    gridContainer.classList.add('gridContainerSizeTwo');

});

//WORKING AREA // WORKING AREA // 
sizeButtonOne.addEventListener('click', function () {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(function (cell) {
        cell.classList.add('cellSizeTwo');
    });
});

function biggerGrid() {
    const container = document.getElementById('gridContainer');
    container.innerHTML = ''; // Clear the existing grid

    const rows = 64;
    const columns = 64;

    for (let i = 0; i < rows; i++) {
        const row = document.createElement('div');
        row.classList.add('row');

        for (let j = 0; j < columns; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }

        container.appendChild(row);
    }

    const cells = document.querySelectorAll('.cell');

    cells.forEach(function(cell) {
        cell.addEventListener('mouseover', function() {
            if (!cell.classList.contains('hovered')) {
                cell.classList.add('hovered');
            }
        });
    });

}

const sizeButtonTwo = document.getElementById('sizeButtonTwo');
sizeButtonTwo.addEventListener('click', biggerGrid);

