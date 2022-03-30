import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Titlebar from '../Components/Titlebar';
import { TextField, Button, Typography } from '@mui/material';
import useUserInfo from '../hooks/useUserInfo';

const JoinRoom = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({})
  const [roomName, setRoomName] = useState('')

  useUserInfo(setUserData);

  const joinRoom = () => {
    console.log(roomName)
    const options = {
      method: 'POST',
      mode: 'cors',
      headers: new Headers({ 'content-type': 'application/json' })
    }
    fetch(process.env.REACT_APP_BACKEND_IP + `/user/${userData.ID}/rooms/${roomName}`, options)
      .then(res => res.text())
      .then(text => {
        if (text === 'not existing room') alert('room not existed');
        else if (text === 'already existing room') alert('already existed');
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
      <Button onClick={joinRoom}>join room</Button>
    </>
  )
}

export default JoinRoom