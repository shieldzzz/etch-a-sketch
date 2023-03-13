let container = document.createElement('div');
container.style.display = 'grid';
container.style.gridTemplateColumns = 'repeat(16, 0fr)';
container.style.gridTemplateRows = 'repeat(16, 0fr)';

for (var i = 0; i < 256; i++) {
    let square = document.createElement('div');
    square.style.width = '10px';
    square.style.height = '10px';
    square.style.backgroundColor = 'white';
    square.style.border = '1px solid black';
    container.appendChild(square);
}

document.body.appendChild(container);