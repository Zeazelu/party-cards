import React, { useState } from 'react'
import {useChatContext, Channel} from 'stream-chat-react'
import Game from './Game';


function JoinGame() {
  const [rivalUsername, setRivalUsername] = useState("");
  const {client} = useChatContext();
  const [channel, setChannel] = useState(null);
  const createChannel = async () => {
    const response = await client.queryUsers({name: { $eq: rivalUsername }});
    if(response.users.length === 0) {
      alert("User not found");
      return
    }
    const newChannel = await client.channel("messaging", {
      members: [client.userID, response.users[0].id],
    });
    await newChannel.watch();
    setChannel(newChannel);
  }
  return (
    <>
    {channel ? (
    <Channel channel={channel}>
      <Game channel={channel}></Game>
    </Channel>
    ) : (
    <div className='joinGame'>
      <h4>Stwórz grę</h4>
      <input 
        placeholder='Username of rival...' 
        onChange={(event) => {
          setRivalUsername(event.target.value);
        }} />
        <button onClick={createChannel}>Dołącz/Rozpocznij grę</button>
    </div>
    )}
    </>
  )
}

export default JoinGame