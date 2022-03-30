import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const useUserInfo = (setUserData, callback, props) => {
  const navigate = useNavigate();

  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_IP + '/oauth/user/info', {
      credentials: "include"
    })
    .then(ans => ans.json())
    .then(ans => {
      console.log('ans', ans)
      if (!ans.email) {
        navigate('/oauth');
      }
      else if (!ans.ID) {
        navigate('/set_name');
      }
      else {
        let set = () => {return new Promise((resolve, reject) => {
          resolve(setUserData(ans));
        })}
        set().then(ans => callback(props));
      }
    })
  }, [])
}

export default useUserInfo