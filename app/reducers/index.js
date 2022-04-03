import {combineReducers} from 'redux';
import home from './complaintReducer.js';
import auth from './authReducer';

const appReducer = combineReducers({
  auth,
  home,
});

export default appReducer;
