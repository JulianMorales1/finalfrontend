import React, { useState } from "react";
import ToDoForm from "./toDoForm";


function ToDoList() {

    const [toDos, setToDos] = useState([])

    const addToDo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        const newTodos = [todo, ...todos]

        setTodos(newTodos);
    };
    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setToDos(removeArr);
    }

    const updateTodo = (todo, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item))
        );
    }

    const completeToDo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos);
    }
    return (
        <div>
            <h1> To Do List</h1>
            <ToDoForm onSubmit={addToDo} />
            <ToDo
                todos={todos}
                completeToDo={completeToDo}
                removeTodo={removeTodo}
                updateTodo={updateTodo} />
        </div>
    )
}

export default ToDoList