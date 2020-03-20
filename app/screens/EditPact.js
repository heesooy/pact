import React, {Component, Fragment} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {connect} from 'react-redux';
import Textbox from '../components/Textbox';
import RoundButton from '../components/RoundButton';
import CircleButtons from '../components/CircleButtons';
import RoundSeparator from '../components/RoundSeparator';
import {PRIMARY_COLOR} from '../config/theme';
import {
  editPactUpdate,
  editPactCreate,
  editPactSave,
  editPactDelete,
} from '../actions';
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
    this.onPactNameChange = this.onPactNameChange.bind(this);
    this.onDescChange = this.onDescChange.bind(this);
    this.onSavePress = this.onSavePress.bind(this);
    this.onFriendPress = this.onFriendPress.bind(this);
    this.onDeletePress = this.onDeletePress.bind(this);
  }

  componentDidMount() {
    this.props.navigation.setParams({
      title: this.props.participants === null ? 'Create Pact' : 'Edit Pact',
    });
  }

  onPactNameChange(text) {
    this.props.editPactUpdate({prop: 'name', value: text});
  }

  onDescChange(text) {
    this.props.editPactUpdate({prop: 'description', value: text});
  }

  onFriendPress() {
    const {navigation} = this.props;
    navigation.navigate('AddFriends');
  }

  onSavePress() {
    const data = {
      name: this.props.name,
      description: this.props.description,
      friendUid: '5rodgDHsVxPsmTlXXoTLdpzq7Iv2',
    };

    // A pact was passed in => we are editing
    if (this.props.participants !== null) {
      data.pactId = this.props.pactId;
      this.props.editPactSave(data);
    } else {
      // we are creating a new pact
      this.props.editPactCreate(data);
    }

    this.props.navigation.pop();
  }

  onDeletePress() {
    this.props.editPactDelete(this.props);
  }

  render() {
    const {
      name,
      description,
      friend,
      notificationStatus,
      notificationTime,
    } = this.props;

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
                value={name}
              />
              <Textbox
                label="DESCRIPTION"
                placeholder="Describe what you will do"
                onChangeText={this.onDescChange}
                value={description}
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

const mapStateToProps = state => {
  return {
    pactId: state.editPact.pactId,
    name: state.editPact.name,
    description: state.editPact.description,
    participants: state.editPact.participants,
  };
};

const mapDispatchToProps = {
  editPactUpdate,
  editPactCreate,
  editPactSave,
  editPactDelete,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditPact);
