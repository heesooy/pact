import React from 'react';
import {TextInput} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import TextboxLabel from '../TextboxLabel/TextboxLabel';
import styles from './styles';

const Textbox = props => {
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
        theme={{roundness: 30}}
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

export default Textbox;
