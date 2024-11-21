import React from 'react'
import Square from './Square'

export default function Board({ board, onSquareClick }) {
    return (
        <div className='board'>
            {board.map((value, i) => (
                <Square key={i} value={value} onClick={() => onSquareClick(i)} />
            ))}
        </div>
    )
}