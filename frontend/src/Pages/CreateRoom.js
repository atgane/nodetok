import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const CreateRoom = () => {
  const Location = useLocation();
  const navigate = useNavigate();

  let userID = null;

  try { userID = Location.state.ID; }
  catch { }

  const [roomName, setRoomName] = useState('')

  const createRoom = () => {
    console.log(roomName)
    const options = {
      method: 'POST',
      mode: 'cors',
      headers: new Headers({ 'content-type': 'application/json' }),
      body: JSON.stringify({ room: roomName })
    }
    fetch(`/user/${userID}/rooms`, options)
      .then(res => res.text())
      .then(text => {
				if (text === 'existing room') alert('room existed');
				else {
          navigate('/main', { state: { ID: userID } });
        }
    })
  };

  if (userID)
    return (
      <>
        <h1>nodetok</h1>
        <h3>user: {userID}</h3>
        <input type='text' placeholder='ROOM NAME' onChange={e => { setRoomName(e.target.value) }}></input>
        <button onClick={createRoom}>create room</button>
      </>
    )
  else return (<>{navigate('/404')}</>)
}

export default CreateRoom