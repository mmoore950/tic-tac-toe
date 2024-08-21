const Board = (function() {
    const board = document.getElementById("board")
    let turn;
    let boardArray;

    function renderBoard() {
        turn = 0
        board.innerHTML = ''
        boardArray = Array(9).fill(null)
        for (let i = 0; i < 9; i++) {
            const square = document.createElement("div")
            square.classList.add("square")
            square.index = i
            square.addEventListener('click', () => move(square))
            board.appendChild(square)
        }
    }

    function move(square) {
        const index = square.index
        if (boardArray[index]) {
            return
        } else {
            const currMarker = turn % 2 ? 'o' : 'x'
            boardArray[index] = currMarker
            square.textContent = currMarker
            turn++
            Game.checkWin()
        }
    }

    return {move, renderBoard}
})()

const Game = (function() {

    function checkWin() {
        const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
        ]
        winConditions.forEach((triple) => {
            const [a, b, c] = triple
            if (boardArray[a] == boardArray[b] && boardArray[a] == boardArray[c] && boardArray[a]) {
                gameOver(boardArray[a])
                renderBoard()
            }
        })
    }

    function gameOver(marker) {

    }
})();

function createPlayer() {
    return 
}



Board.renderBoard()

