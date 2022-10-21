import React from 'react'

function Square({chooseSquare, val}) {
  return (
    <div className='square' onClick={chooseSquare}>
        <img src={back.png}></img>
    </div>
  )
}

export default Square