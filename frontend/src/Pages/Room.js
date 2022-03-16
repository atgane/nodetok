import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import io from 'socket.io-client';

const Room = () => {
  const location = useLocation();
  const navigate = useNavigate();

  let userID = null;
  let room = null;

  try { userID = location.state.ID; room = location.state.room; }
  catch { }
  
  const [log, setLog] = useState([])
  const [chat, setChat] = useState('')
  const [socket, setSocket] = useState(null)

  useEffect(() => {
    if (!userID) { navigate('/404') }
  }, [])
  
  useEffect(() => {
    const newSocket = io.connect('http://192.168.219.116:8080', { cors: { origin: "*" } });
    newSocket.on('message', data => {
      setLog(prev => [...prev, JSON.stringify(data)]);
    });
    newSocket.emit('join_room', room);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket])

  const sendData = () => {
    const data = { ID: userID, room: room, chat: chat }
    socket.emit('message', data);
    setLog(prev => [...prev, JSON.stringify(data)]);
    setChat('');
  }

  return (
    <>
      <h1>nodetok</h1>
      <h3>{room}</h3>
      <input placeholder='SEND MESSAGE' value={chat} onChange={e => { setChat(e.target.value) }}></input>
      <button onClick={sendData}>send</button>
      {log.map((item, index) => <div key={index}>{item}</div>)}
    </>
  )
}

export default Room