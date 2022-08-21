import React, { useState, useEffect } from "react";
import ToDoForm from "./toDoForm";
import Todo from "./toDo";
import { getTodos, deleteTodo, updateTodo, createTodo, markComplete } from '../todo.js'


function ToDoList() {

    const [todos, setToDos] = useState([])
    const [inEdit, setInEdit] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [edit, setEdit] = useState({
        id: null, //sets to null??
        value: ''
    });

    const addToDo = async (todo) => {

        await createTodo(todo.title, todo.desc, todo.startDate, todo.endDate, localStorage.getItem('userid'));

        const data = await getTodos();

        setToDos(data);
    };
    const removeTodo = async (id) => {
        const removeArr = [...todos].filter(todo => todo._id !== id)
        await deleteTodo(id, localStorage.getItem('userid'))
        setToDos(removeArr);
    }


    const startEditTodo = (todo, text) => {

        setEdit({
            id: todo.todo._id,
            value: todo.todo.title,
            desc: todo.todo.desc,
            startDate: todo.todo.startDate,
            endDate: todo.todo.endDate
        })
        setInEdit(true)
    }


    const onUpdate = async (id, newValue, startDate, endDate, desc) => {
        console.log(id, newValue)
        await updateTodo(id, newValue, startDate, endDate, desc, localStorage.getItem('userid'))


        setInEdit(false)

        const data = await getTodos(localStorage.getItem('userid'));
        setToDos(data)
    }

    const completeToDo = async (id) => {


        // alert(id)
        await markComplete(id);

        //setToDos(updatedTodos);

        const data = await getTodos(localStorage.getItem('userid'));
        setToDos(data)
    }


    // fitlered

    const filterStartDate = (e) => {
        const filtered = todos.filter(todo => {
            if (todo.startDate == e.target.value) {
                return todo;
            }
        })
        setToDos(filtered)

    }
    const filterEndDate = (e) => {
        const filtered = todos.filter(todo => {
            if (todo.endDate == e.target.value) {
                return todo;
            }
        })
        setToDos(filtered)

    }

    const reset = async () => {

        const data = await getTodos(localStorage.getItem('userid'));
        setToDos(data)
    }

    useEffect(() => {

        (async () => {

            const data = await getTodos(localStorage.getItem('userid'));
            setToDos(data)
        })();


        const user = JSON.parse(localStorage.getItem('user'));
        if (user.admin) {
            setIsAdmin(true)
        } else {
            setIsAdmin(false)
        }

    }, [])
    return (
        <div>
            <h1> To Do List</h1>

            <div>
                <h2>Filtered Todos</h2>

                <div>
                    <label>Filter By Start DAte</label>
                    <input type="date" onChange={filterStartDate} />
                </div>

                <div>
                    <label>Filter By End DAte</label>
                    <input type="date" onChange={filterEndDate} />
                </div>

                <button onClick={reset}>Reset</button>
            </div>

            {!isAdmin && <>
                <ToDoForm onSubmit={addToDo} />
                {inEdit && <ToDoForm onSubmit={updateTodo} edit={edit} onUpdate={onUpdate} />}</>}
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