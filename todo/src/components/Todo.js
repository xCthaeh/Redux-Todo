import React from "react";
import { connect } from "react-redux";
import "../App.css";

import { deleteTodo, toggleTodo } from "../actions/actions";

const Todo = props => {
  return (
    <div>
      <div className={`todo-list ${props.todo.completed}`}>
        <h3 onClick={() => props.toggleTodo(props.todo.name)}>
          {" "}
          {props.todo.name}
        </h3>
      </div>
    </div>
  );
};
function mapStateToProps(state) {
  return {};
}
export default connect(
  mapStateToProps,
  { deleteTodo, toggleTodo }
)(Todo);
