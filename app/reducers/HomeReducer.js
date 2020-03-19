import {
  PACTS_FETCH_SUCCESS,
} from '../actions/types';

const HOME_INITIAL_STATE = {
  pacts: [],
};

export default (state = HOME_INITIAL_STATE, action) => {
  switch (action.type) {
    case PACTS_FETCH_SUCCESS:
      return { pacts: action.payload };
    default:
      return state;
  }
};
