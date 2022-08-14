
const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;

export const createTodo = async (title) => {
    const url = `${urlEndpoint}/todos`;

    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            title
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

export const getTodos = async () => {
    const url = `${urlEndpoint}/todos`;

    const response = await fetch(url, {
        method: 'GET',

        headers: {
            'Content-Type': 'application/json'
        }
    });
    const responseJSON = await response.json(); // { success: false }
    if (responseJSON.success === true) {
        return responseJSON.data
    }
    if (responseJSON.success === false) {
        return false
    }
}

export const updateTodo = async (id, title) => {
    const url = `${urlEndpoint}/todos/${id}`;

    const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify({
            title
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

export const deleteTodo = async (id, title) => {
    const url = `${urlEndpoint}/todos/${id}`;

    const response = await fetch(url, {
        method: "DELETE",

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