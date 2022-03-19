import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Titlebar from '../Components/Titlebar';
import { Button, TextField, Typography } from '@mui/material';

const Signin = () => {
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
    fetch('http://192.168.219.116:8080/user/account/signin', options)
      .then(res => res.text())
      .then(text => {
        if (text === 'wrong id') alert('id failed');
        else if (text === 'wrong password') alert('password failed');
        else {
          navigate('/main', { state: { ID: ID } });
        }
      })
  };

  return (
    <>
      <Titlebar />
      <br />
      <TextField id="outlined" label="ID" size="small" onChange={e => setID(e.target.value)} />
      <TextField id="outlined" label="password" size="small" type="password" onChange={e => setPassword(e.target.value)} />
      <Button onClick={signIn} variant="outlined">sign in</Button>
      <Button component={Link} to="/signup">sign up</Button>
    </>
  )
}

export default Signin