import React from 'react';
import { connect } from 'react-redux'

import { addTodo } from '../actions/actions'

class TodoInput extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      inputValue: ""
    };
  };

  changeInputValue = e => {
    this.setState({ inputValue: e.target.value });
  }

  createTodo = e => {
    e.preventDefault();
    this.setState({ inputValue: "" });
    this.props.addTodo(this.state.inputValue);

  };

  render(){
    console.log(this.props, this.state)
    return (
      <form onSubmit={this.createTodo}>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.changeInputValue}
          placeholder="Input task here"
        />
        <button type="submit"> Add a Task </button>
      </form>
    );
  };
}



function mapStateToProps(state){
  return {}
}

export default connect(mapStateToProps, {addTodo: addTodo})(TodoInput);
