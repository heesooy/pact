import {
  SIGNUP_EMAIL_CHANGED,
  SIGNUP_PASSWORD_CHANGED,
  SIGNUP_PASSWORD_CONFIRM_CHANGED,
  SIGNUP_SUBMIT,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
} from '../actions/types';

const SIGNUP_INITIAL_STATE = {
  email: '',
  password: '',
  passwordConfirm: '',
  error: '',
  loading: false,
};

export default (state = SIGNUP_INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNUP_EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case SIGNUP_PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case SIGNUP_PASSWORD_CONFIRM_CHANGED:
      return { ...state, passwordConfirm: action.payload };
    case SIGNUP_SUBMIT:
      return { ...state, error: '', loading: true };
    case SIGNUP_SUCCESS:
      return SIGNUP_INITIAL_STATE;
    case SIGNUP_FAIL:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
