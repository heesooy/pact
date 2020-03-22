import React, {Component} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {Icon} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import _ from 'lodash';
import {BACKGROUND_COLOR} from '../config/theme';
import PactCard from '../components/PactCard';

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
    this.state = {};
  }

  pactsFetch() {
    // const { currentUser } = firebase.auth();
    // const dbRef = firebase.database().ref();
    // dbRef.child('/user-pacts/' + currentUser.uid).on('value', (snapshot) => {
    //   if (!snapshot.exists()) {
    //     // User has no pacts
    //     dispatch({ type: PACTS_FETCH_SUCCESS, payload: null });
    //   } else {
    //     const pactIds = Object.keys(snapshot.val());
    //     // Pipelined fetch all pacts user belongs to
    //     Promise.all(
    //       pactIds.map(id => dbRef.child('/pacts/' + id).once('value')),
    //     ).then((dataSnapshot) => {
    //       const pacts = [];
    //       dataSnapshot.forEach((childSnapshot) => {
    //         const pactId = childSnapshot.key;
    //         const data = childSnapshot.val();
    //         data.pactId = pactId;
    //         pacts.push(data);
    //       });
    //       dispatch({ type: PACTS_FETCH_SUCCESS, payload: pacts });
    //     });
    //   }
    // });
  }

  pactUpdate({prop, value}) {
    // return {
    //   type: PACT_UPDATE,
    //   payload: {prop, value},
    // };
  }

  componentDidMount() {
    this.props.navigation.setParams({addPressed: this.addPressed});
    this.pactsFetch();
  }

  pactPressed = index => {
    // const {pacts} = this.props;

    // Load pact information to the 'Pact' screen
    // _.each(pacts[index], (value, prop) => {
    //   this.pactUpdate({prop, value});
    // });

    this.props.navigation.navigate('Pact');
  };

  addPressed = () => {
    // EditPact screen with no redux state passed in => Create Pact
    this.props.navigation.navigate('EditPact');
  };

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
        data={this.state.pacts}
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

export default Home;
