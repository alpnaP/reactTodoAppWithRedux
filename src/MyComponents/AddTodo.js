
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
     
    // const HandleSubmit = (e)=>{
    //   e.preventDefault();
    // setTitle(e.target.value)
   

    // }
    return (
      <div className="container my-9">
        <h3>Add a Backlog List</h3>
        <form onSubmit={submit}>
          <div className="mb-3">

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
        </form>
      </div>
    );
  };

export default AddTodo