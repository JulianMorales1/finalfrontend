const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;

export const registerUser = async (username, password, admin) => {
    const url = `${urlEndpoint}/auth/register-user`;

    //console.log(admin)
    console.log(admin)
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            username,
            password,
            admin
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const responseJSON = await response.json(); // { success: false }
    if (responseJSON.success === true) {
        return true
    }
    if (responseJSON.success === false) {
        return false
    }
}

export const loginUser = async (username, password) => {
    const url = `${urlEndpoint}/auth/login-user`;

    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            username,
            password
        }),
        headers: {
            'Content-Type': 'application/json'
        }

    });
    // alert('hi ther')
    const responseJSON = await response.json();
    console.log(responseJSON)
    if (responseJSON.success) {

        localStorage.setItem(process.env.REACT_APP_TOKEN_HEADER_KEY, JSON.stringify(responseJSON.token));
        localStorage.setItem('userid', responseJSON.userid);
        localStorage.setItem('user', JSON.stringify(responseJSON.user))
        return true
    }
    if (!responseJSON.success) {
        console.log("Login user was not successful. Received responseJSON: ", responseJSON)
        return false
    }

}

export const logoutUser = () => { localStorage.removeItem(process.env.REACT_APP_TOKEN_HEADER_KEY); localStorage.removeItem('userid') }

export const getUserToken = () => { return JSON.parse(localStorage.getItem(process.env.REACT_APP_TOKEN_HEADER_KEY)) }
