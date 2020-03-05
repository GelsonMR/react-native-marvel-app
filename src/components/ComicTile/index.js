import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';

import STYLES from './styles';

const ComicTile = ({
  source,
  name,
  style,
  onPress,
}) => {
  const content = (
    <>
      <View style={STYLES.container}>
        {source && (
          <Image
            source={source}
            style={[STYLES.image]}
            resizeMode="cover"
          />
        )}
      </View>
      <Text style={STYLES.text}>{name}</Text>
    </>
  );
  return (
    <View style={[STYLES.wrapper, style]}>
      {
        onPress
          ? <TouchableNativeFeedback onPress={onPress}>{content}</TouchableNativeFeedback>
          : content
      }
    </View>
  );
};

ComicTile.propTypes = {
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

ComicTile.defaultProps = {
  style: null,
  source: null,
  onPress: null,
};

export default ComicTile;
