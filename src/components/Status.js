import React from 'react'

export default function Status({ playerIsX, winner, draw }) {
    if (winner) {
        return <div className='status'>
            <small>Winner is {winner}!</small>
        </div>
    }
    if (draw) {
        return <div className='status'>
            <small>It's a draw!</small>
        </div>
    }
    return (
        <div className='status'>
            <small>{`Next player: ${playerIsX ? 'X' : 'O'}`}</small>
        </div>
    )
}
