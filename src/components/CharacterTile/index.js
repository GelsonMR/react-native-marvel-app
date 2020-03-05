import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';

import STYLES from './styles';

const CharacterTile = ({
  source,
  name,
  style,
  onPress,
}) => {
  const content = (
    <>
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
    </>
  );
  return (
    <View style={[STYLES.container, style]}>
      {
        onPress
          ? <TouchableNativeFeedback onPress={onPress}>{content}</TouchableNativeFeedback>
          : content
      }
    </View>
  );
};

CharacterTile.propTypes = {
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
  onPress: PropTypes.func,
};

CharacterTile.defaultProps = {
  style: null,
  source: null,
  onPress: null,
};

export default CharacterTile;
