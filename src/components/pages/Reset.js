import React, { useState, useCallback } from 'react';
import { PrimaryButton, TextInput } from '../atoms/index';
import { useDispatch } from 'react-redux';
import { resetPassword } from '../../store/userSlice';
import { useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

const Reset = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const history = useHistory();
  const inputEmail = useCallback(e =>
    setEmail(e.target.value)
    , [setEmail]);

  return (
    <div className="c-section-container">
      <div className="module-spacer--small" />
      <Typography style={{ fontFamily: 'Grandstander, cursive' }} align="center" variant="h4" component="h2">Reset !</Typography>
      <div className="module-spacer--medium" />
      <TextInput
        fullWidth={true} label={"メールアドレス"} multiline={false} required={true}
        rows={1} value={email} type={"email"} onChange={inputEmail}
      />
      <div className="module-spacer--medium" />
      <div className="center">
        <PrimaryButton label={"パスワードをリセットする"} onClick={() => dispatch(resetPassword(email))} />
        <div className="module-spacer--small" />
        <p className="u-text-small" style={{
          cursor: "pointer",
          color: "#227C9D"
        }} onClick={() => history.push('/login')}>ログイン画面に戻る</p>
      </div>
    </div>
  );
};

export default Reset;