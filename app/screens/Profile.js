import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RoundButton from '../components/RoundButton';
import { BACKGROUND_COLOR } from '../config/theme';
import {
  profileFetch,
  profileSignout,
} from '../actions';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.editPressed = this.editPressed.bind(this);
    this.signOutPressed = this.signOutPressed.bind(this);
  }

  componentDidMount() {
    this.props.profileFetch(this.props.user.uid);
  }

  editPressed() {
    const { navigation } = this.props;
    navigation.navigate('EditProfile');
  }

  signOutPressed() {
    this.props.profileSignout();
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.info}>
            Name: {this.props.firstname} {this.props.lastname}
          </Text>
          <Text style={styles.info}>
            Username: {this.props.username}
          </Text>
        </View>
        <View>
          <RoundButton mode="contained" title="Edit" onPress={this.editPressed} />
          <RoundButton mode="outlined" title="Sign Out" onPress={this.signOutPressed} />
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

const mapStateToProps = (state) => {
  return {
    user: state.login.user,
    firstname: state.profile.firstname,
    lastname: state.profile.lastname,
    username: state.profile.username,
  };
};

const mapDispatchToProps = {
  profileFetch,
  profileSignout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
