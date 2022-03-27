import React, { useState } from 'react'
import Titlebar from '../Components/Titlebar'
import { useNavigate } from 'react-router-dom'
import { Typography, TextField, Button } from '@mui/material';

const SetName = () => {

  const navigate = useNavigate();

  const [ID, setID] = useState('')

  const createID = () => {
    fetch(process.env.REACT_APP_BACKEND_IP + '/oauth/user/info', {
      credentials: "include"
    })
    .then(ans => ans.json())
    .then(ans => {
      return fetch(process.env.REACT_APP_BACKEND_IP + '/oauth/user/info/id', {
        method: 'put',
        mode: 'cors',
        credentials: "include",
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify({ 
          user_id: ans.user_id,
          id: ID 
        })
      })
    })
    .then(navigate('/oauth_main'))



  }
  

  return (
    <>
      <Titlebar />
      <br />
      <Typography variant="h4" color="initial">Enter your ID</Typography>
      <TextField variant="outlined" label="ID" size="small" onChange={e => setID(e.target.value)} />
      <Button onClick={createID}>enter ID</Button>
    </>
  )
}

export default SetName