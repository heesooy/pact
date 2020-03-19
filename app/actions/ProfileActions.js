import {
  PROFILE_FETCH_SUCCESS,
  PROFILE_SIGNOUT,
} from './types';
import { loginSetMessage } from './LoginActions';
import NavigationService from '../config/NavigationService';

export const profileFetch = (uid) => {
  return (dispatch) => {
    // firebase.database().ref('users').child(uid).on('value', (snapshot) => {
    //   dispatch({ type: PROFILE_FETCH_SUCCESS, payload: snapshot.val() });
    // });
  };
};

export const profileSignout = () => {
  return (dispatch) => {
    // Display this message on the login page
    // firebase.auth().signOut();
    dispatch(loginSetMessage('You\'ve been signed out.'));
    NavigationService.navigate('Login');

    setTimeout(() => {
      dispatch({ type: PROFILE_SIGNOUT });
    }, 500);
  };
};
