import { connect } from 'react-redux';
import './App.css';
import AddTodo from "./Components/AddTodo";
import Footer from './Components/Footer';
import Header from "./Components/Header";
import Todos from "./Components/Todos";

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
