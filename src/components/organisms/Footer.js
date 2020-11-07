import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SchoolIcon from '@material-ui/icons/School';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: 'block',
    width: '100%',
    position: 'fixed',
    left: 0,
    bottom: 0,
    zIndex: 1000,
    textAlign: 'center'
  },
  root: {
    width: '100 %',
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  button: {
    maxWidth: '100%'
  }
}));

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const history = useHistory();

  return (
    <div className={classes.wrapper}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          label='講義を探す'
          icon={<SchoolIcon />}
          className={classes.button}
          onClick={() => history.push('/')}
        />
        <BottomNavigationAction
          label='お気に入り'
          icon={<FavoriteIcon />}
          className={classes.button}
          onClick={() => history.push('/mypage')}
        />
        <BottomNavigationAction
          label='クーポン'
          icon={<LoyaltyIcon />}
          className={classes.button}
          onClick={() => history.push('/coupon')}
        />

      </BottomNavigation>
    </div>
  );
}
