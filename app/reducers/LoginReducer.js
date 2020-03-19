import {
  LOGIN_EMAIL_CHANGED,
  LOGIN_PASSWORD_CHANGED,
  LOGIN_SUBMIT,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SET_MESSAGE,
} from '../actions/types';

const LOGIN_INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  message: '',
  loading: false,
};

export default (state = LOGIN_INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case LOGIN_PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_SUBMIT:
      return {
        ...state,
        error: '',
        message: '',
        loading: true,
      };
    case LOGIN_SUCCESS:
      return { ...state, ...LOGIN_INITIAL_STATE, user: action.payload };
    case LOGIN_FAIL:
      return { ...state, error: action.payload, loading: false };
    case LOGIN_SET_MESSAGE:
      return {
        ...state,
        error: '',
        message: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
