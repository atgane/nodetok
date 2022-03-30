import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const useUserInfo = (setUserData) => {
  const navigate = useNavigate();

  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_IP + '/oauth/user/info', {
      credentials: "include"
    })
    .then(ans => ans.json())
    .then(ans => {
      if (!ans.email) {
        navigate('/oauth');
      }
      else if (!ans.ID) {
        navigate('/set_name');
      }
      else {
        setUserData(ans);
      }
    })
  }, [])
}

export default useUserInfo