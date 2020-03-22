import React, {Component, Fragment} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Textbox from '../components/Textbox';
import RoundButton from '../components/RoundButton';
import CircleButtons from '../components/CircleButtons';
import RoundSeparator from '../components/RoundSeparator';
import {PRIMARY_COLOR} from '../config/theme';
import TextboxLabel from '../components/TextboxLabel';
import TimePicker from '../components/TimePicker';
import {Icon} from 'react-native-elements';

class EditPact extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('title', 'Edit Pact'),
    };
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  editPactCreate({name, description, friendUid}) {
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

  editPactSave({pactId, name, description, friendUid}) {
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

  componentDidMount() {
    // TODO: is this redundant?
    this.props.navigation.setParams({
      title: this.state.pactParticipants === null ? 'Create Pact' : 'Edit Pact',
    });
  }

  onPactNameChange = pactName => {
    this.setState({pactName});
  };

  onDescChange = pactDescription => {
    this.setState({pactDescription});
  };

  onFriendPress = () => {
    this.props.navigation.navigate('AddFriends');
  };

  onSavePress = () => {
    const data = {
      name: this.state.pactName,
      description: this.state.pactDescription,
      friendUid: '5rodgDHsVxPsmTlXXoTLdpzq7Iv2',
    };

    // A pact was passed in => we are editing
    if (this.state.participants !== null) {
      data.pactId = this.state.pactId;
      this.editPactSave(data);
    } else {
      // we are creating a new pact
      this.editPactCreate(data);
    }

    this.props.navigation.pop();
  };

  onDeletePress = () => {
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

  render() {
    const {pactName, pactDescription, pactParticipants} = this.state;

    return (
      <Fragment>
        {/* For Android status bar */}
        <StatusBar backgroundColor={PRIMARY_COLOR} />
        {/* For iOS (doesn't support StatusBar--use SafeAreaView) */}
        <SafeAreaView style={{flex: 0, backgroundColor: PRIMARY_COLOR}} />
        <SafeAreaView style={styles.safeArea}>
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
                mode="outline"
                title=""
                icon={
                  <Icon name="add" color={styles.outlineButton.borderColor} />
                }
                onPress={this.onFriendPress}
                style={styles.outlineButton}
              />
              <TextboxLabel text="DAYS" />
              <CircleButtons onPress={this.onDescChange} />
              <TimePicker />
            </View>
            <View style={{height: 4, marginTop: 15, marginBottom: 15}}>
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
  safeArea: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  outlineButton: {
    marginTop: 6,
    borderWidth: 1,
    borderColor: '#777',
  },
});

export default EditPact;
