import React from 'react';
import { View, Text } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';

import STYLES from './styles';

const Header = (props) => {
  const {
    scene: {
      route: {
        name,
      },
    },
    navigation,
    previous,
  } = props;

  return (
    <>
      <View style={STYLES.wrapper}>
        {
          previous
            ? (
              <TouchableNativeFeedback onPress={navigation.goBack}>
                <View style={STYLES.background}>
                  <Text style={STYLES.text}>{'< BACK'}</Text>
                </View>
              </TouchableNativeFeedback>
            )
            : (
              <View style={STYLES.background}>
                <Text style={STYLES.text}>{name}</Text>
              </View>
            )
        }
      </View>
    </>
  );
};

Header.propTypes = {
  scene: PropTypes.shape({
    route: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
  previous: PropTypes.shape({
    route: PropTypes.object,
  }),
};

Header.defaultProps = {
  previous: undefined,
};

export default Header;
