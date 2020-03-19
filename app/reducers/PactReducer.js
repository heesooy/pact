import {
  PACT_UPDATE,
} from '../actions/types';

const PACT_INITIAL_STATE = {
  pactId: '',
  name: '',
  description: '',
  participants: null,
};

export default (state = PACT_INITIAL_STATE, action) => {
  switch (action.type) {
    case PACT_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
