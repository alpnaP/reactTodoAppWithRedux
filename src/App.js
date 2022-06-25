import logo from './logo.svg';
import './App.css';
import AddTodo from "./MyComponents/AddTodo";
import Todos from "./MyComponents/Todos";
import Header from "./MyComponents/Header";
import Footer from './MyComponents/Footer';
import React, { useState, useEffect } from "react";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const addTodo = (title) => {
  
    let sno;
    if (todos.length == 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
    };
    setTodos([...todos, myTodo]);
  };
  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e != todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));

    // let index= todos.indexOf(todo)
    // todos.splice(index,1)
  };
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <div className="App">
    <>
    <Header title="Assignment-one" searchBar={false}/>
              <AddTodo addTodo={addTodo}></AddTodo>
              <Todos todos={todos} onDelete={onDelete}/></>
              <Footer></Footer>
    </div>
  );
}

export default App;
