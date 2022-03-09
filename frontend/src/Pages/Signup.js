import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
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
		fetch('user/account/signup', options)
			.then(res => res.text())
			.then(text => {
				if (text === 'existing id') alert('id existed');
				else {
					navigate('/signin');
				}
			})
	};

	return (
		<>
			<h1>nodetok</h1>
			<input type="text" placeholder='ID' onChange={e => setID(e.target.value)}></input>
			<input type="password" placeholder='PASSWORD' onChange={e => setPassword(e.target.value)}></input>
			<button onClick={signIn}>sign up</button>
			<p />
			<Link to='/'>sign in</Link>
		</>
	)
}

export default Signup