import React from 'react'
import './HomeCard.css'

const initial = {
    title: "",
    description: "",
    priority: "",
    status: "CREATED"
}

export default function HomeCard({title,description,id, priority, status, deleteTodo, updateTodo}) {

    const API = `https://my-app-backend-portfolio.onrender.com/project'/${id}`

    function handleDeleteTodo(){
        fetch(API,{
          method: "DELETE"
        })
        .then(()=>{
            deleteTodo(initial)
        })
    }
    
    function handleUpdateTodo() {
        fetch(API, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({initial}),
        })
          .then((r) => r.json())
          .then(updateTodo);
      }




  return (
    <div key={id}>

        <div key={id} className="skills-card">
                <p className="project-title">{title}</p>
                <p>{description}</p>
                <h4>Priority: {priority}</h4>
                <h4>Status: {status}</h4>
                <button className='delete-btn' onClick={()=> handleDeleteTodo(id)}>delete<ion-icon name="trash-outline"></ion-icon></button>  
                <button onClick={() => handleUpdateTodo(id)}>Edit</button>              
        </div> 
      
    </div>
  )
}


