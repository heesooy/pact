import userProfileExists from '../config/auth';
import {
  LOGIN_EMAIL_CHANGED,
  LOGIN_PASSWORD_CHANGED,
  LOGIN_SUBMIT,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SET_MESSAGE,
} from './types';
import NavigationService from '../config/NavigationService';

export const loginEmailChanged = text => {
  return {
    type: LOGIN_EMAIL_CHANGED,
    payload: text,
  };
};

export const loginPasswordChanged = text => {
  return {
    type: LOGIN_PASSWORD_CHANGED,
    payload: text,
  };
};

export const loginSubmit = ({email, password}) => {
  return dispatch => {
    dispatch({type: LOGIN_SUBMIT});

    if (true) {
      loginSuccess(dispatch, {});
    } else {
      loginFail(dispatch, 'Incorrect username/password.');
    }
  };
};

export const loginSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_SUCCESS,
    payload: user,
  });

  if (userProfileExists(user)) {
    NavigationService.navigate('Home');
  } else {
    NavigationService.navigate('CreateProfile');
  }
};

const loginFail = (dispatch, error) => {
  dispatch({
    type: LOGIN_FAIL,
    payload: error.code,
  });
};

export const loginSetMessage = text => {
  return {
    type: LOGIN_SET_MESSAGE,
    payload: text,
  };
};
