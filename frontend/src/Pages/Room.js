import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Room = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const socket = new WebSocket("ws://localhost:8081");

  let userID = null;
  let room = null;

  try { userID = location.state.ID; room = location.state.room; }
  catch { }

  const [message, setMessage] = useState('')

  useEffect(() => {
    if (!userID) { navigate('/404') }
    else {
      socket.onopen = () => socket.send(JSON.stringify({ ID: userID, room: room, message: `${userID} connected` }));
    }
  }, [])

  const sendData = () => {
    console.log('sendData');
    socket.send(JSON.stringify({ ID: userID, room: room, message: message }));
  }

  return (
    <>
      <h1>nodetok</h1>
      <h3>{room}</h3>
      <input placeholder='SEND MESSAGE' onChange={e => { setMessage(e.target.value) }}></input>
      <button onClick={sendData}>send</button>
    </>
  )

}

export default Room