import React from 'react'
import { useState, useEffect } from 'react'
import HomeCard from './HomeCard'
import TodoForm from './TodoForm'

function Home() {

    const [todos, setTodos] = useState([])


    const TODOS = 'https://my-app-backend-portfolio.onrender.com/project'

    useEffect(() => {
      fetch(TODOS)
      .then(r => r.json())
      .then(data => {
        setTodos(data)
        console.log((data))
      })
    }, [])
  
    function handleAddTodo(newTodo){
      setTodos(item => [...item, newTodo])
    }
  
      function updateTodo(todo) {
          setTodos((items) =>
            items.map((data) => {
              return data.id === todo.id ? todo : data;
            })
          );
      }
  
      function deleteTodo(id) {
          setTodos((data) => data.filter((item) => item.id !== id))
      }
  
    const list = todos.map((todo) => (
      <HomeCard 
      key={todo.id}
      title={todo.title}
      description={todo.description}
      status={todo.status}
      priority={todo.priority}
      deleteTodo={deleteTodo}
      updateTodo={updateTodo}
      />
    ))
  
    return (
      <div className="App">
        <TodoForm onAddTodo={handleAddTodo}/>
        {list}
      </div>
    );
}

export default Home
