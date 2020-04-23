import React, { Component, Fragment } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import ModalSelector from 'react-native-modal-selector';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import Textbox from '../components/Textbox';
import RoundButton from '../components/RoundButton';
import RoundSeparator from '../components/RoundSeparator';
import { PRIMARY_COLOR } from '../config/theme';
import TextboxLabel from '../components/TextboxLabel';
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

const tagOptions = [
  {
    name: 'Health',
    id: 0,
    children: [
      {
        name: 'Fitness',
        id: 10,
      },
      {
        name: 'Strength',
        id: 17,
      },
      {
        name: 'Food',
        id: 13,
      },
      {
        name: 'Water',
        id: 15,
      },
      {
        name: 'Sleep',
        id: 16,
      },
      {
        name: 'Meditation',
        id: 18,
      },
    ],
  },
  {
    name: 'Productivity',
    id: 1,
    children: [
      {
        name: 'Work',
        id: 20,
      },
      {
        name: 'School',
        id: 27,
      },
      {
        name: 'Side Project',
        id: 23,
      },
      {
        name: 'Focus',
        id: 24,
      },
    ],
  },
  {
    name: 'Social',
    id: 2,
    children: [
      {
        name: 'Friends',
        id: 30,
      },
      {
        name: 'Family',
        id: 37,
      },
      {
        name: 'Relantionship',
        id: 33,
      },
      {
        name: 'Colleagues',
        id: 34,
      },
    ],
  },
];

type Props = {
  navigation: NavigationStackProp<{}>;
}

type State = {
  pact: Pact;
  isNewPact: boolean;
  friendModalData: Readonly<{}>[];
  chooseFriendIcon: string;
  chooseFriendText: string;
  selectedTags: any[];
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
        periodLength: 7,
        periodTarget: 5,
        privacyLevel: 'private',
        participants: [],
        tags: [],
      },
      isNewPact: !pact,
      friendModalData: [{ key: 0, section: true, label: 'Add Friend' }],
      chooseFriendIcon: 'account-plus',
      chooseFriendText: '',
      selectedTags: [],
    };
  }

  async friendsFetch(): Promise<void> {
    const friends = await auth.getUserFriends();

    if (!friends) {
      return;
    }

    let i = 1;

    friends.forEach((friend): void => {
      this.state.friendModalData.push({ key: i, label: friend.username });
      i += 1;
    });
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

    this.friendsFetch();
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

  setParticipant = (friendPressed: any): void => {
    this.state.pact.participants.pop();
    this.state.pact.participants.push(friendPressed.label);

    this.setState({
      chooseFriendText: friendPressed.label,
      chooseFriendIcon: '',
    });
  };

  onSelectedItemsChange = (selectedTags: any): void => {
    this.setState({ selectedTags });
  };

  onSavePress = (): void => {
    while (this.state.pact.tags.length) {
      this.state.pact.tags.pop();
    }

    this.state.selectedTags.forEach((tagId) => {
      tagOptions.forEach((category) => {
        category.children.forEach((child) => {
          if (child.id === tagId) {
            this.state.pact.tags.push(child.name);
          }
        });
      });
    });

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
              {this.state.isNewPact && <TextboxLabel text="CHOOSE A FRIEND" />}
              {this.state.isNewPact
                && <ModalSelector
                  data={this.state.friendModalData}
                  onChange={this.setParticipant}>
                  <RoundButton
                    mode="outlined"
                    title={this.state.chooseFriendText}
                    icon={this.state.chooseFriendIcon}
                    onPress={(): void => undefined}
                    style={styles.outlineButton}
                  />
                </ModalSelector>
              }
              {this.state.isNewPact
                && <View>
                  <SectionedMultiSelect
                    items={tagOptions}
                    uniqueKey="id"
                    subKey="children"
                    selectText="Choose tags for your pact..."
                    showDropDowns={true}
                    readOnlyHeadings={true}
                    expandDropDowns={true}
                    onSelectedItemsChange={this.onSelectedItemsChange}
                    selectedItems={this.state.selectedTags}
                  />
                </View>
              }
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
