const gridContainer = document.querySelector('.grid-container');
const btnChangeSize = document.querySelector('.btn-size');
const btnResetGrid = document.querySelector('.btn-reset');
let gridDimension = 16; //default grid size

const resetGrid = () => {
    gridContainer.innerHTML = "";
    insertGridPixels(gridDimension);
    addGridPixelListeners();
}

const createGrid = gridDimension => {
    resetGrid();
    gridContainer.style.gridTemplateColumns = `repeat(${gridDimension}, auto)`;
};

const changeGridSize = () => {
    gridDimension = window.prompt('Enter the size of the grid (1-64)');
    createGrid(gridDimension);
};

const insertGridPixels = (gridDimension) => {
    let gridElement;
    for (let i = 0; i < gridDimension * gridDimension; i++) {
        gridElement = document.createElement('div');
        gridContainer.appendChild(gridElement);
        gridElement.classList.add('grid-element');
    }
}

const addGridPixelListeners = () => {
    const gridElements = document.querySelectorAll('.grid-element');
    for(const gridElement of gridElements) {
        gridElement.addEventListener('mouseover', () => {
            gridElement.style.backgroundColor = 'black';
        });
    }
};

createGrid(gridDimension);

btnChangeSize.addEventListener('click', changeGridSize);
btnResetGrid.addEventListener('click', resetGrid);
