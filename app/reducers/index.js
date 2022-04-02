import {combineReducers} from 'redux';
import home from './complaintReducer.js';

const appReducer = combineReducers({
  home,
});

export default appReducer;
