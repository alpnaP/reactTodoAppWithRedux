import React, { useEffect, useState } from "react";
import Card from "./Card";
import { connect } from 'react-redux'

/* Card Style */
let cardStyle = {
  minHeight: "65vh",
  margin: "10px auto",
};

/* 
* Todo Component
*/

const Todos = (props) => {

  const [backlogList, setBacklogList] = useState([])
  const [todosList, settodosList] = useState([])
  const [inProgressList, setInProgress] = useState([])
  const [doneList, setdoneList] = useState([])
  const { todos } = props

  /* 
   Handeler for filtering items based on status
  */

  const listItem = (todos, id) => {
    let data = []
    todos.forEach(element => {
      if (element.id === id) {
        data = [...element.cards]
      }
    });
    return data
  }
  useEffect(() => {
    setBacklogList(listItem(todos, 1))
    settodosList(listItem(todos, 2))
    setInProgress(listItem(todos, 3))
    setdoneList(listItem(todos, 4))
  }, [props])

  return (
    <div className="container my-3 card-border" style={cardStyle}>
      <h3 className="my-3">Backlog List</h3>
      <div class="row ">
        <div class="col-sm-3">
          <div class="col-sm-12 card card-h-100">
            <h3>Backlog</h3>
            {backlogList.map((item) => {
              return <Card {...item} removeTodoAction={() => props.removeTodoAction(item.cid, 1)} moveLeftTodoAction={() => props.moveLeftTodoAction(item, 1)} moveRightAction={() => props.moveRightAction(item, 1)} />
            })}
          </div>
        </div>
        <div class="col-sm-3">
          <div class="col-sm-12 card card-h-100">
            <h3>Todo</h3>
            {todosList.map((item) => {
              return <Card {...item} removeTodoAction={() => props.removeTodoAction(item.cid, 2)} moveLeftTodoAction={() => props.moveLeftTodoAction(item, 2)} moveRightAction={() => props.moveRightAction(item, 2)} />
            })}
          </div>
        </div>
        <div class="col-sm-3">
          <div class="col-sm-12 card card-h-100">
            <h3>In-Progress</h3>
            {inProgressList.map((item) => {
              return <Card {...item} removeTodoAction={() => props.removeTodoAction(item.cid, 3)} moveLeftTodoAction={() => props.moveLeftTodoAction(item, 3)} moveRightAction={() => props.moveRightAction(item, 3)} />
            })}
          </div>
        </div>
        <div class="col-sm-3">
          <div class="col-sm-12 card card-h-100">
            <h3>Done</h3>
            {doneList.map((item) => {
              return <Card {...item} removeTodoAction={() => props.removeTodoAction(item.cid, 4)} moveLeftTodoAction={() => props.moveLeftTodoAction(item, 4)} moveRightAction={() => props.moveRightAction(item, 4)} />
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {

    moveLeftTodoAction: (cid, id) => dispatch({
      type: 'MOVE_LEFT_TODO', value: {
        cid,
        id
      }
    }),
    moveRightAction: (cid, id) => dispatch({
      type: 'MOVE_RIGHT_TODO', value: {
        cid,
        id
      }
    }),
    removeTodoAction: (cid, id) => dispatch({
      type: 'REMOVE_TODO', value: {
        cid,
        id
      }
    }),
  }
}

export default connect(state => ({ todos: state }), mapDispatchToProps)(Todos);
