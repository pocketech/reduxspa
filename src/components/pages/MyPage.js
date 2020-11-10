import React from 'react';
import Typography from '@material-ui/core/Typography';

const MyPage = () => {

  return (
    <div className="c-section-container">
      <div className="module-spacer--small" />
      <Typography style={{ fontFamily: 'Grandstander, cursive' }} align="center" variant="h3" component="h2">My Page</Typography>
      <div className="module-spacer--medium" />
      <div className="center">
        <Typography align="center" variant="h5" component="h2">Profile</Typography>

        <div className="module-spacer--small" />
        <p className="u-text-small" >もうすぐだよ。</p>
      </div>
    </div>
  );
};

export default MyPage;