import React, { useState } from 'react'
import Board from './Board';

function Game({channel}) {
    const [playersJoined, setPlayersJoined] = useState(channel.state.watcher_count === 2);
    channel.on("user.watching.start", (event) => {
        setPlayersJoined(event.watcher_count === 2)
    });
if(!playersJoined) {
    return <div>Oczekiwanie na resztę graczy...</div>
}    
  return (
    <div className='gameContainer'><Board /></div>
  )
}

export default Game