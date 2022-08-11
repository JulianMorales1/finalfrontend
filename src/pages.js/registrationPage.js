import React, { useState, useEffect } from 'react';
import { registerUser } from '../auth.js';
import { loginUser } from '../auth.js';
import { useNavigate } from 'react-router-dom';

const RegistrationPage = (props) => {
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate()
    return (
        <div><h1>Registration Page</h1>
            <input type='text' onChange={(event) => setUserName(event.target.value)}></input>
            <input type='text' onChange={(event) => setPassword(event.target.value)}></input>
            <button onClick={async () => {
                props.setIsAuthLoading(true)
                const registerResult = await registerUser(userName, password)

                if (registerResult === true) {
                    const loginResult = await loginUser(userName, password)

                    if (loginResult === true) {
                        props.setIsAuthLoading(false)
                        navigate('/')
                    }
                }


            }}></button>


        </div>

    )
}

export default RegistrationPage