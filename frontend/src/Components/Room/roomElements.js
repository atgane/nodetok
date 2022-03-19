import styled from "styled-components"
import { Link } from "react-router-dom"

export const RoomWrapper = styled(Link)`
  text-decoration:none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  height: 50px;
  background-color: #3f848a;
  color: white;
  margin: 10px 5px;
  border-radius: 10px;
`

export const RoomTitle = styled.div`
  margin-left: 5px;
  font-size: 1.5rem;
`

export const RoomAdmin = styled.div`
  margin-right: 5px;
  font-size: 1rem;
`