import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

import rootReducer from '../reducers';

const store = createStore(rootReducer, applyMiddleware(logger));
export default store;

// store.subscribe(result => {
//   console.log('Store Update : ', store.getState().counter)
// })

// store.dispatch({type: 'INC', payload: 10});
// store.dispatch({type: 'INC', payload: 5});
// store.dispatch({type: 'INC', payload: 10});
// store.dispatch({type: 'DEC', payload: 5});
// store.dispatch({type: 'INC', payload: 178});