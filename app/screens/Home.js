import React, {Component} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {Icon} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import _ from 'lodash';
import {BACKGROUND_COLOR} from '../config/theme';
import PactCard from '../components/PactCard';
import {pactsFetch, pactUpdate} from '../actions';

class Home extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Your Pacts',
      headerRight: () => (
        <TouchableOpacity
          onPress={navigation.getParam('addPressed')}
          style={{marginRight: 20}}>
          <Icon name="add" type="material" color="#7E7E7E" />
        </TouchableOpacity>
      ),
    };
  };

  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
    this.pactPressed = this.pactPressed.bind(this);
    this.addPressed = this.addPressed.bind(this);
  }

  componentDidMount() {
    this.props.navigation.setParams({addPressed: this.addPressed});

    this.props.pactsFetch();
  }

  pactPressed(index) {
    const {navigation, pacts} = this.props;

    // Load pact information to the 'Pact' screen
    _.each(pacts[index], (value, prop) => {
      this.props.pactUpdate({prop, value});
    });

    navigation.navigate('Pact');
  }

  addPressed() {
    const {navigation} = this.props;
    // EditPact screen with no redux state passed in => Create Pact
    navigation.navigate('EditPact');
  }

  renderItem({item, index}) {
    return (
      <PactCard
        onPress={() => this.pactPressed(index)}
        title={item.name}
        subtitle={item.description}
      />
    );
  }

  render() {
    return (
      <FlatList
        contentContainerStyle={styles.container}
        data={this.props.pacts}
        renderItem={this.renderItem}
        keyExtractor={item => item.pactId}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: BACKGROUND_COLOR,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
  },
});

const mapStateToProps = state => {
  return {
    pacts: state.home.pacts,
  };
};

const mapDispatchToProps = {
  pactsFetch,
  pactUpdate,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
