function makeGrid(numSquare) { 
    let board = document.querySelector('.board');
    board.style.display = 'grid';
    board.style.gridTemplateColumns = `repeat(${numSquare}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${numSquare}, 1fr)`;

    for (let i = 0; i < (numSquare * numSquare); i++) {
        let square = document.createElement('div');
        square.style.backgroundColor = 'linen';
        square.style.width = 'auto';
        square.style.height = 'auto';
        square.style.boxShadow = '0 0 1px black';
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        });
        board.appendChild(square);
    }
    const clearBtn = document.getElementById('clearGrid');
    clearBtn.addEventListener('click', () => {
        let squares = document.querySelectorAll('.board div');
        squares.forEach((square) => {
            square.style.backgroundColor = 'linen';
        });
    }); 
}

makeGrid(32);