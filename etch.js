function makeGrid(numSquare) { 
    let board = document.querySelector('.board');
    board.style.display = 'grid';
    board.style.gridTemplateColumns = `repeat(${numSquare}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${numSquare}, 1fr)`;

    for (let i = 0; i < (numSquare * numSquare); i++) {
        let square = document.createElement('div');
        square.style.backgroundColor = 'white';
        square.style.width = 'auto';
        square.style.height = 'auto';
        square.style.border = '1px solid black';
        board.appendChild(square);
    }
}

makeGrid(16);




