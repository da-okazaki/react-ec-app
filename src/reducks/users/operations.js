
import { signInAction,  } from './actions'
import { push } from 'connected-react-router';
import { auth, db, FirebaseTimestamp } from '../../firebase/index'

export const signIn = (email, password) => {

  return async (dispatch, getState) => {

    const state = getState()
    const isSignedIn = state.users.isSignedIn

    if (!isSignedIn) {
      const url = 'https://api.github.com/users/deatiger'
      const res = await fetch(url).then(res => res.json()).catch(() => null);
      const username = res.login
      dispatch(signInAction({
        isSignedIn: true,
        uid: "00001",
        username: username,
      }));
      dispatch(push('/'))
    };
  };
};


export const signUp = (username, email, password, confirmPassword) => {
  return async (dispatch) => {
      // Validation Check
      if (username === "" || email === "" || password === "" || confirmPassword === "") {
        alert("必須項目が未入力です");
        return false;
      }

      if (password !== confirmPassword) {
        alert("パスワードが一致しません、もう一度お確かめください");
        return false;
      }

      return auth.createUserWithEmailAndPassword(email, password)
        .then(result => {
          const user = result.user

          if (user) {
            const uid = user.uid;
            const timestamp = FirebaseTimestamp.now();

            const userInitialData = {
              created_at: timestamp,
              email: email,
              role: "customer",
            }
            db.collection('users').doc(uid).set(userInitialData)
              .then(() => {
                dispatch(push('/'))
              })
          }
        })
  }
}