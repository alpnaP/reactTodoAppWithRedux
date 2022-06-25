
import React, { useState } from "react";

const regexPattern = new RegExp(/^([A-Za-z]|[0-9]|_)+$/)
const AddTodo = (props) => {

    const [title, setTitle] = useState("");
    const submit = (e) => {

      e.preventDefault();
      if (!title) {
        alert("Backlog can't be blank");
      }
      else if(!regexPattern.test(title)){
        alert("Not Matched")
        setTitle("");
  
      }
      else{
        props.addTodo(title);
      setTitle("");
      
      }}

    return (
    
      <div className="container my-9">
            
        <h4>Add a Backlog List</h4>
  
        <form onSubmit={submit}>
          <div className="mb-3">
          {/* <div className="pull-left"> */}
            <input
              type="text"
              placeholder='Please Name Backlog…'
              value={title}
              onChange={(e) => 
                setTitle(e.target.value)
              }
              className="form-control"
              id="title"
              aria-describedby="emailHelp"
            />
          </div>
     
        
          <button type="submit" className="btn btn-sm btn-primary">
            Add Backlog
          </button>
          {/* </div> */}
        </form>
        </div>
    
    );
  };

export default AddTodo