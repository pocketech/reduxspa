import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme =>
  ({
    "button": {
      backgroundColor: theme.palette.primary.main,
      color: '#fff',
      fontSize: 16,
      height: 48,
      marginBottom: 16,
      width: 256,
      "&:hover": {
        backgroundColor: theme.palette.primary.light,
      }
    }
  })
)

const PrimaryButton = React.memo(({ onClick, label }) => {
  const classes = useStyles()

  return (
    <Button
      className={classes.button}
      variant="contained"
      onClick={() => onClick()}
    >
      {label}
    </Button>
  );
});

export default PrimaryButton;
