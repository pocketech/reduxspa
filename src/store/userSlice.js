import { createSlice } from '@reduxjs/toolkit';
import { showLoading, hideLoading } from './loadingSlice'
import { db, auth, FirebaseTimestamp } from '../firebase';
import { isValidEmailFormat, isValidRequiredInput } from "../utility/common";

const userRef = db.collection('users');
const initialState = {
  uid: "",
  username: "",
  email: "",
  isSignedIn: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInAc: (state, action) => {
      return {
        ...state, ...action.payload
      }
    },
    signOutAc: state => state = initialState,
    updateAc: (state, action) => {
      return {
        ...state, ...action.payload
      }
    },
  },
});

export const { signOutAc, signInAc, updateAc } = userSlice.actions;
export const getSignedIn = state => state.user.isSignedIn;
export const getUserName = state => state.user.username;
export const getUserId = state => state.user.uid;


export default userSlice.reducer;


export const signUp = (username, email, password, confirmPassword, history) => {
  return async (dispatch) => {
    // validations
    if (!isValidRequiredInput(email, password, confirmPassword)) {
      alert('必須項目が未入力です。');
      return false
    }

    if (!isValidEmailFormat(email)) {
      alert('メールアドレスの形式が不正です。もう1度お試しください。')
      return false
    }
    if (password !== confirmPassword) {
      alert('パスワードが一致しません。もう1度お試しください。')
      return false
    }
    if (password.length < 6) {
      alert('パスワードは6文字以上で入力してください。')
      return false
    }

    return await auth.createUserWithEmailAndPassword(email, password)
      .then(result => {
        dispatch(showLoading('Sign up...'));
        const user = result.user;
        if (user) {
          const uid = user.uid;
          const timestamp = FirebaseTimestamp.now();
          const userInitialData = {
            created_at: timestamp,
            email: email,
            uid: uid,
            updated_at: timestamp,

            username: username
          };
          userRef.doc(uid).set(userInitialData).then(async () => {
            history.push('/');
            dispatch(hideLoading());
          })
        }
      })
      .catch(error => {
        dispatch(hideLoading());
        alert('アカウント登録に失敗しました。もう1度お試しください。');
        throw new Error(error);
      })
  }
}

export const signIn = (email, password, history) => {
  return async (dispatch) => {
    dispatch(showLoading('Sign in...'));
    // validations
    if (!isValidRequiredInput(email, password)) {
      dispatch(hideLoading());
      alert('メールアドレスかパスワードが未入力です。');
      return false

    }

    if (!isValidEmailFormat(email)) {
      dispatch(hideLoading());
      alert('メールアドレスの形式が不正です。もう1度お試しください。')
      return false
    }

    return await auth.signInWithEmailAndPassword(email, password)
      .then(result => {
        const userState = result.user;
        if (!userState) {
          dispatch(hideLoading());
          throw new Error('ユーザーIDを取得出来ませんでした。')
        }
        const userId = userState.uid;
        //Promiseを返す
        return userRef.doc(userId).get().then(snapshot => {
          const data = snapshot.data();
          if (!data) {
            dispatch(hideLoading());
            throw new Error('ユーザーデータが存在しません。')
          }

          dispatch(signInAc({
            email: data.email,
            isSignedIn: true,
            uid: userId,
            username: data.username,
          }))
          dispatch(hideLoading());
          history.push('/');

        })
      })
      .catch(error => {
        dispatch(hideLoading());
        alert('ログインに失敗しました。もう1度お試しください。');
        throw new Error(error);
      })
  }
}
export const signOut = (history) => {
  return async (dispatch) => {
    dispatch(showLoading('Sign out...'));
    auth.signOut().then(() => {
      dispatch(signOutAc());
      dispatch(hideLoading());
      history.push('/signin');
    }).catch(() => {
      dispatch(hideLoading());
      throw new Error('ログアウトに失敗しました。')
    })
  }
};

export const resetPassword = (email, history) => {
  return async (dispatch) => {
    if (!isValidEmailFormat(email)) {
      alert('メールアドレスの形式が不正です。')
      return false
    } else {
      return auth.sendPasswordResetEmail(email)
        .then(() => {
          alert('入力されたアドレス宛にパスワードリセットのメールをお送りしましたのでご確認ください。');
          history.push('/signin');
        }).catch(() => {
          alert('登録されていないメールアドレスです。もう一度ご確認ください。')
        })
    }
  }
}

export const listenAuthState = () => {
  return async dispatch => {
    return auth.onAuthStateChanged
  }
}