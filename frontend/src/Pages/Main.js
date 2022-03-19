import React, { useEffect, useState } from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom';
import Titlebar from '../Components/Titlebar';
import { Button, Typography, List, ListItem, ListItemButton, ListItemText, Divider } from '@mui/material';
import styled from 'styled-components';

const Main = () => {
  const Location = useLocation();
  const navigate = useNavigate();

  let userID = null;

  try { userID = Location.state.ID; }
  catch { }

  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch(`http://192.168.219.116:8080/user/${userID}/rooms`)
      .then(res => res.json())
      .then(json => setRooms(json));
  }, [])

  if (userID)
    return (
      <>
        <Titlebar />
        <br />
        <Typography variant="h4">user: {userID}</Typography>
        <Button onClick={() => { navigate('/room/create', { state: { ID: userID } }) }}>create room</Button>
        <Button onClick={() => { navigate('/room/join', { state: { ID: userID } }) }}>join room</Button>
        <RoomList>
          {rooms.map((item, index) => <>
            <ListItem>
              <ListItemButton component={Link} to='/room' state={{ ID: userID, room: item.room }}>
                <ListItemText primary={item.room} secondary={item.admin_id} />
              </ListItemButton>
            </ListItem>
            {item !== rooms[rooms.length - 1] ? <Divider /> : null}
          </>)}
        </RoomList>
      </>
    )
  else return (<>{navigate('/404')}</>)
}

export default Main

const RoomList = styled(List)`
  max-width: 200px;
  background-color: #fafafa;
`