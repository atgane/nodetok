import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Titlebar from '../Components/Titlebar';
import { Button, TextField } from '@mui/material';

const Signup = () => {
  const navigate = useNavigate();

  const [ID, setID] = useState('');
  const [password, setPassword] = useState('');

  const signIn = () => {
    const options = {
      method: 'POST',
      mode: 'cors',
      headers: new Headers({ 'content-type': 'application/json' }),
      body: JSON.stringify({ id: ID, password: password })
    }
    console.log(ID, password)
    fetch(process.env.REACT_APP_BACKEND_IP + '/user/account/signup', options)
      .then(res => res.text())
      .then(text => {
        if (text === 'existing id') alert('id existed');
        else {
          navigate('/signin');
        }
      })
  };

  return (
    <>
      <Titlebar />
      <br />
      <TextField id="outlined" label="ID" size="small" onChange={e => setID(e.target.value)} />
      <TextField type="password" label="password" size="small" onChange={e => setPassword(e.target.value)}></TextField>
      <Button onClick={signIn} variant="outlined">sign up</Button>
      <Button component={Link} to="/">sign in</Button>
    </>
  )
}

export default Signup