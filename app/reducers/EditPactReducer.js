import {
  EDIT_PACT_UPDATE,
  EDIT_PACT_CREATE,
  EDIT_PACT_SAVE_SUCCESS,
  EDIT_PACT_DELETE,
} from '../actions/types';

const EDIT_PACT_INITIAL_STATE = {
  pactId: '',
  name: '',
  description: '',
  participants: null,
};

export default (state = EDIT_PACT_INITIAL_STATE, action) => {
  switch (action.type) {
    case EDIT_PACT_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case EDIT_PACT_CREATE:
      return EDIT_PACT_INITIAL_STATE;
    case EDIT_PACT_SAVE_SUCCESS:
      return EDIT_PACT_INITIAL_STATE;
    case EDIT_PACT_DELETE:
      return EDIT_PACT_INITIAL_STATE;
    default:
      return state;
  }
};
