import React, { useState, useEffect } from 'react';
import { registerUser } from '../auth.js';
import { loginUser } from '../auth.js';
import { useNavigate } from 'react-router-dom';

const RegistrationPage = (props) => {
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    const [admin, setAdmin] = useState(false)
    const navigate = useNavigate()
    return (
        <div><h1>Registration Page</h1>
            <input type='text' onChange={(event) => setUserName(event.target.value)}></input>
            <input type='text' onChange={(event) => setPassword(event.target.value)}></input>


            <div className='input-group'>
                <input type='checkbox' checked={admin} onChange={() => setAdmin(!admin)} /><label>is Admin?</label>
            </div>
            <button onClick={async () => {
                props.setIsAuthLoading(true)
                const registerResult = await registerUser(userName, password, admin)

                console.log('1')
                if (registerResult === true) {
                    navigate('/login')
                    const loginResult = await loginUser(userName, password)

                    if (loginResult === true) {
                        console.log('3')
                        props.setIsAuthLoading(false)
                        navigate('/')
                    }
                }


            }}>Submit</button>


        </div>

    )
}

export default RegistrationPage