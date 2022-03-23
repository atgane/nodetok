import React, { useEffect } from 'react'
import Titlebar from '../Components/Titlebar'

const Oauth2 = () => {

  let client_id = process.env.REACT_APP_CLIENT_ID;
  let client_secret = process.env.REACT_APP_CLIENT_SECRET;
  let state = "RAMDOM_STATE";
  let redirectURI = encodeURI(process.env.REACT_APP_CALLBACK_URI);
  let api_url = 'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=' + client_id + '&redirect_uri=' + redirectURI + '&state=' + Math.random() ;



  return (
    <>
    <Titlebar />
      <a href={api_url}><img height='50' src='http://static.nid.naver.com/oauth/small_g_in.PNG'/></a>
    </>
  )
}

export default Oauth2