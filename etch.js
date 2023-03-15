let board = document.querySelector('.board');
board.style.display = 'grid';
board.style.gridTemplateColumns = 'repeat(32, 1fr)';
board.style.gridTemplateRows = 'repeat(32, 1fr)';

for (let i = 0; i < 1024; i++) {
    let square = document.createElement('div');
    square.style.backgroundColor = 'white';
    square.style.width = 'auto';
    square.style.height = 'auto';
    square.style.border = '1px solid black';
    board.insertAdjacentElement('beforeend', square);
}





