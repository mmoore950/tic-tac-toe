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
            Game.checkWin(boardArray)
        }
        if (turn == 9) {
            const squareList = document.querySelectorAll('.square')
            squareList.forEach(square => square.classList.add('flicker'))
            const tieScore = document.querySelector('.tie')
            let scoreNum = parseInt(tieScore.textContent)
            scoreNum++
            tieScore.textContent = `${scoreNum}`
            setTimeout(() => Board.renderBoard(), 1500)
        }
    }

    return {boardArray, move, renderBoard}
})()

const Game = (function() {

    function checkWin(boardArray) {
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
                gameOver(triple)
            }
        })
    }

    function gameOver(indices) {
        const marker = document.querySelectorAll('.square')[indices[0]].textContent
        indices.forEach(index => {
            const square = document.querySelectorAll(".square")[index]
            square.classList.add('flicker')
        })
        let playerScore;
        if (marker == 'x') {
            playerScore = document.querySelector('.player1')
        } else {
            playerScore = document.querySelector('.player2')
        }
        let scoreNum = parseInt(playerScore.textContent)
        scoreNum++
        playerScore.textContent = `${scoreNum}`
        setTimeout(() => Board.renderBoard(), 1500)
    }

    return {checkWin}
})();

function createPlayer() {
    return 
}



Board.renderBoard()

