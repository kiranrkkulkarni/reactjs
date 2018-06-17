import { combineReducers } from 'redux';
import { counterReducer } from '../reducers/counter-reducer';
import { todosReducer } from '../reducers/todos-reducer';

const rootReducer = combineReducers({ count: counterReducer, 
                                      todos: todosReducer });
                          

export default rootReducer;