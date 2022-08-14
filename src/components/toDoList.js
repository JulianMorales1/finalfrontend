import React, { useState, useEffect } from "react";
import ToDoForm from "./toDoForm";
import Todo from "./toDo";
import { getTodos, deleteTodo, updateTodo, createTodo } from '../todo.js'


function ToDoList() {

    const [todos, setToDos] = useState([])
    const [inEdit, setInEdit] = useState(false)
    const [edit, setEdit] = useState({
        id: null, //sets to null??
        value: ''
    });

    const addToDo = async (todo) => {
        // if (!todo.text || /^\s*$/.test(todo.text)) {
        //     return
        // }
        // const newTodos = [todo, ...todos]

        await createTodo(todo.title);

        const data = await getTodos();

        setToDos(data);
    };
    const removeTodo = async (id) => {
        const removeArr = [...todos].filter(todo => todo._id !== id)
        await deleteTodo(id)
        setToDos(removeArr);
    }


    const startEditTodo = (todo, text) => {

        setEdit({
            id: todo.todo._id,
            value: todo.todo.title
        })
        setInEdit(true)
    }
    // const updateTodo = async (id, newValue) => {


    //     // if (!newValue || /^\s*$/.test(newValue)) {
    //     //     return
    //     // }


    //     // let updatedTodos = todos.map(todo => {
    //     //     if (todo._id === id) {
    //     //         todo.title = newValue
    //     //     }
    //     //     return todo
    //     // })
    //     //setToDos(updatedTodos);
    //     console.log(id, newValue)
    //     await updateTodo(id, newValue)


    //     setInEdit(false)
    // }

    const onUpdate = async (id, newValue) => {
        console.log(id, newValue)
        await updateTodo(id, newValue)


        setInEdit(false)

        const data = await getTodos();
        setToDos(data)
    }

    const completeToDo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setToDos(updatedTodos);
    }

    useEffect(() => {

        (async () => {

            const data = await getTodos();
            setToDos(data)
        })();

    }, [])
    return (
        <div>
            <h1> To Do List</h1>
            <ToDoForm onSubmit={addToDo} />
            {inEdit && <ToDoForm onSubmit={updateTodo} edit={edit} onUpdate={onUpdate} />}
            <Todo
                todos={todos}
                completeToDo={completeToDo}
                removeTodo={removeTodo}
                updateTodo={onUpdate}
                startEditTodo={startEditTodo}
            />
        </div>
    )
}

export default ToDoList