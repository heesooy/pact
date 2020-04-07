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
import RoundSeparator from '../components/RoundSeparator';
import { PRIMARY_COLOR } from '../config/theme';
import TextboxLabel from '../components/TextboxLabel';
import TimePicker from '../components/TimePicker';
import { Pact } from '../lib/types';
import auth from '../lib/auth';

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
  pact: Pact;
  isNewPact: boolean;
}

class EditPact extends Component<Props, State> {
  static navigationOptions = ({ navigation }: Props): { title: string } => ({
    title: navigation.getParam('title', 'Create Pact'),
  });

  constructor(props: Props) {
    super(props);

    const pact = this.props.navigation.getParam('pact');

    this.state = {
      pact: pact !== undefined ? pact : {
        title: '',
        description: '',
        streak: 1,
        periodLength: 7,
        periodTarget: 5,
        privacyLevel: 'private',
        participants: ['asherd', 'asherdale'],
      },
      isNewPact: !pact,
    };
  }

  async createPactSave(pact: Pact): Promise<void> {
    if (!pact.title || !pact.description) {
      return;
    }

    await auth.createPact(pact);
    this.props.navigation.navigate('Home');
  }

  async editPactSave(pact: Pact): Promise<void> {
    if (!pact.title || !pact.description) {
      return;
    }

    await auth.updatePact(pact);
    this.props.navigation.navigate('Home');
  }

  componentDidMount(): void {
    this.props.navigation.setParams({
      title: this.state.isNewPact ? 'Create Pact' : 'Edit Pact',
    });
  }

  onTitleChange = (title: string): void => {
    const { pact } = this.state;
    pact.title = title;
    this.setState({ pact });
  };

  onDescChange = (description: string): void => {
    const { pact } = this.state;
    pact.description = description;
    this.setState({ pact });
  };

  onFriendPress = (): void => {
    this.props.navigation.navigate('AddFriends');
  };

  onSavePress = (): void => {
    if (this.state.isNewPact) {
      this.createPactSave(this.state.pact);
    } else {
      this.editPactSave(this.state.pact);
    }
  };

  onDeletePress = async (): Promise<void> => {
    await auth.deletePact(this.state.pact);
    this.props.navigation.navigate('Home');
  };

  render(): JSX.Element {
    const { title, description } = this.state.pact;

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
                onChangeText={this.onTitleChange}
                value={title}
              />
              <Textbox
                label="DESCRIPTION"
                placeholder="Describe what you will do"
                onChangeText={this.onDescChange}
                value={description}
              />
              <TextboxLabel text="CHOOSE A FRIEND" />
              <RoundButton
                mode="outlined"
                title=""
                onPress={this.onFriendPress}
                style={styles.outlineButton}
              />
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
              {!this.state.isNewPact
                && <RoundButton
                  mode="outlined"
                  title="DELETE"
                  onPress={this.onDeletePress}
                />
              }
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}

export default EditPact;
