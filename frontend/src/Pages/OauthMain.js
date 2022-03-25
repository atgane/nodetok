import React from 'react'
import Titlebar from '../Components/Titlebar'

const OauthMain = () => {


  return (
    <>
      <Titlebar />
      <div>{document.cookie}</div>
    </>
  )
}

export default OauthMain