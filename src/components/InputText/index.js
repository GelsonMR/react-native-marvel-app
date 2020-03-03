import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import STYLES from './styles';

const InputText = ({
  style,
}) => (
  <View
    style={[STYLES.background, style]}
  />
);

InputText.propTypes = {
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
};

InputText.defaultProps = {
  style: null,
};

export default InputText;
