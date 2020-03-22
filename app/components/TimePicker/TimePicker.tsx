import React, {Component} from 'react';
import DateTimePicker from 'react-native-modal-datetime-picker';
import TextboxLabel from '../TextboxLabel/TextboxLabel';
import RoundButton from '../RoundButton/RoundButton';

import styles from './styles';

// https://www.npmjs.com/package/react-native-modal-datetime-picker
class TimePicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDateTimePickerVisible: false,
    };
  }

  showDateTimePicker = () => {
    this.setState({isDateTimePickerVisible: true});
  };

  hideDateTimePicker = () => {
    this.setState({isDateTimePickerVisible: false});
  };

  handleDatePicked = date => {
    console.log('A date has been picked: ', date);
    this.hideDateTimePicker();
  };

  render() {
    return (
      <>
        <TextboxLabel text="NOTIFICATION TIME" />
        <RoundButton
          mode="outline"
          title="9:00 AM"
          onPress={this.showDateTimePicker}
          style={styles.outlineButton}
        />
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
          mode="time"
          is24Hour={false}
        />
      </>
    );
  }
}

export default TimePicker;
