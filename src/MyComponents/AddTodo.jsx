
import React, { useState } from "react";
import { connect } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';

const regexPattern = new RegExp(/^([A-Za-z]|[0-9]|_)/)
const innerPageStyle = {
  marginTop: 30,
};

const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("Backlog Name can't be blank");
    }
    else if (!regexPattern.test(title)) {
      alert("Not Matched Pattern")
      setTitle("");

    }
    else {
      props.addTodoAction({ name: title, stage: 0, cid: uuidv4() });
      setTitle("");
    }
  }
  return (
    <div className="container my-9 ">
      <h4 style={innerPageStyle}>Add New Backlog </h4>
      <form onSubmit={submit}>
        <div className="mb-3 row">
          <input
            type="text"
            placeholder='Please Add Backlog…'
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            className="input-css col-sm-10 "
            id="title"
            aria-describedby="emailHelp"
          />
          <button type="submit" className=" col-sm-2 btn btn-sm btn-primary">
            Add Backlog
          </button>
        </div>
      </form>
    </div>

  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    addTodoAction: (data) => dispatch({ type: 'ADD_TODO', value: data }),
  }
}

export default connect(null, mapDispatchToProps)(AddTodo)