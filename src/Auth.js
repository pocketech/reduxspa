import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getSignedIn } from './store/userSlice';
import { listenAuthState } from './store/userSlice';
import { useHistory } from 'react-router-dom';

const Auth = ({ children }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isSignedIn = useSelector(getSignedIn);

  useEffect(() => {
    if (!isSignedIn) {
      dispatch(listenAuthState(history))
    }
  }, [dispatch, history, isSignedIn]);

  if (!isSignedIn) {
    return <></>
  } else {
    return children
  }
};
export default Auth;