import React, { useEffect } from 'react'
import Titlebar from '../Components/Titlebar'

const OauthMain = () => {

  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_IP + '/oauth/user/info', {
      credentials: "include"
    })
    .then(ans => console.log(ans))
  }, [])

  return (
    <>
      <Titlebar />
      <div>{document.cookie}</div>
    </>
  )
}

export default OauthMain