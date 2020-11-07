import React from "react";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import Spacer from "@material-ui/core/Box";

const RatingBox = React.memo(({ item, value, handleChange, ...other }) =>
  <>
    <Spacer my={2} />
    <div style={{ display: "flex", justifyContent: "flex-start" }}>
      <Typography>{item}</Typography>
      <Spacer mx={3} />
      <Rating
        name={item}
        value={value}
        onChange={handleChange}
        {...other}
        precision={0.5}
      />
    </div>
    <Spacer my={2} />
  </>
);
export default RatingBox;
