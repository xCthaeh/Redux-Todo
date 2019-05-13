import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import TodoSearch from "./components/TodoSearch";
import ToDoSearchResult from "./components/TodoSearchResult";

import "./App.css";

class App extends React.Component {
  state = {
    todos: [],
    todoSearch: []
  };

  updateTodosHandler = (event, todos) => {
    this.setState({ todos: todos });
  };

  updateSearchHandler = (event, searchTodos) => {
    this.setState({ todoSearch: searchTodos });
  };

  clearSearchHandler = () => {
    this.setState({
      todoSearch: []
    });
  };

  todoClickHandler = (event, id) => {
    const todoArr = this.state.todos.slice();
    const todo = todoArr.filter(td => td.id === id);

    todo[0].completed = !todo[0].completed;
    this.setState({ todos: todoArr });
  };

  saveStateToLocalStorage() {
    for (let key in this.state) {
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }
  hydrateStateWithLocalStorage() {
    for (let key in this.state) {
      if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);

        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          this.setState({ [key]: value });
        }
      }
    }
  }

  componentDidMount() {
    this.hydrateStateWithLocalStorage();

    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
    this.saveStateToLocalStorage();
  }

  render() {
    return (
      <div className="container">
        <h1 className="glow">To-do List</h1>
        <div className="content-wrapper">
          <TodoList
            todos={this.state.todos}
            todoClick={this.todoClickHandler}
          />
          <TodoForm
            todos={this.state.todos}
            todoSearch={this.state.todoSearch}
            updateTodos={this.updateTodosHandler}
            updateSearch={this.updateSearchHandler}
          />
          <ToDoSearchResult
            todos={this.state.todoSearch}
            todoClick={this.todoClickHandler}
          />
          <TodoSearch
            todos={this.state.todos}
            updateSearch={this.updateSearchHandler}
            clearSearch={this.clearSearchHandler}
          />
        </div>
      </div>
    );
  }
}

export default App;
