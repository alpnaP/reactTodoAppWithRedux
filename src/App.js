// import logo from './logo.svg';
import { connect } from 'react-redux';
import './App.css';
import AddTodo from "./MyComponents/AddTodo";
import Footer from './MyComponents/Footer';
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";

function App() {

  return (
    <div className="App">
      <Header title="Assignment-one [Task Management by using Redux]" searchBar={false} />
      <AddTodo />
      <Todos />
      <Footer/>
    </div>
  );
}

export default connect(state => ({ todos: state }))(App);
