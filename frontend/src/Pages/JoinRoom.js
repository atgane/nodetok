import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Titlebar from '../Components/Titlebar';
import { TextField, Button, Typography } from '@mui/material';

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
    fetch(process.env.REACT_APP_BACKEND_IP + `/user/${userID}/rooms/${roomName}`, options)
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
        <br />
        <Typography variant="h4" color="initial">user: {userID}</Typography>
        <TextField variant="outlined" label="ROOM NAME" size="small" onChange={e => setRoomName(e.target.value)} />
        <Button onClick={joinRoom}>create room</Button>
      </>
    )
  else return (<>{navigate('/404')}</>)
}

export default JoinRoom