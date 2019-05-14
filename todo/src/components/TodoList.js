import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { deleteTodos } from "../actions/actions";
import "../App.css";

function TodoList(props) {
  return (
    <div>
      <button className="todo-btn" onClick={() => props.deleteTodos()}>
        {" "}
        Delete Completed Tasks{" "}
      </button>
      {props.todos.map((todo, index) => {
        return <Todo key={index} completed={todo.completed} todo={todo} />;
      })}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

export default connect(
  mapStateToProps,
  { deleteTodos }
)(TodoList);
