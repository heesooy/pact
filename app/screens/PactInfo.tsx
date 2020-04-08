import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { Divider } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationStackProp } from 'react-navigation-stack';
import { BACKGROUND_COLOR, PRIMARY_COLOR } from '../config/theme';
import CheckinDialog from '../components/CheckinDialog';
import ActivityCircles from '../components/ActivityCircles';
import TextboxLabel from '../components/TextboxLabel';
import RoundedCard from '../components/RoundedCard';
import waveBg from '../../assets/images/waveBG.png';
import { Pact } from '../lib/types';

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
  }

  editPressed = (): void => {
    this.props.navigation.navigate('EditPact', { pact: this.state.pact });
  };

  render(): JSX.Element {
    return (
      <View style={styles.parentView}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.whiteContainer}>
            <View style={styles.todayLabel}>
              <Text style={styles.todayLabelText}>TODAY</Text>
              <Icon
                name="chevron-down"
                type="material-community"
                color={PRIMARY_COLOR}
              />
            </View>
            <ActivityCircles label="Person 1" />
            <ActivityCircles label="Person 2" />
            <Divider
              style={styles.divider}
            />
            <Text style={styles.description}>{this.props.description}</Text>
          </View>
          <Image
            style={styles.bgImageContainer}
            source={waveBg}
            resizeMode="contain"
          />
          <View style={styles.bgContainer}>
            <TextboxLabel text="FEED" />
            <RoundedCard text="Text" onPress={(): void => undefined} />
            <RoundedCard text="Text" onPress={(): void => undefined} />
            <RoundedCard text="Text" onPress={(): void => undefined} />
          </View>
        </ScrollView>
        <CheckinDialog onChangeText={(): void => undefined} />
      </View>
    );
  }
}

export default PactInfo;
