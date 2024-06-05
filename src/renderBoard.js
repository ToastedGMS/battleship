const wrapper = document.querySelector('.wrapper')

function createGrid(board) {
    let counter = 1

    const container = document.createElement('div');
    container.className = 'grid-container';

    const rows = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

    rows.forEach(row => {
        board[row].forEach(cell => {

            const cellElement = document.createElement('div');
            cellElement.className = 'grid-item';
            
            cellElement.setAttribute('coordinate',`${row}${counter}`)
            counter++
            if (counter > 10){ counter = 1}

            if ( !isNaN(cell) == false){
                cellElement.textContent = cell.class;
            } else {
                cellElement.textContent = cell;
            }

            container.appendChild(cellElement);
        });
    });

    wrapper.appendChild(container);
}

module.exports = createGrid