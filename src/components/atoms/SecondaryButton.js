import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme =>
  ({
    "button": {
      // backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.main,
      fontSize: 10,
      height: 48,
      marginBottom: 16,
      width: 200,
      "&:hover": {
        backgroundColor: theme.palette.secondary.light,
        color: "#fff"
      }
    }
  })
)

const SecondaryButton = React.memo(({ onClick, label }) => {
  const classes = useStyles()

  return (
    <Button
      className={classes.button}
      variant="outlined"
      color="secondary"
      onClick={() => onClick()}
    >
      {label}
    </Button>
  );
});

export default SecondaryButton;
