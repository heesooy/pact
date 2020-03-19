import {
  PROFILE_FETCH_SUCCESS,
  PROFILE_SIGNOUT,
} from '../actions/types';

const PROFILE_INITIAL_STATE = {};

export default (state = PROFILE_INITIAL_STATE, action) => {
  switch (action.type) {
    case PROFILE_FETCH_SUCCESS:
      return action.payload;
    case PROFILE_SIGNOUT:
      return PROFILE_INITIAL_STATE;
    default:
      return state;
  }
};
