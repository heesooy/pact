import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { Divider } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationStackProp } from 'react-navigation-stack';
import { BACKGROUND_COLOR, PRIMARY_COLOR } from '../config/theme';
import CheckinDialog from '../components/CheckinDialog';
import ParticipantActivity from '../components/ParticipantActivity';
import TextboxLabel from '../components/TextboxLabel';
import Checkin from '../components/Checkin';
import waveBg from '../../assets/images/waveBG.png';
import { Pact } from '../lib/types';
import auth from '../lib/auth';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  whiteContainer: {
    backgroundColor: BACKGROUND_COLOR,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
    paddingTop: 15,
  },
  bgImageContainer: {
    width: screenWidth,
    height: (screenWidth * 137) / 1502,
    backgroundColor: BACKGROUND_COLOR,
  },
  bgContainer: {
    flex: 1,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 70,
  },
  todayLabel: {
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  todayLabelText: {
    color: PRIMARY_COLOR,
    fontSize: 13,
    marginBottom: -5,
    marginRight: 5,
  },
  description: {
    color: '#58595B',
    fontSize: 18,
    paddingLeft: 25,
    paddingRight: 25,
    textAlign: 'center',
  },
  headerRight: {
    marginRight: 20,
  },
  divider: {
    marginTop: 10,
    marginBottom: 10,
    marginRight: 25,
    marginLeft: 25,
    height: 2,
    backgroundColor: '#EEF8F7',
  },
  textbox: {
    marginLeft: 40,
  },
  parentView: {
    flex: 1,
    backgroundColor: '#EEF8F7',
  },
});

type Props = {
  navigation: NavigationStackProp<{}>;
  name: string;
  description: string;
}

type State = {
  pact: Pact;
  checkins: any[];
  newCheckin: string;
}

class PactInfo extends Component<Props, State> {
  static navigationOptions = ({ navigation }: Props): {
    headerRight: () => JSX.Element;
    title: string;
  } => ({
    title: navigation.getParam('title', 'Pact'),
    headerRight: (): JSX.Element => (
      <TouchableOpacity
        onPress={navigation.getParam('editPressed')}
        style={styles.headerRight}>
        <Icon name="edit" type="material" color="#7E7E7E" />
      </TouchableOpacity>
    ),
  });

  constructor(props: Props) {
    super(props);

    this.state = {
      pact: this.props.navigation.getParam('pact'),
    };
  }

  componentDidMount(): void {
    this.props.navigation.setParams({
      title: this.state.pact.title,
      editPressed: this.editPressed,
    });

    this.checkinFetch();
  }

  componentDidUpdate(prevProps: Props): void {
    if (!prevProps.isFocused && this.props.isFocused) {
      this.checkinFetch();
    }
  }

  checkinFetch = async (): Promise<void> => {
    const checkins = await auth.getPactCheckins(this.state.pact.pactId);

    if (!checkins) {
      return;
    }

    this.setState({ checkins });
  }

  editPressed = (): void => {
    this.props.navigation.navigate('EditPact', { pact: this.state.pact });
  };

  onNewCheckinChange = (newCheckin: string): void => {
    this.setState({ newCheckin });
  }

  onCheckinSubmit = async (): void => {
    const { pact, newCheckin } = this.state;

    if (newCheckin) {
      await auth.createPactCheckin(pact.pactId, newCheckin);
      this.checkinFetch();
    }
  }

  renderCheckin = ({ item, index }: {item: any; index: number}): JSX.Element => (
    <Checkin checkin={item} />
  );

  render(): JSX.Element {
    const { description, participants, tags } = this.state.pact;

    const numCheckins = {};

    if (this.state.checkins) {
      this.state.checkins.forEach((checkin: any) => {
        if (checkin.username === participants[0]) {
          numCheckins[participants[0]] = (numCheckins[participants[0]] || 0) + 1;
        } else if (participants.length > 1 && checkin.username === participants[1]) {
          numCheckins[participants[1]] = (numCheckins[participants[1]] || 0) + 1;
        }
      });
    }

    return (
      <View style={styles.parentView}>
        <View style={styles.whiteContainer}>
          <ParticipantActivity
            label={participants[0]}
            totalCheckins={numCheckins[participants[0]] || 0}
          />

          {participants.length > 1
            && <ParticipantActivity
              label={participants[1]}
              totalCheckins={numCheckins[participants[1]] || 0}
            />
          }

          <Divider style={styles.divider} />
          <Text style={styles.description}>{description}</Text>
          {(tags && tags.length > 0) && <Text style={styles.description}>{`\nTags: ${tags.join(', ')}`}</Text>}
        </View>
        <Image
          style={styles.bgImageContainer}
          source={waveBg}
          resizeMode="contain"
        />
        <View style={styles.bgContainer}>
          <TextboxLabel text="FEED" />
          <FlatList
            contentContainerStyle={styles.container}
            data={this.state.checkins}
            renderItem={this.renderCheckin}
            keyExtractor={(item: any): string => item.event_id}
          />
        </View>
        <CheckinDialog onSubmit={this.onCheckinSubmit} onChangeText={this.onNewCheckinChange} />
      </View>
    );
  }
}

export default withNavigationFocus(PactInfo);
