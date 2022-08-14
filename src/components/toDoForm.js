import React, { useState, useEffect, useRef } from "react";
import { v4 as uuid } from 'uuid';


function ToDoForm(props) {

    const [input, setInput] = useState(props.edit ? props.edit.value : '')

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })


    const handleChange = e => {
        setInput(e.target.value)
    }


    const handleSubmit = e => {
        e.preventDefault();

        if (props.edit) {
            props.onUpdate(props.edit.id, input)
        }
        else {
            props.onSubmit({

                title: input
            });
        }


        setInput('');
    };

    return (

        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit && (
                <>
                    <input
                        type="text"
                        placeholder="Add a to do"
                        value={input} name="text"
                        className='todo-input'
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <button className="todo-button">Update Todo</button>
                </>
            )}
            {!props.edit && (
                <>
                    <input
                        type="text"
                        placeholder="Add a to do"
                        value={input} name="text"
                        className='todo-input'
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <button className="todo-button">Add a to do</button>
                </>
            )}
        </form>

    )
}

export default ToDoForm