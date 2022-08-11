import React, { useState, useEffect, useRef } from "react";


function ToDoForm(props) {

    const [input, setInput] = useState('')

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })


    const handleChange = e => {
        setInput(e.target.value)
    }


    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            uid: uuid(),
            text: input
        });

        setInput('');
    };

    return (

        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a to do"
                value={input} name="text"
                className='todo-input'
                onChange={handleChange}
                ref={inputRef}
            />
            <button className="todo-button">Add a to do</button>
        </form>

    )
}

export default ToDoForm