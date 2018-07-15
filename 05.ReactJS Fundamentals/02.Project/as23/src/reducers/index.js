import { combineReducers } from 'redux';
import sessionReducer from './session';
import userReducer from './user';
import playerReducer from './player';

// All reducers combined in a single component.
// Reducers take the previous state and an action, and returns the next state

const rootReducer = combineReducers({
  sessionState: sessionReducer,
  userState: userReducer,
  playerState: playerReducer,
});

export default rootReducer;