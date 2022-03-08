import React from 'react'

export const TodoItem=({todo,onDelete})=>{
    let todoStyle={
        padding:"0px 15px"
    }
    let date=new Date(todo.sno);

    return (
        <div style={todoStyle}>
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <p>{date.toLocaleString()} {date.getDay()}</p>
            <button className="btn btn-sm btn-outline-danger" onClick={()=>{onDelete(todo)}} > Delete </button>
            
        </div>
    )
}
