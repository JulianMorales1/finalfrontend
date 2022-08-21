import React, { useState } from "react";
import ToDoForm from "./toDoForm";
import ToDoList from "./toDoList";
import { RiCloseCircleLine } from 'react-icons/ri'
//import { AiFillEdit } from 'react-icons'

import { FaEdit } from "@react-icons/all-files/fa/FaEdit";

function Todo({ todos, completeToDo, removeTodo, updateTodo, startEditTodo }) {

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

    const compTodo = (e) => {

        //alert(e.target.id)
        completeToDo(e.target.id)
    }


    return (
        <div>

            {todos.length > 0 && todos.map((todo, index) => {
                return (
                    <div className={todo.completed ? 'todo-row complete' :
                        'todo-row'} key={index}>

                        <div key={todo._id} id={todo._id} onClick={compTodo}>
                            {todo.title}
                        </div>


                        <p>{todo.desc}</p>
                        <div>
                            {todo.startDate}
                        </div>
                        <div>
                            {todo.endDate}
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