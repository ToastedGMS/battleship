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
        if (cell.getAttribute('isHit') === 'false'){
            cell.addEventListener('click', cell.fn = function fn(e) {

            //...and calls the event handler functions
            handleAttack(e)
            isCellHit(cell, arg, e)
        })}
    });
}

function handleAttack(val){
//sends attack to correct gameboard based on current round
    if (currentRound === 'Player 1') {
        player2.gameboard.receiveAttack(`${val.target.getAttribute('coordinate')}`);
    } else {
        player1.gameboard.receiveAttack(`${val.target.getAttribute('coordinate')}`);
    }
}

function isCellHit(val, val2, val3){
    if (val.getAttribute('isShip') == 'true'){
        val3.target.style.backgroundColor = 'rgb(9, 39, 65)'
        val.removeEventListener('click', val.fn) //makes sure that each cell can only be hit once
        val.setAttribute('isHit', 'true')
    } else {
        val3.target.style.backgroundColor = '#8a0606'
        removeListeners(val2)
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