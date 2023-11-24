const rows = 16// defines initial rows 
const columns = 16 // defines initial columns 
const container = document.getElementById('gridContainer');//looks for grid id 

function createGrid(rows, columns) {
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

}

function addHovered() {
    
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

}
//creates initial grid 
createGrid(rows,columns);
addHovered();

function resetGrid() {
    const container = document.getElementById('gridContainer');
    container.innerHTML = ''; // Clear the existing grid

    const rows = 16;
    const columns = 16;

   createGrid(rows,columns);
   addHovered();

        
    if (document.querySelector('.gridContainerSizeTwo') || document.querySelector('.gridContainerSizeThree')) {
           gridContainer.classList.remove('gridContainerSizeTwo', 'gridContainerSizeThree')
        
           
    };
}

const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', resetGrid)

function bigGrid() {
    const container = document.getElementById('gridContainer');
    container.innerHTML = ''; // Clear the existing grid

    const rows = 32;
    const columns = 32;

    createGrid(rows, columns);
    addHovered();
        
    if ( document.querySelector('.gridContainerSizeThree')) {
        gridContainer.classList.remove('gridContainerSizeThree')
        
 };

}

const sizeButtonOne = document.getElementById('sizeButtonOne');
sizeButtonOne.addEventListener('click', bigGrid);


sizeButtonOne.addEventListener('click', function () {
    
    const gridContainer = document.getElementById('gridContainer');
    gridContainer.classList.add('gridContainerSizeTwo');

});


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

   createGrid(rows,columns);
   addHovered();


}


const sizeButtonTwo = document.getElementById('sizeButtonTwo');
sizeButtonTwo.addEventListener('click', biggerGrid);

sizeButtonTwo.addEventListener('click', function () {
    
    const gridContainer = document.getElementById('gridContainer');
    gridContainer.classList.add('gridContainerSizeThree');

});


sizeButtonTwo.addEventListener('click', function () {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(function (cell) {
        cell.classList.add('cellSizeThree');
    });
});



