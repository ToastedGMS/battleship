import { player1, player2 } from "."

let currentRound = 'Player 2' //keeps track of current round

function newRound(){ 
//function that actually starts game, checks who's round it is, and calls 
//corrresponding function
    if (currentRound === 'Player 2'){
        currentRound = 'Player 1'
        plr1AtkInstruction()
    } else {
        currentRound = 'Player 2'
        plr2AtkInstruction()
    }
}

//these two set the instruction text and attach event listeners to the corresponding player's gameboard
function plr1AtkInstruction(){
    const div = document.querySelector('#instructions')
    div.textContent = `${player1.name}, attack!`

    addBoardListeners('[source="Player 2"]')
}
function plr2AtkInstruction(){
    const div = document.querySelector('#instructions')
    div.textContent = `${player2.name}, attack!`

    addBoardListeners('[source="Player 1"]')
}

function addBoardListeners(arg){
//adds click event listeners to each cell in the provided gameboard...
    const cells = document.querySelectorAll(arg)

    Array.from(cells).forEach(cell => {
        cell.addEventListener('click', cell.fn = function fn(e) {
            //...and calls the event handler functions
            handleAttack()
            isCellHit()
        })
    });
}

function handleAttack(){
//sends attack to correct gameboard based on current round
    if (currentRound === 'Player 1') {
        player2.gameboard.receiveAttack(`${e.target.getAttribute('coordinate')}`);
    } else {
        player1.gameboard.receiveAttack(`${e.target.getAttribute('coordinate')}`);
    }
}

function isCellHit(){
//checks if cell contains a ship...
    if (!isNaN(cell.innerText)){
        //... if not, sets it as a miss and calls next function
        cell.innerText = 'miss'
        removeListeners(arg)
    } else {
        //... else, sets it as hit, and player's round continues
        cell.innerText = 'hit'
    }
}

function removeListeners(arg){
    //iterates through current gameboard removing it's click event listeners
    //and changes round
    const query = document.querySelectorAll(arg)

    Array.from(query).forEach(cell => {
        cell.removeEventListener('click', cell.fn)
    })
    newRound()
}

export {newRound}

