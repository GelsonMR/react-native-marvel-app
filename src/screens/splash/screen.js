import React from 'react';
import {
  Text,
  View,
  Image,
  StatusBar,
} from 'react-native';
import PropTypes from 'prop-types';

import STYLES from './styles';
import COLORS from '../../utilities/colors';

const marvelLogo = require('../../../assets/images/marvel-logo.png');

const SplashScreen = ({ navigation }) => {
  setTimeout(() => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Characters' }],
    });
  }, 4000);

  return (
    <>
      <StatusBar
        backgroundColor={COLORS.marvelPrimary}
        barStyle="light-content"
      />
      <View style={STYLES.background}>
        <Image
          source={marvelLogo}
          style={STYLES.image}
          resizeMode="contain"
        />
        <View style={STYLES.credits}>
          <Text style={STYLES.creditsText}>Feito por Gelson</Text>
          <Text style={[STYLES.creditsText, STYLES.copyright]}>© 2020 MARVEL</Text>
        </View>
      </View>
    </>
  );
};

SplashScreen.propTypes = {
  navigation: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default SplashScreen;
