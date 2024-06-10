/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module) => {

eval("class Gameboard{\n    constructor(){ \n        //arrays representing the 2d gameboard\n        //I understand this is not the most efficient way of doing this\n        //but it is what it is.\n        this.a = [1,2,3,4,5,6,7,8,9,10];\n        this.b = [1,2,3,4,5,6,7,8,9,10];\n        this.c = [1,2,3,4,5,6,7,8,9,10];\n        this.d = [1,2,3,4,5,6,7,8,9,10];\n        this.e = [1,2,3,4,5,6,7,8,9,10];\n        this.f = [1,2,3,4,5,6,7,8,9,10];\n        this.g = [1,2,3,4,5,6,7,8,9,10];\n        this.h = [1,2,3,4,5,6,7,8,9,10];\n        this.i = [1,2,3,4,5,6,7,8,9,10];\n        this.j = [1,2,3,4,5,6,7,8,9,10];\n        this.gameOver = 0\n        this.player = null;\n    }\n\n    placeShip(ship, coordinates = []){\n        //takes a ship object and places a reference to it in given coordinates\n        //it's expected that the number of coordinates matches the total length of the given ship\n        coordinates.forEach((element) => {\n            let char1 = element.charAt(0)\n            let char2 = element.charAt(1)\n\n            this[char1][char2] = ship\n        })\n    }\n\n    //if given coordinates match a ship, call it's 'hit' function.\n    //if not place 'miss' in those coordinates \n    receiveAttack(coordinates){\n        let char1 = coordinates.charAt(0)\n        let char2 = coordinates.charAt(1)\n\n        if (isNaN(this[char1][char2])){\n            this[char1][char2].hit()\n            this.gameOver+= 1\n            this.allShipsSunk()\n        } \n        else { \n            this[char1][char2] = 'miss'\n        }\n    }\n\n    //alerts game over if all ships are sunk\n    allShipsSunk(){\n        if (this.gameOver === 17){\n            alert('Gameover')\n            return 'Gameover'\n        }\n    }\n\n    //allows the gameboard to know what player it was created from\n    setPlayer(player) {\n        this.player = player;\n    }\n}\n\nmodule.exports = Gameboard\n\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   player1: () => (/* binding */ player1),\n/* harmony export */   player2: () => (/* binding */ player2)\n/* harmony export */ });\nconst Player = __webpack_require__(/*! ./player */ \"./src/player.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\nconst createGrid = __webpack_require__(/*! ./renderBoard */ \"./src/renderBoard.js\");\nconst { newRound } = __webpack_require__(/*! ./manageDom */ \"./src/manageDom.js\");\n\n// temporary hardcoded ship coordinates\nconst player1 = new Player('Player 1')\nplayer1.gameboard.placeShip(new Ship(1),['a0', 'b0', 'c0', 'd0', 'e0'])\nplayer1.gameboard.placeShip(new Ship(2),['f8', 'g8', 'h8', 'i8'])\nplayer1.gameboard.placeShip(new Ship(3),['g3', 'g4', 'g5'])\nplayer1.gameboard.placeShip(new Ship(4),['a7', 'a8', 'a9'])\nplayer1.gameboard.placeShip(new Ship(5),['j1', 'j2'])\n\nconst player2 = new Player('Player 2')\nplayer2.gameboard.placeShip(new Ship(1),['a1', 'b1', 'c1', 'd1', 'e1'])\nplayer2.gameboard.placeShip(new Ship(2),['f8', 'g8', 'h8', 'i8'])\nplayer2.gameboard.placeShip(new Ship(3),['g3', 'g4', 'g5'])\nplayer2.gameboard.placeShip(new Ship(4),['a7', 'a8', 'a9'])\nplayer2.gameboard.placeShip(new Ship(5),['j1', 'j2'])\n\n// select and add event listener to button that creates gameboards\nconst masterbtn = document.querySelector('#masterbtn')\n\nmasterbtn.addEventListener('click', masterbtn.fn = function fn(){\n    createGrid(player1.gameboard), createGrid(player2.gameboard) //render the boards\n    masterbtn.removeEventListener('click', masterbtn.fn)\n    newRound() // start game\n})\n\n\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/manageDom.js":
/*!**************************!*\
  !*** ./src/manageDom.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   newRound: () => (/* binding */ newRound)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n\n\nlet currentRound = 'Player 2' //keeps track of current round\n\nfunction newRound(){ \n//function that actually starts game, checks who's round it is, and calls \n//corrresponding function\n    if (currentRound === 'Player 2'){\n        currentRound = 'Player 1'\n        plr1AtkInstruction()\n    } else {\n        currentRound = 'Player 2'\n        plr2AtkInstruction()\n    }\n}\n\n//these two set the instruction text and attach event listeners to the corresponding player's gameboard\nfunction plr1AtkInstruction(){\n    const div = document.querySelector('#instructions')\n    div.textContent = `${___WEBPACK_IMPORTED_MODULE_0__.player1.name}, attack!`\n\n    addBoardListeners('[source=\"Player 2\"]')\n}\nfunction plr2AtkInstruction(){\n    const div = document.querySelector('#instructions')\n    div.textContent = `${___WEBPACK_IMPORTED_MODULE_0__.player2.name}, attack!`\n\n    addBoardListeners('[source=\"Player 1\"]')\n}\n\nfunction addBoardListeners(arg){\n//adds click event listeners to each cell in the provided gameboard...\n    const cells = document.querySelectorAll(arg)\n\n    Array.from(cells).forEach(cell => {\n        if (cell.getAttribute('isHit') === 'false'){\n            cell.addEventListener('click', cell.fn = function fn(e) {\n\n            //...and calls the event handler functions\n            handleAttack(e)\n            isCellHit(cell, arg, e)\n        })}\n    });\n}\n\nfunction handleAttack(val){\n//sends attack to correct gameboard based on current round\n    if (currentRound === 'Player 1') {\n        ___WEBPACK_IMPORTED_MODULE_0__.player2.gameboard.receiveAttack(`${val.target.getAttribute('coordinate')}`);\n    } else {\n        ___WEBPACK_IMPORTED_MODULE_0__.player1.gameboard.receiveAttack(`${val.target.getAttribute('coordinate')}`);\n    }\n}\n\nfunction isCellHit(val, val2, val3){\n    if (val.getAttribute('isShip') == 'true'){\n        val3.target.style.backgroundColor = 'rgb(9, 39, 65)'\n        val.removeEventListener('click', val.fn) //makes sure that each cell can only be hit once\n        val.setAttribute('isHit', 'true')\n    } else {\n        val3.target.style.backgroundColor = '#8a0606'\n        removeListeners(val2)\n    }\n}\n\nfunction removeListeners(arg){\n    //iterates through current gameboard removing it's click event listeners\n    //and changes round\n    const query = document.querySelectorAll(arg)\n\n    Array.from(query).forEach(cell => {\n        cell.removeEventListener('click', cell.fn)\n    })\n    newRound()\n}\n\n\n\n//# sourceURL=webpack://battleship/./src/manageDom.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Gameboard = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\nclass Player{\n    constructor(name){\n        this.gameboard = new Gameboard\n        this.name = name || 'Player 1'\n        this.gameboard.setPlayer(this);\n    }\n}\n\nmodule.exports = Player\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/renderBoard.js":
/*!****************************!*\
  !*** ./src/renderBoard.js ***!
  \****************************/
/***/ ((module) => {

eval("const wrapper = document.querySelector('.wrapper')\n\nfunction createGrid(board) {\n// iterartes through gameboard's coordinate arrays and creates small cell divs for each one\n    const container = document.createElement('div');\n    container.className = 'grid-container';\n\n    const rows = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];\n\n    rows.forEach(row => {\n        board[row].forEach((cell, index) => {\n//for each cell in each row, create adiv\n            const cellElement = document.createElement('div');\n            cellElement.className = 'grid-item';\n            // set it's coordinate and the board it came from as attributes\n            cellElement.setAttribute('coordinate',`${row}${index}`)\n            cellElement.setAttribute('source', board.player.name)\n            cellElement.setAttribute('isHit', 'false')\n\n            //sets it's inner text to it's ship type if it is one\n            if ( !isNaN(cell) == false){\n                cellElement.setAttribute('isShip', 'true');\n            } else {\n                cellElement.setAttribute('isShip', 'false'); \n            }\n\n            container.appendChild(cellElement);\n        });\n    });\n\n    wrapper.appendChild(container);\n}\n\nmodule.exports = createGrid\n\n//# sourceURL=webpack://battleship/./src/renderBoard.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {

eval("class Ship{\n    constructor(type){\n        this.length = this.shipLength(type)\n        this.class = this.shipClass(type)\n        this.hits = 0\n        this.sunk = false\n    }\n\n    // determine length of ship based on it's type\n    shipLength(type){\n        if (type === 1){\n            return this.length = 5\n        } else if (type === 2){\n            return this.length = 4   \n        } else if (type === 3){\n            return this.length = 3\n        } else if (type === 4){\n            return this.length = 3\n        } else if (type === 5){\n            return this.length = 2\n        }\n    }\n\n    // determine class of ship based on it's type\n    shipClass(type){\n        if (type === 1){\n            return this.class = 'Carrier';\n        } else if (type === 2){   \n            return this.class = 'Battleship';\n        } else if (type === 3){\n            return this.class = 'Cruiser';\n        } else if (type === 4){\n            return this.class = 'Submarine';\n        } else if (type === 5){\n            return this.class = 'Destroyer';\n        }\n    }\n\n    // increases the number of ‘hits’ in your ship.\n    hit(){\n        this.hits+=1\n        this.isSunk()\n    }\n\n    // calculates whether a ship is considered sunk based on its length and the number of hits it has received.\n\n    isSunk(){\n        if (this.hits >= this.length){\n            this.sunk = true\n        }\n    }\n\n}\n\nmodule.exports = Ship\n\n\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;