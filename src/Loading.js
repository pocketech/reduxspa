import React from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import { useSelector } from "react-redux";
import { getLoadingState, getLoadingText } from "./store/loadingSlice";

const Loading = ({ children }) => {
  const isBeingLoaded = useSelector(getLoadingState);
  const loadingText = useSelector(getLoadingText);

  return (
    <>
      {(isBeingLoaded) && (
        <section className="c-section__loading">
          <CircularProgress />
          <p>{loadingText}</p>
        </section>
      )}
      {children}
    </>
  );
};
export default Loading