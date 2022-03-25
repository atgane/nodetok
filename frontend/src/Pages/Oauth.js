import React from 'react'
import Titlebar from '../Components/Titlebar'

const Oauth = () => {

  let naver_api_url = 'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=' + process.env.REACT_APP_NAVER_CLIENT_ID + '&redirect_uri=' + encodeURI(process.env.REACT_APP_NAVER_CALLBACK_URI) + '&state=' + Math.random().toString(36).substr(3, 14);

  let kakao_api_url = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${encodeURI(process.env.REACT_APP_KAKAO_CALLBACK_URI)}&response_type=code`


  return (
    <>
    <Titlebar />
      <a href={naver_api_url}><img height='50' src='http://static.nid.naver.com/oauth/small_g_in.PNG'/></a>
      <a href={kakao_api_url}><img src='img/kakao_login.png'></img></a>
    </>
  )
}

export default Oauth