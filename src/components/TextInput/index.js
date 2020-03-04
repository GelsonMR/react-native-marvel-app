import React from 'react';
import {
  View,
  Text,
  TouchableNativeFeedback,
  TextInput as RNTextInput,
} from 'react-native';
import PropTypes from 'prop-types';

import STYLES from './styles';

const TextInput = ({
  style,
  placeholder,
}) => (
  <View style={[STYLES.background, style]}>
    <View style={STYLES.placeholderContainer}>
      <Text style={STYLES.placeholder}>{placeholder}</Text>
    </View>
    <RNTextInput
      style={STYLES.textInput}
    />
    <TouchableNativeFeedback>
      <View style={STYLES.buttonContainer}>
        <Text style={STYLES.buttonText}>Clear</Text>
      </View>
    </TouchableNativeFeedback>
  </View>
);

TextInput.propTypes = {
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
  style: null,
  placeholder: null,
};

export default TextInput;
