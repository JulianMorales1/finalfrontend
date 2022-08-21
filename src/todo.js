
const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;

export const createTodo = async (title, desc, startDate, endDate, userid) => {
    const url = `${urlEndpoint}/todos`;

    console.log(title, desc, startDate, endDate)

    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            desc: desc,
            startDate: startDate,
            endDate, endDate,
            userid
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

export const getTodos = async (userid) => {
    const url = `${urlEndpoint}/todos/${userid}`;

    const user = JSON.parse(localStorage.getItem('user'));

    const reqBody = {
        admin: user.admin ? true : false
    }
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(reqBody),
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

export const updateTodo = async (id, title, startDate, endDate, desc, userid) => {
    const url = `${urlEndpoint}/todos/${id}`;

    const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify({
            title,
            startDate,
            endDate,
            desc,
            userid
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

export const markComplete = async (id, userid) => {
    const url = `${urlEndpoint}/todos/complete/${id}`;

    //alert(url, id)
    const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify({
            userid
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

export const deleteTodo = async (id, userid) => {
    const url = `${urlEndpoint}/todos/${id}`;

    const response = await fetch(url, {
        method: "DELETE",
        body: JSON.stringify({
            userid
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