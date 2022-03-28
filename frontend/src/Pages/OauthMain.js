import React, { useState, useEffect } from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import useUserInfo from '../hooks/useUserInfo';
import Titlebar from '../Components/Titlebar';
import { Button, Typography, List, ListItem, ListItemButton, ListItemText, Divider } from '@mui/material';
import styled from 'styled-components';

const OauthMain = () => {
  const Location = useLocation();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({})
  const [rooms, setRooms] = useState([])

  useUserInfo(setUserData);

  if (userData) fetch(process.env.REACT_APP_BACKEND_IP + `/user/${userData.ID}/rooms`)
      .then(res => res.json())
      .then(json => setRooms(json));

return (
  <>
    <Titlebar />
    <br />
    <Typography variant="h4">user: {userData.ID}</Typography>
    <Button onClick={() => { navigate('/room/create', { state: { ID: userData.ID } }) }}>create room</Button>
    <Button onClick={() => { navigate('/room/join', { state: { ID: userData.ID } }) }}>join room</Button>
    <RoomList>
      {rooms.map((item, index) => <>
        <ListItem>
          <ListItemButton component={Link} to='/room' state={{ ID: userData.ID, room: item.room }}>
            <ListItemText primary={item.room} secondary={item.admin_id} />
          </ListItemButton>
        </ListItem>
        {item !== rooms[rooms.length - 1] ? <Divider /> : null}
      </>)}
    </RoomList>
  </>
)
}

export default OauthMain

const RoomList = styled(List)`
  max-width: 200px;
  background-color: #fafafa;
`