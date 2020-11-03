import React from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import { useSelector } from "react-redux";
import { getLoadingState, getLoadingText } from "./store/loadingSlice";

const Loading = ({ children }) => {
  const selector = useSelector((state) => state);
  const isBeingLoaded = getLoadingState(selector);
  const loadingText = getLoadingText(selector)

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