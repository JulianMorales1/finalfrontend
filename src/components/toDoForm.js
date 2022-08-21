import React, { useState, useEffect, useRef, useSyncExternalStore } from "react";
import { v4 as uuid } from 'uuid';


function ToDoForm(props) {

    const [input, setInput] = useState(props.edit ? props.edit.value : '')

    const [sDate, setSDate] = useState(props.edit ? props.edit.startDate : null);
    const [eDate, setEDate] = useState(props.edit ? props.edit.endDate : null);
    const [desc, setDesc] = useState(props.edit ? props.edit.desc : '')

    const inputRef = useRef(null)
    const sDateRef = useRef(null);
    const eDateRef = useRef();
    const descRef = useRef();

    // useEffect(() => {
    //     inputRef.current.focus()
    // })


    const handleChange = e => {
        setInput(e.target.value)
    }


    const handleSubmit = e => {
        e.preventDefault();

        if (props.edit) {
            props.onUpdate(props.edit.id, input, sDate, eDate, desc)
        }
        else {
            props.onSubmit({

                title: input,
                desc: desc,
                startDate: sDate,
                endDate: eDate
            });
        }


        setInput('');
    };


    const handleChangeDesc = (e) => {
        setDesc(e.target.value)
    }

    const handleChangeSDate = (e) => {
        setSDate(e.target.value)
    }

    const handleChangeEDate = (e) => {
        setEDate(e.target.value)
    }
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


                    <textarea
                        type="text"
                        placeholder="Description"
                        value={desc} name="text"
                        className='todo-input'
                        onChange={handleChangeDesc}
                    />

                    <label>Start Date</label>
                    <input
                        type="date"

                        value={sDate} name="text"
                        className='todo-input'
                        onChange={handleChangeSDate}
                        ref={sDateRef}
                    />
                    <label>End Date</label>
                    <input
                        type="date"

                        value={eDate} name="text"
                        className='todo-input'
                        onChange={handleChangeEDate}
                        ref={eDateRef}
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

                    />

                    <textarea
                        type="text"
                        placeholder="Description"
                        value={desc} name="text"
                        className='todo-input'
                        onChange={handleChangeDesc}
                    />

                    <label>Start Date</label>
                    <input
                        type="date"

                        value={sDate} name="text"
                        className='todo-input'
                        onChange={handleChangeSDate}
                        ref={sDateRef}
                    />
                    <label>End Date</label>
                    <input
                        type="date"

                        value={eDate} name="text"
                        className='todo-input'
                        onChange={handleChangeEDate}
                        ref={eDateRef}
                    />
                    <button className="todo-button">Add a to do</button>
                </>
            )}
        </form>

    )
}

export default ToDoForm