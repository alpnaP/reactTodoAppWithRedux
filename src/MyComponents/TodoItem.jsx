import React, { useState } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TodoItem = ({ todo, onDelete }) => {
  const[value, setValue]= useState([])
console.log(value)
  let move=(e)=>{
    setValue(e)
    // console.log(e);

  }
  return (
    <div>
      <h4> {todo.title}</h4>
      <div className="pull-right">
        {!todo.title ? (
          <button>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        ) : (
          <button>
            <FontAwesomeIcon onClick={()=>{move()}} icon={faArrowRight} />
          </button>
        )}
      </div>

      <button
        className="btn btn-sm btn-danger"
        onClick={() => {
          onDelete(todo);
        }}
      >
        Delete
      </button>
      <hr />
    </div>
  );
};

export default TodoItem;
