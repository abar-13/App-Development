// store.js
import { createStore, combineReducers } from 'redux';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  // Add more reducers if needed
});

const store = createStore(rootReducer);

export default store;
