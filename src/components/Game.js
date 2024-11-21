import React, { useState } from 'react'
import Status from './Status'
import Board from './Board'

export default function Game() {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [playerIsX, setPlayerIsX] = useState(true)
    const [winner, setWinner] = useState(null)
    const [draw, setDraw] = useState(false)
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 4, 8], [2, 4, 6],
        [0, 3, 6], [1, 4, 7], [2, 5, 8]
    ]

    const checkWinner = (board) => {
        for (let combination of winningCombinations) {
            const [a, b, c] = combination
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a]
            }
        }
        return null
    }

    const handleSquareClick = (index) => {
        if (board[index] || winner || draw) return
        const newBoard = [...board]
        newBoard[index] = playerIsX ? 'X' : 'O'
        setBoard(newBoard)
        const gameWinner = checkWinner(newBoard)
        if (gameWinner) {
            setWinner(gameWinner)
        }
        else if (!newBoard.includes(null) && !winner) {
            setDraw(true)
        }
        else {
            setPlayerIsX(!playerIsX)
        }
    }

    const resetGame = () => {
        setBoard(Array(9).fill(null))
        setPlayerIsX(true)
        setWinner(null)
        setDraw(false)
    }

    return (
        <div className='game'>
            <h1>Tic Tac Toe</h1>
            <Status playerIsX={playerIsX} winner={winner} draw={draw} />
            <Board board={board} onSquareClick={handleSquareClick} />
            {winner && <p>Congratulations {winner}!</p>}
            {(winner || draw) && <button className='reset-btn' onClick={resetGame}>Reset Game</button>}
        </div>
    )
}
