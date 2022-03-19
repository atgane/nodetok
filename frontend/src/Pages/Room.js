import React, { useState, useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import io from 'socket.io-client';
import Titlebar from '../Components/Titlebar';
import { Button, Typography, TextField, List, ListItem, ListItemButton, ListItemText, Divider } from '@mui/material';
import styled from 'styled-components';

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
      setLog(prev => [...prev, {...data, selforigin: 0 }]);
    });
    newSocket.emit('join_room', room);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket])

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [log]);

  const sendData = () => {
    const data = { ID: userID, room: room, chat: chat, selforigin: 1 }
    socket.emit('message', data);
    setLog(prev => [...prev, data]);
    setChat('');
  }

  return (
    <>
      <Titlebar />
      <br />
      <Typography variant="h4">{room}</Typography>
      <br />
      <InputField>
        <TextField id="outlined-multiline-static" label="message" size="small" value={chat} multiline rows={4} onChange={e => setChat(e.target.value)} />
        <Button onClick={sendData}>send</Button>
      </InputField>
      <br />
      <ChatListWrapper>
        <ChatList>
          {log.map((item, index) => <>
            <ListItem key={index}>
              <ChatListItemText selforigin={item.selforigin} primary={item.chat} secondary={item.ID} />
            </ListItem>
            {item !== log[log.length - 1] ? <Divider /> : null}
          </>)}
          <div ref={messagesEndRef}></div>
        </ChatList>
      </ChatListWrapper>
    </>
  )
}

export default Room

const InputField = styled.div`
  display: flex;
  align-items: center;
`

const ChatListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const ChatList = styled(List)`
  border: 1px solid;
  height: 300px;
  max-width: 800px;
  overflow: auto;
`

const ChatListItemText = styled(ListItemText)`
  text-align: ${({selforigin}) => (selforigin ? 'right' : 'left')};
`