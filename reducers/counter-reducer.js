const initialState = 198;

export function counterReducer(state = initialState, action) {
  switch(action.type) {
    case 'INC':
      return state + action.payload;
    case 'DEC':
      return state - action.payload;
    default:
      return state;
  }
}

