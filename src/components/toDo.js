import React, { useState } from "react";
import ToDoForm from "./toDoForm";
import ToDoList from "./toDoList";
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ri'

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {

    const [edit, setEdit] = useState({
        id: null, //sets to null??
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: value.id, //sets to null??
            value: ''
        })
    }

    if (edit.id) {
        return <ToDoForm edit={edit} onSubmit={submitUpdate} />;
    }

    return ToDoList.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' :
            'todo-row'} key={index}>

            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className="icons">
                <RiCloseCircleLine
                    onClick={() => removeTodo(todo.id)}
                    className='delete-icon' />
                <TiEdit
                    onClick={() => editTodo({ id: todo.id, value: todo.text })}
                    className='edit-icon' />
            </div>
        </div>
    ))
}

export default Todo