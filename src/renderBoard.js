const wrapper = document.querySelector('.wrapper')

function createGrid(board) {
// iterartes through gameboard's coordinate arrays and creates small cell divs for each one
    const container = document.createElement('div');
    container.className = 'grid-container';

    const rows = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

    rows.forEach(row => {
        board[row].forEach((cell, index) => {
//for each cell in each row, create adiv
            const cellElement = document.createElement('div');
            cellElement.className = 'grid-item';
            // set it's coordinate and the board it came from as attributes
            cellElement.setAttribute('coordinate',`${row}${index}`)
            cellElement.setAttribute('source', board.player.name)
            cellElement.setAttribute('isHit', 'false')

            //sets it's inner text to it's ship type if it is one
            if ( !isNaN(cell) == false){
                cellElement.setAttribute('isShip', 'true');
            } else {
                cellElement.setAttribute('isShip', 'false'); 
            }

            container.appendChild(cellElement);
        });
    });

    wrapper.appendChild(container);
}

module.exports = createGrid