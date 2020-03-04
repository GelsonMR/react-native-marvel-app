import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableNativeFeedback,
  TextInput as RNTextInput,
} from 'react-native';
import PropTypes from 'prop-types';

import STYLES from './styles';

let inputRef;

const TextInput = ({
  value,
  onChangeText,
  style,
  placeholder,
}) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <View style={[STYLES.background, style]}>
      <RNTextInput
        ref={(input) => { inputRef = input; }}
        value={value}
        onChangeText={(text) => {
          setInputValue(text);
          onChangeText(text);
        }}
        placeholder={placeholder}
        style={STYLES.textInput}
      />
      {
        !!inputValue && (
          <TouchableNativeFeedback
            onPress={() => {
              const text = '';
              inputRef.clear();
              setInputValue(text);
              onChangeText(text);
            }}
          >
            <View style={STYLES.buttonContainer}>
              <Text style={STYLES.buttonText}>Clear</Text>
            </View>
          </TouchableNativeFeedback>
        )
      }
    </View>
  );
};

TextInput.propTypes = {
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.number,
      ]),
    ),
  ]),
  placeholder: PropTypes.string,
};

TextInput.defaultProps = {
  value: null,
  onChangeText: () => {},
  style: null,
  placeholder: null,
};

export default TextInput;
