import React, { useState } from "react";
import './TodoForm.css'

const TODOS = 'https://my-app-backend-portfolio.onrender.com/project'

const initialState = {
    title: "",
    description: "",
    priority: "",
    status: "CREATED"
}
function TodoForm({onAddTodo}) {
    const [data, setData] = useState(initialState)

    function handleChange(e){
        e.preventDefault()
        setData({...data, [e.target.name]:e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch(TODOS, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({data})
        })
        .then(r => r.json())
        .then(newTodo => {
            setData(initialState)
            onAddTodo(newTodo)
            console.log(newTodo)
        })
    }

    return (
        <div className="todo-form">
            <h2>New Task</h2>
            <form className="todo-add-form" onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Title" value={data.title
                } onChange={handleChange}/>
                <input type="text" name="description" placeholder="Description" value={data.description} onChange={handleChange}/>
                <input type="text" name="priority" placeholder="Priority" value={data.priority} onChange={handleChange}/>
                <input type="text" name="status" placeholder="Status" value={data.status} onChange={handleChange}/>
                <button type="submit" className="add-task-btn">Add Task</button>
            </form>
        </div>
    )

}

export default TodoForm