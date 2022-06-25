import React from "react";
import TodoItem from "./TodoItem";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Todos(props) {
  let myStyle = {
    minHeight: "70vh",
    margin: "10px auto",
  };
  return (
    <div className="container my-3" style={myStyle}>
      <h3 className="my-3">Backlog Table List</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Backlog</th>
            <th scope="col">Todo</th>
            <th scope="col">In-Progress</th>
            <th scope="col">Done</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              {props.todos.length === 0
                ? "No backlogs to display"
                : props.todos.map((todo) => {
                    return (
                      <TodoItem
                        todo={todo}
                        key={todo.sno}
                        onDelete={props.onDelete}
                      />
                    );
                  })}
            </th>
  
            <td> sdjsdhu</td>
            <td>@mdo</td> 
            <td>done</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Todos;
