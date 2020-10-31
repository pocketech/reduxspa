import React from 'react';
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import Spacer from "@material-ui/core/Box";

const RatingBox = ({ item, value, inputRating }) =>
  <>
    <Spacer my={2} />
    <div style={{ display: "flex", justifyContent: "flex-start" }}>
      <Typography>{item}</Typography>
      <Spacer mx={3} />
      <Rating name={item} value={value} onChange={inputRating} />
    </div>
    <Spacer my={2} />

  </>
  ;

export default RatingBox