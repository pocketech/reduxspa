import { combineReducers } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from './loadingSlice';
import userReducer from './userSlice';

const rootReducer = combineReducers({
  loading: loadingReducer,
  user: userReducer,
})
export default configureStore({
  reducer: rootReducer
});
