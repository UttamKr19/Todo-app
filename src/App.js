import './App.css';
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import About from "./MyComponents/About";
import { Todos } from "./MyComponents/Todos";
import React, { useState, useEffect } from 'react';
import { AddTodo } from './MyComponents/AddTodo';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'


function App() {

  let initTodo = [];
  if (localStorage.getItem("todos")) {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }
  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }

  const addTodo = (title, desc) => {
    const newTodo = {
      sno: Number(new Date()),
      title: title,
      desc: desc
    }
    setTodos([...todos, newTodo]);
  }
  //console.log(todos);

  return (
    <>
      <Router>
        <Header title="My TODOs List" searchBar={true} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="">
                      <div className="">
                        <Todos todos={todos} onDelete={onDelete} />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="">
                      <div className="">
                         <AddTodo addTodo={addTodo} />
                      </div>
                    </div>
                  </div>
                </div>
                
               
              </>
            )
          }}>
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
