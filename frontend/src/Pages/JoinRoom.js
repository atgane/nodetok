import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Titlebar from '../Components/Titlebar';

const JoinRoom = () => {
  const Location = useLocation();
  const navigate = useNavigate();

  let userID = null;

  try { userID = Location.state.ID; }
  catch { }

  const [roomName, setRoomName] = useState('')

  const joinRoom = () => {
    console.log(roomName)
    const options = {
      method: 'POST',
      mode: 'cors',
      headers: new Headers({ 'content-type': 'application/json' })
    }
    fetch(`http://192.168.219.116:8080/user/${userID}/rooms/${roomName}`, options)
      .then(res => res.text())
      .then(text => {
        if (text === 'not existing room') alert('room not existed');
        else if (text === 'already existing room') alert('already existed');
        else {
          navigate('/main', { state: { ID: userID } });
        }
      })
  };

  if (userID)
    return (
      <>
        <Titlebar />
        <h3>user: {userID}</h3>
        <input type='text' placeholder='ROOM NAME' onChange={e => { setRoomName(e.target.value) }}></input>
        <button onClick={joinRoom}>join room</button>
      </>
    )
  else return (<>{navigate('/404')}</>)
}

export default JoinRoom