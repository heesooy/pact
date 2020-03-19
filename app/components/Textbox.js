import React from 'react';
import { TextInput } from 'react-native-paper';
import {
  StyleSheet,
  View,
} from 'react-native';
import TextboxLabel from './TextboxLabel';

const Textbox = (props) => {
  const {
    secureTextEntry,
    placeholder,
    value,
    onChangeText,
    label,
    keyboardType,
    autoCompleteType,
    style,
    multiline,
    maxLength,
  } = props;

  return (
    <View style={[styles.container, style]}>
      <TextboxLabel text={label} />
      <TextInput
        theme={theme}
        // style={styles.textbox}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        autoCompleteType={autoCompleteType || 'off'}
        autoCapitalize="none"
        keyboardType={keyboardType}
        multiline={multiline}
        mode="outlined"
        maxLength={maxLength}
      />
    </View>
  );
};

const theme = {
  roundness: 30,
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  textbox: {
    paddingRight: 15,
    paddingLeft: 15,
  },
});

export default Textbox;
