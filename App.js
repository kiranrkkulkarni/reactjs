import React, { Component } from 'react';
import Counter from './components/counter';
import TodosList from './components/todos/todos-list';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <h3>Redux Fundamentals</h3>
        <Counter />
        <br />
        <TodosList />
      </div>
    );
  }
}

export default App;
