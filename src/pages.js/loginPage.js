import { loginUser } from '../auth.js';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = (props) => {
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate()
    return (
        <div><h1>Login Page</h1>
            <input type='text' onChange={(event) => setUserName(event.target.value)}></input>
            <input type='password' onChange={(event) => setPassword(event.target.value)}></input>
            <button onClick={async () => {
                props.setIsAuthLoading(true)
                const loginResult = await loginUser(userName, password)

                if (loginResult === true) {
                    props.setIsAuthLoading(false)
                    navigate('/')
                }

            }}></button>
        </div>
    )
}

export default LoginPage