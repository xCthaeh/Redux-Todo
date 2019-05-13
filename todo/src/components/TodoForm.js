import React from 'react';
import './Todo.css';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText : ""
    }
  }
  saveInputHandler = (event) => {
    this.setState({inputText: event.target.value});
  }
  addTodo = (event) => {
    event.preventDefault();
    const text = this.state.inputText.slice();
    const todos = this.props.todos.slice();
    if(!text) return;
    const newTodo = {
      task: text,
      id: Date.now(),
      completed: false
    }
    todos.push(newTodo);

    this.props.updateTodos(event, todos);
    this.setState({inputText: ""});
  }
  removeCompleted = event => {
    event.preventDefault();
    const notCompleted = this.props.todos.filter(td => !td.completed);
    const searchNotCompleted = this.props.todoSearch.filter(td => !td.completed);

    this.props.updateTodos(event, notCompleted);
    this.props.updateSearch(event, searchNotCompleted);
  }

  render() {
    return (
      <form className="form" onSubmit={this.addTodo}>
        <input type="text" placeholder="...todo" onChange={this.saveInputHandler} value={this.state.inputText}/>
        <button type="submit">Add Todo</button>
        <button onClick={this.removeCompleted}>Clear Completed</button>
      </form>
    );
  }
};

export default TodoForm;