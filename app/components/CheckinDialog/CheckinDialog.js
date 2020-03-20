import React from 'react';
import {FAB, Button, Paragraph, Dialog, Portal} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import Textbox from '../Textbox/Textbox';
import {PRIMARY_COLOR} from '../../config/theme';
import styles from './styles';

class CheckinDialog extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    visible: false,
  };

  _showDialog = () => this.setState({visible: true});

  _hideDialog = () => this.setState({visible: false});

  render() {
    return (
      <View>
        <FAB
          style={styles.fab}
          icon="check"
          label="CHECK IN"
          onPress={this._showDialog}
          color="#FFF"
        />
        <Portal>
          <Dialog visible={this.state.visible} onDismiss={this._hideDialog}>
            <Dialog.Title style={{marginBottom: 10}}>Check In</Dialog.Title>
            <Dialog.Content>
              <Textbox
                placeholder="Describe what you did for your pact today..."
                onChangeText={this.props.onChangeText}
                multiline
                maxLength={144}
              />
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={this._hideDialog} style={styles.button}>
                Done
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    );
  }
}

export default CheckinDialog;
