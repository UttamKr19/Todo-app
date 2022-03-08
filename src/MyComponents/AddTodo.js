import React from 'react'
import { useState } from 'react'

export const AddTodo=(props)=>{

    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");

    const submit=(e)=>{
        e.preventDefault();
        props.addTodo(title,desc);
        setTitle("");
        setDesc("");

    }

    let addTodoStyle={
        padding:"20px 20px",
    }
    return (
        <div className="container" style={addTodoStyle}>
            <h3 className='text-center'>Add a new task </h3>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="todoTitle">Task Title</label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} required="required" className="form-control" id="todoTitle" aria-describedby="todoHelp" placeholder="Enter task"/>
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} required="required" className="form-control" id="desc" placeholder="Add Description"/>
                </div>
                
                <button type="submit" className="btn btn-success btn-lg btn-block">ADD to list</button>
            </form>
        </div>
    )
}

