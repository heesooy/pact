import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import RoundButton from '../components/RoundButton';
import {BACKGROUND_COLOR} from '../config/theme';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  profileFetch(uid) {
    // return (dispatch) => {
    //   // firebase.database().ref('users').child(uid).on('value', (snapshot) => {
    //   //   dispatch({ type: PROFILE_FETCH_SUCCESS, payload: snapshot.val() });
    //   // });
    // };
  }

  componentDidMount() {
    this.profileFetch(this.state.uid);
  }

  editPressed = () => {
    this.props.navigation.navigate('EditProfile');
  };

  signOutPressed() {
    // return (dispatch) => {
    //   // Display this message on the login page
    //   // firebase.auth().signOut();
    //   dispatch(loginSetMessage('You\'ve been signed out.'));
    //   NavigationService.navigate('Login');
    //   setTimeout(() => {
    //     dispatch({ type: PROFILE_SIGNOUT });
    //   }, 500);
    // };
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.info}>
            Name: {this.props.firstName} {this.props.lastName}
          </Text>
          <Text style={styles.info}>Username: {this.props.username}</Text>
        </View>
        <View>
          <RoundButton
            mode="contained"
            title="Edit"
            onPress={this.editPressed}
          />
          <RoundButton
            mode="outlined"
            title="Sign Out"
            onPress={this.signOutPressed}
          />
        </View>
      </View>
    );
  }
}

Profile.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
  },
  info: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default Profile;
