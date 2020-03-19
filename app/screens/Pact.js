import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Icon, Button, Paragraph, Dialog, Portal} from 'react-native-elements';
import {FAB, Divider} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';
import _ from 'lodash';
import RoundButton from '../components/RoundButton';
import {BACKGROUND_COLOR, PRIMARY_COLOR} from '../config/theme';
import CheckinDialog from '../components/CheckinDialog';
import ActivityCircles from '../components/ActivityCircles';
import {pactUpdate, editPactUpdate} from '../actions';
import TextboxLabel from '../components/TextboxLabel';
import RoundedCard from '../components/RoundedCard';

class Pact extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('title', 'Pact'),
      headerRight: () => (
        <TouchableOpacity
          onPress={navigation.getParam('editPressed')}
          style={{marginRight: 20}}>
          <Icon name="edit" type="material" color="#7E7E7E" />
        </TouchableOpacity>
      ),
    };
  };

  constructor(props) {
    super(props);
    this.editPressed = this.editPressed.bind(this);
  }

  componentDidMount() {
    this.props.navigation.setParams({
      title: this.props.name,
      editPressed: this.editPressed,
    });
  }

  editPressed() {
    const {navigation, pactId, name, description, participants} = this.props;

    const pactInfo = {
      pactId,
      name,
      description,
      participants,
    };
    // Load pact information to edit screen
    _.each(pactInfo, (value, prop) => {
      this.props.editPactUpdate({prop, value});
    });

    navigation.navigate('EditPact');
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#EEF8F7'}}>
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
              style={{
                marginTop: 10,
                marginBottom: 10,
                marginRight: 25,
                marginLeft: 25,
                height: 2,
                backgroundColor: '#EEF8F7',
              }}
            />
            <Text style={styles.description}>{this.props.description}</Text>
          </View>
          <Image
            style={styles.bgImageContainer}
            source={require('../../assets/images/waveBG.png')}
            resizeMode="contain"
          />
          <View style={styles.bgContainer}>
            <TextboxLabel text="FEED" style={{marginLeft: 40}} />
            <RoundedCard text="Text" onPress={() => null} />
            <RoundedCard text="Text" onPress={() => null} />
            <RoundedCard text="Text" onPress={() => null} />
          </View>
        </ScrollView>
        <CheckinDialog />
      </View>
    );
  }
}

Pact.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

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
});

const mapStateToProps = state => {
  return {
    pactId: state.pact.pactId,
    name: state.pact.name,
    description: state.pact.description,
    participants: state.pact.participants,
  };
};

const mapDispatchToProps = {
  pactUpdate,
  editPactUpdate,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pact);
