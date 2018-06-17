import React, { Component } from 'react'
import { connect } from 'react-redux';

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      text: evt.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addTodo(this.state.text);
    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <div className="field">
          <label>Enter todo text</label>
          <input placeholder="Enter todo text"
                value={this.state.text}
                onChange={this.handleChange} />
          <button type="submit" 
               className="ui button primary blue" 
               value="Submit">Add Todo</button>
        </div>
        
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => {
      console.log('Add is getting called', text);
      dispatch({ type: 'ADD_TODO', text})
    }
  }
}

export default connect(null, mapDispatchToProps)(TodoForm);