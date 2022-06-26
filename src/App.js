// import logo from './logo.svg';
import { connect } from 'react-redux';
import './App.css';
import AddTodo from "./MyComponents/AddTodo";
import Footer from './MyComponents/Footer';
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";

function App() {


  // const addTodo = (title) => {

  //   let sno;
  //   if (todos.length === 0) {
  //     sno = 0;
  //   } else {
  //     sno = todos[todos.length - 1].sno + 1;
  //   }
  //   const myTodo = {
  //     sno: sno,
  //     title: title,
  //   };
  //   setTodos([...todos, myTodo]);
  // };
  // const onDelete = (todo) => {
  //   setTodos(
  //     todos.filter((e) => {
  //       return e != todo;
  //     })
  //   );
  //   localStorage.setItem("todos", JSON.stringify(todos));

  //   // let index= todos.indexOf(todo)
  //   // todos.splice(index,1)
  // };

  return (
    <div className="App">
      <Header title="Assignment-one" searchBar={false} />
      <AddTodo />
      <Todos />
      <Footer/>
    </div>
  );
}

export default connect(state => ({ todos: state }))(App);
