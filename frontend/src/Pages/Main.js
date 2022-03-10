import React, { useEffect, useState } from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom'

const Main = () => {
  const Location = useLocation();
  const navigate = useNavigate();

  let userID = null;

  try { userID = Location.state.ID;}
  catch {}

  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch(`http://192.168.219.116:8080/user/${userID}/rooms`)
    .then(res => res.json())
    .then(json => setRooms(json));
  }, [])

  if (userID)
    return (
      <>
        <h1>nodetok</h1>
        <h3>user: {userID}</h3>
        <button onClick={() => {navigate('/room/create', { state: { ID: userID } })}}>create room</button>
        <button onClick={() => {navigate('/room/join', { state: { ID: userID } })}}>join room</button>
        <ul>
          {rooms.map((item, index) =>  <li key={index}>
              <Link to='/room' state={{ID: userID, room: item.room}}>
                <h3>{item.room}</h3>
                admin: {item.admin_id}
              </Link>
            </li>)}
        </ul>
      </>
    )
  else return (<>{navigate('/404')}</>)
}

export default Main