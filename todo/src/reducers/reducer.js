import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODOS
} from "../actions/actions";

let defaultState = {
  todos: [
    {
      name: "To-do Baseline Task",
      completed: false
    }
  ]
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_TODO:
      let newTodos = [...state.todos, action.payload];
      return Object.assign({}, state, { todos: newTodos });
    case TOGGLE_TODO:
      let currentTodos = state.todos.slice();
      currentTodos = currentTodos.map(todo => {
        if (todo.name === action.name) {
          todo.completed = !todo.completed;
          console.log(todo.completed);
          return todo;
        } else {
          return todo;
        }
      });
      return Object.assign({}, state, { todos: currentTodos });

    case DELETE_TODOS:
      let uncompletedTodos = state.todos.filter(
        todo => todo.completed !== true
      );
      return Object.assign({}, state, { todos: uncompletedTodos });
    default:
      return state;
  }
}
