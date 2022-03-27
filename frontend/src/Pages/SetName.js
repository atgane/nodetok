import React, { useState } from 'react'
import Titlebar from '../Components/Titlebar'
import { Typography, TextField, Button } from '@mui/material';

const SetName = () => {

  const [ID, setID] = useState('')

  const createID = () => {
    
  }
  

  return (
    <>
      <Titlebar />
      <br />
      <Typography variant="h4" color="initial">Enter your ID</Typography>
      <TextField variant="outlined" label="ID" size="small" onChange={e => setID(e)} />
      <Button onClick={createID}>enter ID</Button>
    </>
  )
}

export default SetName