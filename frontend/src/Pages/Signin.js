import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signin = () => {
  const navigate = useNavigate();

  const [ID, setID] = useState('');
  const [password, setPassword] = useState('');

  const signIn = () => {
    const options = {
      method: 'POST',
      mode: 'cors',
      headers: new Headers({ 'content-type': 'application/json' }),
      body: JSON.stringify({ id: ID, password: password })
    }
    console.log(ID, password)
    fetch('http://192.168.219.116:8080/user/account/signin', options)
      .then(res => res.text())
      .then(text => {
        if (text === 'wrong id') alert('id failed');
        else if (text === 'wrong password') alert('password failed');
        else {
          navigate('/main', { state: { ID: ID } });
        }
      })
  };

  return (
    <>
      <h1>nodetok</h1>
      <input type="text" placeholder='ID' onChange={e => setID(e.target.value)}></input>
      <input type="password" placeholder='PASSWORD' onChange={e => setPassword(e.target.value)}></input>
      <button onClick={signIn}>sign in</button>
      <p />
      <Link to='/signup'>sign up</Link>
    </>
  )
}

export default Signin