import React, { useState } from "react";
import ToDoForm from "./toDoForm";
import ToDoList from "./toDoList";
import { RiCloseCircleLine } from 'react-icons/ri'
//import { AiFillEdit } from 'react-icons'

import { FaEdit } from "@react-icons/all-files/fa/FaEdit";

function Todo({ todos, completeTodo, removeTodo, updateTodo, startEditTodo }) {

    const [edit, setEdit] = useState({
        id: null, //sets to null??
        value: ''
    });

    const [inEdit, setInEdit] = useState(false)

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: value.id, //sets to null??
            value: ''
        })
    }


    const editTodo = (todo, text) => {
        //console.log('working')


        startEditTodo(todo, text);


    }

    return (
        <div>
            {todos.length > 0 && todos.map((todo, index) => {
                return (
                    <div className={todo.isComplete ? 'todo-row complete' :
                        'todo-row'} key={index}>

                        <div key={todo.id} onClick={() => completeTodo(todo._id)}>
                            {todo.title}
                        </div>

                        <div className="icons">
                            <RiCloseCircleLine
                                onClick={() => removeTodo(todo._id)}
                                className='delete-icon' />
                            <FaEdit
                                onClick={() => editTodo({ todo: todo, value: todo.title })}
                                className='edit-icon' />

                        </div>
                    </div>
                )
            })}



            {todos.length == 0 && <div>No Todos found</div>}
        </div>
    )
}

export default Todo