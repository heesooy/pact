import {
  CREATE_PROFILE_FIRSTNAME_CHANGED,
  CREATE_PROFILE_LASTNAME_CHANGED,
  CREATE_PROFILE_USERNAME_CHANGED,
  CREATE_PROFILE_SUBMIT,
  CREATE_PROFILE_SUCCESS,
  CREATE_PROFILE_FAIL,
} from '../actions/types';

const CREATE_PROFILE_INITIAL_STATE = {
  firstname: '',
  lastname: '',
  username: '',
  error: '',
  loading: false,
};

export default (state = CREATE_PROFILE_INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_PROFILE_FIRSTNAME_CHANGED:
      return { ...state, firstname: action.payload };
    case CREATE_PROFILE_LASTNAME_CHANGED:
      return { ...state, lastname: action.payload };
    case CREATE_PROFILE_USERNAME_CHANGED:
      return { ...state, username: action.payload };
    case CREATE_PROFILE_SUBMIT:
      return { ...state, error: '', loading: true };
    case CREATE_PROFILE_SUCCESS:
      return CREATE_PROFILE_INITIAL_STATE;
    case CREATE_PROFILE_FAIL:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
