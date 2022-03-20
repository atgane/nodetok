import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Titlebar from '../Components/Titlebar';
import { TextField, Button, Typography } from '@mui/material';

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
    fetch(`http://192.168.219.116:8080/user/${userID}/rooms`, options)
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
        <Titlebar />
        <br />
        <Typography variant="h4" color="initial">user: {userID}</Typography>
        <TextField id="outlined" label="ROOM NAME" size="small" onChange={e => setRoomName(e.target.value)} />
        <Button onClick={createRoom}>create room</Button>
      </>
    )
  else return (<>{navigate('/404')}</>)
}

export default CreateRoom