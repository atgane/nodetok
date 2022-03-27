import React, { useState, useEffect } from 'react'
import Titlebar from '../Components/Titlebar'
import { useNavigate } from 'react-router-dom'

const OauthMain = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({})

  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_IP + '/oauth/user/info', {
      credentials: "include"
    })
    .then(ans => ans.json())
    .then(ans => {
      console.log(ans);

      if (!ans.email) {
        navigate('/oauth_main');
      }
      else if (!ans.ID) {
        navigate('/set_name');
      }
      else setUserData(ans);
    })
  }, [])

  return (
    <>
      <Titlebar />
      <div>{JSON.stringify(userData)}</div>
    </>
  )
}

export default OauthMain