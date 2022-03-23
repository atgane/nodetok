import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Titlebar from '../Components/Titlebar'

const OauthMain = () => {

  let client_id = process.env.REACT_APP_CLIENT_ID;
  let client_secret = process.env.REACT_APP_CLIENT_SECRET;
  let state = "RAMDOM_STATE";
  let redirectURI = encodeURI(process.env.REACT_APP_CALLBACK_URI);
  let api_url = 'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=' + client_id + '&redirect_uri=' + redirectURI + '&state=' + state;

  const getQueryStringParams = query => {
    return query
      ? (/^[?#]/.test(query) ? query.slice(1) : query)
        .split('&')
        .reduce((params, param) => {
          let [key, value] = param.split('=');
          params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
          return params;
        }, {}
        )
      : {}
  };

  const queryObj = getQueryStringParams(window.location.search);

  let code = queryObj.code;
  let callback_state = queryObj.state;

  api_url = 'https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id='
    + client_id + '&client_secret=' + client_secret + '&redirect_uri=' + redirectURI + '&code=' + code + '&state=' + callback_state;

  useEffect(() => {
    const options = {
      method: 'GET',
      mode: 'cors',
      headers: { 'X-Naver-Client-Id': client_id, 'X-Naver-Client-Secret': client_secret }
    }
    fetch(api_url, options).then(res => console.log(res))
  }, [])

  return (
    <>
      <Titlebar />
      <div>Oauth_main</div>
    </>
  )
}

export default OauthMain