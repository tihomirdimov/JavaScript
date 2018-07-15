import { combineReducers } from 'redux';
import sessionReducer from './session';
import userReducer from './user';
import playerReducer from './player';

const rootReducer = combineReducers({
  sessionState: sessionReducer,
  userState: userReducer,
  playerState: playerReducer,
});

export default rootReducer;