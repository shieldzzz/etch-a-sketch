const adjustBtn = document.getElementById('adjustSize');
const randomBtn = document.getElementById('randomColor');
const blackBtn = document.getElementById('blackButton');
const clearBtn = document.getElementById('clearGrid');
const shadeBtn = document.getElementById('shadeButton');

adjustBtn.addEventListener('click', () => {
    let newSize = prompt('Enter a whole number between 16 and 100.');
    let squares = document.querySelectorAll('.board div');
    squares.forEach((square) => {
        square.style.backgroundColor = '#f7f7f7';
    });
    if (newSize >= 16 && newSize <= 100 && Number.isInteger(Number(newSize))) {
        makeGrid(newSize);
    } else {
        alert('Please enter a valid number between 16 and 100');
    }
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

shadeBtn.addEventListener('click', () => {
    let squares = document.querySelectorAll('.board div');
    squares.forEach((square) => {
        let shadeCount = 0;
        square.addEventListener('mouseover', () => {
            if (shadeCount < 10) {
                shadeCount++;
                let opacity = 0.1 * shadeCount;
                square.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
            } else {
                square.style.backgroundColor = 'black';
            }
        });
    });
});

function makeGrid(numSquare = 16) { 
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

makeGrid();

