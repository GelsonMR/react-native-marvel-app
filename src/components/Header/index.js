import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import STYLES from './styles';

const Header = (props) => {
  const {
    scene: {
      route: {
        name,
      },
    },
  } = props;

  return (
    <>
      <View style={STYLES.background}>
        <Text style={STYLES.text}>{name}</Text>
      </View>
    </>
  );
};

Header.propTypes = {
  scene: PropTypes.objectOf({
    route: PropTypes.objectOf({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Header;
