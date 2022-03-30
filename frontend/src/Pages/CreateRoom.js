import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useUserInfo from '../hooks/useUserInfo';
import Titlebar from '../Components/Titlebar';
import { TextField, Button, Typography } from '@mui/material';


const CreateRoom = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({})
  const [roomName, setRoomName] = useState('')

  useUserInfo(setUserData);

  const createRoom = () => {
    console.log(roomName)
    const options = {
      method: 'POST',
      mode: 'cors',
      headers: new Headers({ 'content-type': 'application/json' }),
      body: JSON.stringify({ room: roomName })
    }
    fetch(process.env.REACT_APP_BACKEND_IP + `/user/${userData.ID}/rooms`, options)
      .then(res => res.text())
      .then(text => {
        if (text === 'existing room') alert('room existed');
        else {
          navigate('/oauth_main');
        }
      })
  };

  return (
    <>
      <Titlebar />
      <br />
      <Typography variant="h4" color="initial">user: {userData.ID}</Typography>
      <TextField variant="outlined" label="ROOM NAME" size="small" onChange={e => setRoomName(e.target.value)} />
      <Button onClick={createRoom}>create room</Button>
    </>
  )
}

export default CreateRoom