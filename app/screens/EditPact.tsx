import React, { Component, Fragment } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import Textbox from '../components/Textbox';
import RoundButton from '../components/RoundButton';
import CircleButtons from '../components/CircleButtons';
import RoundSeparator from '../components/RoundSeparator';
import { PRIMARY_COLOR } from '../config/theme';
import TextboxLabel from '../components/TextboxLabel';
import TimePicker from '../components/TimePicker';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#FFFFFF',
  },
  footer: {},
  input: {
    marginTop: 20,
  },
  outlineButton: {
    marginTop: 6,
    borderWidth: 1,
    borderColor: '#777',
  },
  firstSafeArea: {
    flex: 0,
    backgroundColor: PRIMARY_COLOR,
  },
  secondSafeArea: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  roundSep: {
    height: 4,
    marginTop: 15,
    marginBottom: 15,
  },
});

type Props = {
  navigation: NavigationStackProp<{}>;
}

type State = {
  pactId?: string;
  pactName?: string;
  pactDescription?: string;
  pactParticipants?: string;
}

class EditPact extends Component<Props, State> {
  static navigationOptions = ({ navigation }: Props): { title: string } => ({
    title: navigation.getParam('title', 'Edit Pact'),
  });

  state: State = {};

  editPactCreate(/* name?: string, description?: string, friendUid?: string */): void {
    // const { currentUser } = firebase.auth();
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
  }

  editPactSave(
  /* pactId?: string, name?: string, description?: string, friendUid?: string */
  ): void {
    // const { currentUser } = firebase.auth();
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
  }

  componentDidMount(): void {
    // TODO: is this redundant?
    this.props.navigation.setParams({
      title: this.state.pactParticipants === null ? 'Create Pact' : 'Edit Pact',
    });
  }

  onPactNameChange = (pactName: string): void => {
    this.setState({ pactName });
  };

  onDescChange = (pactDescription: string): void => {
    this.setState({ pactDescription });
  };

  onFriendPress = (): void => {
    this.props.navigation.navigate('AddFriends');
  };

  onSavePress = (): void => {
    // const friend = '5rodgDHsVxPsmTlXXoTLdpzq7Iv2';

    if (this.state.pactParticipants !== null) {
      this.editPactSave(
        /* this.state.pactId, this.state.pactName, this.state.pactDescription, friend */
      );
    } else {
      this.editPactCreate(/* this.state.pactName, this.state.pactDescription, friend */);
    }

    this.props.navigation.pop();
  };

  onDeletePress = (): void => {
    // const dbRef = firebase.database().ref();
    // // Remove pact from users' user-pact list
    // const users = Object.keys(participants);
    // dbRef.child('/user-pacts/' + users[0] + '/' + pactId).remove();
    // dbRef.child('/user-pacts/' + users[1] + '/' + pactId).remove();
    // // Remove pact data
    // dbRef.child('/pacts/' + pactId).remove().then(() => {
    //   dispatch({ type: EDIT_PACT_DELETE });
    // NavigationService.navigate('Home');
    // });
  };

  render(): JSX.Element {
    const { pactName, pactDescription } = this.state;

    return (
      <Fragment>
        {/* For Android status bar */}
        <StatusBar backgroundColor={PRIMARY_COLOR} />
        {/* For iOS (doesn't support StatusBar--use SafeAreaView) */}
        <SafeAreaView style={styles.firstSafeArea} />
        <SafeAreaView style={styles.secondSafeArea}>
          <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.input}>
              <Textbox
                label="PACT NAME"
                placeholder="Enter the name of your pact"
                onChangeText={this.onPactNameChange}
                value={pactName}
              />
              <Textbox
                label="DESCRIPTION"
                placeholder="Describe what you will do"
                onChangeText={this.onDescChange}
                value={pactDescription}
              />
              <TextboxLabel text="CHOOSE A FRIEND" />
              <RoundButton
                mode="outlined"
                title=""
                icon="add"
                onPress={this.onFriendPress}
                style={styles.outlineButton}
              />
              <TextboxLabel text="DAYS" />
              <CircleButtons onPress={this.onDeletePress} />
              <TimePicker />
            </View>
            <View style={styles.roundSep}>
              <RoundSeparator />
            </View>
            <View style={styles.footer}>
              <RoundButton
                mode="contained"
                title="SAVE"
                onPress={this.onSavePress}
              />
              <RoundButton
                mode="outlined"
                title="DELETE"
                onPress={this.onDeletePress}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}

export default EditPact;
