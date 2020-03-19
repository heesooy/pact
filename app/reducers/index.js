import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import SignupReducer from './SignupReducer';
import CreateProfileReducer from './CreateProfileReducer';
import ProfileReducer from './ProfileReducer';
import HomeReducer from './HomeReducer';
import PactReducer from './PactReducer';
import EditPactReducer from './EditPactReducer';

export default combineReducers({
  login: LoginReducer,
  signup: SignupReducer,
  createProfile: CreateProfileReducer,
  profile: ProfileReducer,
  home: HomeReducer,
  pact: PactReducer,
  editPact: EditPactReducer,
});
