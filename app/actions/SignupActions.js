import {
  SIGNUP_EMAIL_CHANGED,
  SIGNUP_PASSWORD_CHANGED,
  SIGNUP_PASSWORD_CONFIRM_CHANGED,
  SIGNUP_SUBMIT,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
} from './types';
import { loginSetMessage } from './LoginActions';
import NavigationService from '../config/NavigationService';

export const signupEmailChanged = (text) => {
  return {
    type: SIGNUP_EMAIL_CHANGED,
    payload: text,
  };
};

export const signupPasswordChanged = (text) => {
  return {
    type: SIGNUP_PASSWORD_CHANGED,
    payload: text,
  };
};

export const signupPasswordConfirmChanged = (text) => {
  return {
    type: SIGNUP_PASSWORD_CONFIRM_CHANGED,
    payload: text,
  };
};

export const signupSubmit = ({ email, password, passwordConfirm }) => {
  return (dispatch) => {
    dispatch({ type: SIGNUP_SUBMIT });

    if (password !== passwordConfirm) {
      signupFail(dispatch, { code: 'password-match' });
      return;
    }

    // firebase.auth().createUserWithEmailAndPassword(email, password)
    //   .then(() => {
    //     firebase.auth().currentUser.sendEmailVerification()
    //       .then(() => {
    //         firebase.auth().signOut();
    //         signupSuccess(dispatch);
    //       })
    //       .catch((error) => {
    //         signupFail(dispatch, error);
    //       });
    //   })
    //   .catch((error) => {
    //     signupFail(dispatch, error);
    //   });
  };
};

const signupSuccess = (dispatch) => {
  dispatch({ type: SIGNUP_SUCCESS });

  // Display this message on the login page
  dispatch(loginSetMessage('Please verify your email.'));
  NavigationService.navigate('Login');
};

const signupFail = (dispatch, error) => {
  dispatch({
    type: SIGNUP_FAIL,
    payload: error.code,
  });
};
