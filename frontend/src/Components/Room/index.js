import React from 'react'
import { RoomWrapper, RoomTitle, RoomAdmin } from './roomElements'

const Room = ({ userID, item }) => {
  return (
    <RoomWrapper to='/room' state={{ ID: userID, room: item.room }}>
        <RoomTitle>
          {item.room}
        </RoomTitle>
        <RoomAdmin>
          {item.admin_id}
        </RoomAdmin>
    </RoomWrapper>
  )
}

export default Room