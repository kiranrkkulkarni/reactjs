import React, { Component } from 'react'
import { connect } from 'react-redux';

class Counter extends Component {

  render() {
    return (
      <div>
        <h3>Counter: { this.props.count } </h3>
        <button className="ui icon blue button" onClick={() => this.props.increment()}>
          <i className="plus icon"></i>
        </button>
        <button className="ui icon red button" onClick={this.props.decrement}>
          <i className="minus icon"></i>
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      console.log('Increment called');
      dispatch({ type: 'INC', payload: 1})
    },
    decrement: () => {
      console.log('Decrement called');
      dispatch({ type: 'DEC', payload: 1})
    } 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);