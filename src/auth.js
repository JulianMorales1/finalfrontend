const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;

export const registerUser = async (username, password) => {
    const url = `${urlEndpoint}/auth/register-user`;

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
    const responseJSON = await response.json();
    if (responseJSON.success) {
        localStorage.setItem(process.env.REACT_APP_TOKEN_HEADER_KEY, JSON.stringify(responseJSON.token));
    }
    if (!responseJSON.success) {
        console.log("Login user was not successful. Received responseJSON: ", responseJSON)
    }

}

export const logoutUser = () => { localStorage.removeItem(process.env.REACT_APP_TOKEN_HEADER_KEY) }

export const getUserToken = () => { return JSON.parse(localStorage.getItem(process.env.REACT_APP_TOKEN_HEADER_KEY)) }
