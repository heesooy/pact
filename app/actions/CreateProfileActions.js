import {
  CREATE_PROFILE_FIRSTNAME_CHANGED,
  CREATE_PROFILE_LASTNAME_CHANGED,
  CREATE_PROFILE_USERNAME_CHANGED,
  CREATE_PROFILE_SUBMIT,
  CREATE_PROFILE_SUCCESS,
  CREATE_PROFILE_FAIL,
} from './types';
import { loginSetMessage } from './LoginActions';
import NavigationService from '../config/NavigationService';

export const createProfileFirstnameChanged = (text) => {
  return {
    type: CREATE_PROFILE_FIRSTNAME_CHANGED,
    payload: text,
  };
};

export const createProfileLastnameChanged = (text) => {
  return {
    type: CREATE_PROFILE_LASTNAME_CHANGED,
    payload: text,
  };
};

export const createProfileUsernameChanged = (text) => {
  return {
    type: CREATE_PROFILE_USERNAME_CHANGED,
    payload: text,
  };
};

const validateInput = ({ firstname, lastname, username }) => {
  // Names can only contain alphabet characters and dashes
  const nameRegex = /^[a-z-]+$/i;
  if (!nameRegex.test(firstname) || !nameRegex.test(lastname)) {
    return 'name-format';
  }

  // Username must be between 4 and 15 characters long
  if (username.length < 4 || username.length > 15) {
    return 'username-length';
  }

  // Username must only contain alphanumeric characters and underscores
  const usernameRegex = /^\w+$/;
  if (!usernameRegex.test(username)) {
    return 'username-format';
  }

  return true;
};

export const createProfileSubmit = ({ firstname, lastname, username }) => {
  return (dispatch) => {
    dispatch({ type: CREATE_PROFILE_SUBMIT });
    createProfileSuccess(dispatch);
  };

};

const createProfileSuccess = (dispatch) => {
  dispatch({ type: CREATE_PROFILE_SUCCESS });

  NavigationService.navigate('Home');
};

const createProfileFail = (dispatch, error) => {
  dispatch({
    type: CREATE_PROFILE_FAIL,
    payload: error.code,
  });
};
