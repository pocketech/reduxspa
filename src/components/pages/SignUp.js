import React, { useState, useCallback } from 'react';
import { TextInput, PrimaryButton } from '../atoms';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUp } from '../../store/userSlice';
import Typography from '@material-ui/core/Typography';

const Component = ({
  email,
  password,
  confirmPassword,
  username,
  history,
  inputEmail,
  inputConfirmPassword,
  inputPassword,
  inputUsername,
  className,
  dispatch
}) => (
    <div className={className}>
      <div className='c-section-container'>
        <div className='module-spacer--medium' />
        <Typography className="signup-fontprop" align="center" variant="h4" component="h2">Sign Up !</Typography>
        <div className='module-spacer--medium' />
        <TextInput
          fullWidth={true}
          label={'ユーザー名'}
          multiline={false}
          required={true}
          rows={1}
          value={username}
          type={'text'}
          onChange={inputUsername}
        />
        <TextInput
          fullWidth={true}
          label={'メールアドレス'}
          multiline={false}
          required={true}
          rows={1}
          value={email}
          type={'email'}
          onChange={inputEmail}
        />
        <TextInput
          fullWidth={true}
          label={'パスワード（半角英数字で6文字以上）'}
          multiline={false}
          required={true}
          rows={1}
          value={password}
          type={'password'}
          onChange={inputPassword}
        />
        <TextInput
          fullWidth={true}
          label={'パスワードの再確認'}
          multiline={false}
          required={true}
          rows={1}
          value={confirmPassword}
          type={'password'}
          onChange={inputConfirmPassword}
        />
        <div className='module-spacer--medium' />
        <div className='center'>
          <PrimaryButton
            label={'アカウントを登録する'}
            onClick={() =>
              dispatch(signUp(username, email, password, confirmPassword, history))
            }
          />
          <div className='module-spacer--small' />
          <p>
            アカウントをお持ちの方は<span className="tologin" onClick={() =>
              history.push('/login')
            }>こちら</span>
          </p>
        </div>
      </div>
    </div>
  );

const StyledComponent = styled(Component)`
  & .c-section-container {
    margin: 0 auto;
    max-width: 400px;
    padding: 1rem;
    height: auto;
    width: calc(100% - 2rem);

    & .signup-fontprop {
      font-family: 'Grandstander', cursive;
      letter-spacing: 3px;
    }
    & .module-spacer--medium {
      height: 20px;
    }
    & .center {
      margin: 0 auto;
      text-align: center;
      & .module-spacer--small {
        height: 20px
    }
    &>p {
      font-size: .9rem;
      & .tologin {
        cursor:pointer;
        color:#227C9D;
      }
  }
    }
  }
`;

const Container = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const inputEmail = useCallback(
    (e) => {
      setEmail(e.target.value);
    },
    [setEmail]
  );

  const inputPassword = useCallback(
    (e) => {
      setPassword(e.target.value);
    },
    [setPassword]
  );

  const inputConfirmPassword = useCallback(
    (e) => {
      setConfirmPassword(e.target.value);
    },
    [setConfirmPassword]
  );

  const inputUsername = useCallback(
    (e) => {
      setUsername(e.target.value);
    },
    [setUsername]
  );
  const containerProps = {
    email,
    password,
    confirmPassword,
    username,
    history,
    inputEmail,
    inputConfirmPassword,
    inputPassword,
    inputUsername,
    dispatch
  };

  return <StyledComponent {...containerProps} />;
};
export default Container;
