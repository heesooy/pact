import React, { Component, Fragment } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  SafeAreaView,
  Dimensions,
  StatusBar,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import { HelperText } from 'react-native-paper';
import PropTypes from 'prop-types';
import Textbox from '../components/Textbox';
import RoundButton from '../components/RoundButton';
import RoundSeparator from '../components/RoundSeparator';
import LogoTextHeader from '../components/LogoTextHeader';
import { PRIMARY_COLOR, PRIMARY_TEXT_COLOR } from '../config/theme';
import {
  createProfileFirstnameChanged,
  createProfileLastnameChanged,
  createProfileUsernameChanged,
  createProfileSubmit,
} from '../actions';

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.onFirstnameChange = this.onFirstnameChange.bind(this);
    this.onLastnameChange = this.onLastnameChange.bind(this);
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onCreatePress = this.onCreatePress.bind(this);
  }

  componentDidMount() {
    
  }

  onFirstnameChange(text) {
    this.props.createProfileFirstnameChanged(text);
  }

  onLastnameChange(text) {
    this.props.createProfileLastnameChanged(text);
  }

  onUsernameChange(text) {
    this.props.createProfileUsernameChanged(text);
  }

  onCreatePress() {
    const { firstname, lastname, username } = this.props;
    this.props.createProfileSubmit({ firstname, lastname, username });
  }

  renderMessage() {
    const { error, message, loading } = this.props;

    const text = () => {
      if (loading) {
        return 'Signing in...';
      }
      if (error === 'name-format') {
        return 'Please enter a name';
      }
      if (error === 'username-length') {
        return 'your username is too short';
      }
      if (error === 'PERMISSION_DENIED') {
        return 'Username already exists';
      }
      return error;
    };

    const type = () => {
      if (loading) {
        return 'info';
      }
      if (error) {
        return 'error';
      }
      return 'info';
    };

    return (
      <View style={{ alignSelf: 'center', marginBottom: 10 }}>
        <HelperText
          type={type()}
          visible={true}
        >
          {text()}
        </HelperText>
      </View>
    );
  }

  render() {
    const {
      firstname,
      lastname,
      username,
    } = this.props;

    return (
      <Fragment>
        {/* For Android status bar */}
        <StatusBar backgroundColor={PRIMARY_COLOR} />
        {/* For iOS (doesn't support StatusBar--use SafeAreaView) */}
        <SafeAreaView style={{ flex: 0, backgroundColor: PRIMARY_COLOR }} />
        <SafeAreaView style={styles.safeArea}>
          <LogoTextHeader text="Welcome!" />
          <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.input}>
              <Text style={{
                fontSize: 20,
                alignSelf: 'center',
                color: PRIMARY_TEXT_COLOR,
                paddingBottom: 15,
                // fontFamily: 'OctagenRoman',
              }}
              >
                Just one last thing...
              </Text>
              <View style={styles.twoTextboxes}>
                <View style={styles.textbox}>
                  <Textbox label="FIRST NAME" placeholder="John" onChangeText={this.onFirstnameChange} value={firstname} />
                </View>
                <View style={styles.textbox}>
                  <Textbox label="LAST NAME" placeholder="Doe" onChangeText={this.onLastnameChange} value={lastname} />
                </View>
              </View>
              <Textbox label="USERNAME" placeholder="username" onChangeText={this.onUsernameChange} value={username} />
            </View>
            <View>
              {this.renderMessage()}
            </View>
            <View style={styles.footer}>
              <View style={{ height: 4, marginTop: 15, marginBottom: 15 }}>
                <RoundSeparator />
              </View>
              <RoundButton mode="contained" title="Create Profile" onPress={this.onCreatePress} />
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}

CreateProfile.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#FFFFFF',
  },
  footer: {
  },
  input: {
    marginTop: 20,
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  twoTextboxes: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textbox: {
    height: 'auto',
    width: Dimensions.get('window').width * 0.4,
  },
});

const mapStateToProps = (state) => {
  return {
    firstname: state.createProfile.firstname,
    lastname: state.createProfile.lastname,
    username: state.createProfile.username,
    error: state.createProfile.error,
    loading: state.createProfile.loading,
  };
};

const mapDispatchToProps = {
  createProfileFirstnameChanged,
  createProfileLastnameChanged,
  createProfileUsernameChanged,
  createProfileSubmit,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProfile);
