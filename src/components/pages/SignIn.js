import React, { useState, useCallback } from 'react';
import { TextInput, PrimaryButton } from '../atoms';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signIn } from '../../store/userSlice';

const Component = ({
  email,
  password,
  history,
  inputEmail,
  inputPassword,
  className,
  dispatch
}) => (
    <div className={className}>
      <div className='c-section-container'>
        <h2 className='u-text-center u-text__headline'>ログイン</h2>
        <div className='module-spacer--medium' />
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
          label={'パスワード'}
          multiline={false}
          required={true}
          rows={1}
          value={password}
          type={'password'}
          onChange={inputPassword}
        />
        <div className='module-spacer--medium' />
        <div className='center'>
          <PrimaryButton
            label={'ログイン'}
            onClick={() =>
              dispatch(signIn(email, password, history))
            }
          />
          <div className='module-spacer--small' />
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

    & .u-text-center {
      text-align: center;
    }
    & .u-text-headline {
      color: #4dd0e1;
      font-size: 1.563rem;
      margin: 0 auto 1rem auto;
    }
    & .module-spacer--medium {
      height: 32px;
    }
    & .center {
      margin: 0 auto;
      text-align: center;
      & .module-spacer--small {
        height: 20px
    }
    &>p {
      font-size: .9rem;
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