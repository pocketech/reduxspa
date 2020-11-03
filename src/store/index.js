import { combineReducers } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from './loadingSlice';
import userReducer from './userSlice';
import postReducer from './postSlice'

const rootReducer = combineReducers({
  loading: loadingReducer,
  user: userReducer,
  post: postReducer,
})
export default configureStore({
  reducer: rootReducer
});
