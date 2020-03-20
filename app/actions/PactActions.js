import _ from 'lodash';
import {
  PACTS_FETCH_SUCCESS,
  PACT_UPDATE,
  EDIT_PACT_UPDATE,
  EDIT_PACT_CREATE,
  EDIT_PACT_SAVE_SUCCESS,
  EDIT_PACT_DELETE,
} from './types';
import NavigationService from '../config/NavigationService';

export const pactsFetch = () => {
  // const { currentUser } = firebase.auth();
  return dispatch => {
    // const dbRef = firebase.database().ref();
    // dbRef.child('/user-pacts/' + currentUser.uid).on('value', (snapshot) => {
    //   if (!snapshot.exists()) {
    //     // User has no pacts
    //     dispatch({ type: PACTS_FETCH_SUCCESS, payload: null });
    //   } else {
    //     const pactIds = Object.keys(snapshot.val());
    //     // Pipelined fetch all pacts user belongs to
    //     Promise.all(
    //       pactIds.map(id => dbRef.child('/pacts/' + id).once('value')),
    //     ).then((dataSnapshot) => {
    //       const pacts = [];
    //       dataSnapshot.forEach((childSnapshot) => {
    //         const pactId = childSnapshot.key;
    //         const data = childSnapshot.val();
    //         data.pactId = pactId;
    //         pacts.push(data);
    //       });
    //       dispatch({ type: PACTS_FETCH_SUCCESS, payload: pacts });
    //     });
    //   }
    // });
  };
};

export const pactUpdate = ({prop, value}) => {
  return {
    type: PACT_UPDATE,
    payload: {prop, value},
  };
};

export const editPactUpdate = ({prop, value}) => {
  return {
    type: EDIT_PACT_UPDATE,
    payload: {prop, value},
  };
};

export const editPactCreate = ({name, description, friendUid}) => {
  // const { currentUser } = firebase.auth();
  return dispatch => {
    // const pactData = {
    //   name,
    //   description,
    //   participants: {
    //     [currentUser.uid]: true,
    //     [friendUid]: true,
    //   },
    // };
    // // Generate ID for new Pact
    // const dbRef = firebase.database().ref();
    // const newPactId = dbRef.child('pacts').push().key;
    // // Write the new Pact data into pacts collection
    // // Then simultaneously in the users' pact list
    // dbRef.child('pacts/' + newPactId).set(pactData).then(() => {
    //   const updates = {
    //     ['/user-pacts/' + currentUser.uid + '/' + newPactId]: true,
    //     ['/user-pacts/' + friendUid + '/' + newPactId]: true,
    //   };
    //   dbRef.update(updates).then(() => {
    //     dispatch({ type: EDIT_PACT_CREATE });
    //     // Update the 'Pact' screen that we'll go back to
    //     pactData.pactId = newPactId;
    //     _.each(pactData, (value, prop) => {
    //       dispatch(pactUpdate({ prop, value }));
    //     });
    //   });
    // });
  };
};

export const editPactSave = ({pactId, name, description, friendUid}) => {
  // const { currentUser } = firebase.auth();
  return dispatch => {
    // const dbRef = firebase.database().ref();
    // dbRef.child('/pacts/' + pactId + '/participants').once('value', (snapshot) => {
    //   // Remove pact from old friend's list
    //   const users = Object.keys(snapshot.val());
    //   const oldFriendUid = (users[0] === currentUser.uid) ? users[1] : users[0];
    //   dbRef.child('/user-pacts/' + oldFriendUid + '/' + pactId).remove();
    // }).then(() => {
    //   const pactData = {
    //     name,
    //     description,
    //     participants: {
    //       [currentUser.uid]: true,
    //       [friendUid]: true,
    //     },
    //   };
    //   // Send updated pact data
    //   dbRef.child('/pacts/' + pactId).set(pactData).then(() => {
    //     // Update new friend's pact list
    //     dbRef.child('/user-pacts/' + friendUid).update({ [pactId]: true }).then(() => {
    //       dispatch({ type: EDIT_PACT_SAVE_SUCCESS });
    //       // Update the 'Pact' screen that we'll go back to
    //       pactData.pactId = pactId;
    //       _.each(pactData, (value, prop) => {
    //         dispatch(pactUpdate({ prop, value }));
    //       });
    //       // Also update the list at the Home screen
    //       dispatch(pactsFetch());
    //     });
    //   });
    // });
  };
};

export const editPactDelete = ({pactId, participants}) => {
  return dispatch => {
    // const dbRef = firebase.database().ref();
    // // Remove pact from users' user-pact list
    // const users = Object.keys(participants);
    // dbRef.child('/user-pacts/' + users[0] + '/' + pactId).remove();
    // dbRef.child('/user-pacts/' + users[1] + '/' + pactId).remove();
    // // Remove pact data
    // dbRef.child('/pacts/' + pactId).remove().then(() => {
    //   dispatch({ type: EDIT_PACT_DELETE });
    //   NavigationService.navigate('Home');
    // });
  };
};
