const randomBtn = document.getElementById('randomColor');
const blackBtn = document.getElementById('blackButton');
const clearBtn = document.getElementById('clearGrid');
const sizeRange = document.getElementById('myRange');
const sizeRangeValue = document.getElementById('rangeValue');
const colorPicker = document.getElementById('colorPicker');

colorPicker.addEventListener('click', (event) => {
    let squares = document.querySelectorAll('.board div');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = event.target.value;
        });
    });
});

sizeRangeValue.textContent = sizeRange.value;
sizeRange.addEventListener('input', () => {
    let newSize = sizeRange.value;
    sizeRangeValue.textContent = newSize;
    let squares = document.querySelectorAll('.board div');
    makeGrid(newSize);
    squares.forEach((square) => {
        square.style.backgroundColor = '#f7f7f7';
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        });
    });
});

randomBtn.addEventListener('click', () => {
    let squares = document.querySelectorAll('.board div');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        });
    });
});

blackBtn.addEventListener('click', () => {
    let squares = document.querySelectorAll('.board div');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        });
    });
});

clearBtn.addEventListener('click', () => {
    let squares = document.querySelectorAll('.board div');
    squares.forEach((square) => {
        square.style.backgroundColor = '#f7f7f7';
    });
});

function makeGrid(numSquare) { 
    let board = document.querySelector('.board');
    board.style.display = 'grid';
    board.style.gridTemplateColumns = `repeat(${numSquare}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${numSquare}, 1fr)`;

    for (let i = 0; i < (numSquare * numSquare); i++) {
        let square = document.createElement('div');
        square.style.backgroundColor = '#f7f7f7';
        square.style.width = 'auto';
        square.style.height = 'auto';
        square.style.boxShadow = '0 0 1px black';
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        });
        board.appendChild(square);
    }
}

makeGrid(16);