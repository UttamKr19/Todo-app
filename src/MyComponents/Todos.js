import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos=(props)=>{
    let todosStyle={
        padding:"10px"
    }

    return (
        <div className="container my-3" style={todosStyle}>
            <h1 className="text-center">ToDo List</h1>
            {props.todos.length===0? <h4 className="text-center"> <br/> <br/>No task to display...</h4> :
                props.todos.map((item,index)=>{
                    return (<><TodoItem key={index} todo={item} onDelete={props.onDelete}/><hr/></>)
                })
            }
            
        </div>
    )
}