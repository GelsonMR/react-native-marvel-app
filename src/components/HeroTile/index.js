import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import STYLES from './styles';

const HeroTile = ({
  source,
  name,
  style,
}) => (
  <View style={[STYLES.container, style]}>
    {source && (
      <Image
        source={source}
        style={STYLES.image}
        resizeMode="cover"
      />
    )}
    <View style={STYLES.balloon}>
      <Text style={STYLES.text}>{name}</Text>
    </View>
  </View>
);

HeroTile.propTypes = {
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
  source: PropTypes.oneOfType([
    PropTypes.shape({
      uri: PropTypes.string,
    }),
    PropTypes.node,
  ]),
  name: PropTypes.string.isRequired,
};

HeroTile.defaultProps = {
  style: null,
  source: null,
};

export default HeroTile;
