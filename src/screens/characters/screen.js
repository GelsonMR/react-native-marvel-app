import React, { Component } from 'react';
import {
  StatusBar,
  FlatList,
} from 'react-native';

import InputText from '../../components/InputText';
import CharacterTile from '../../components/CharacterTile';
import COLORS from '../../utilities/colors';
import STYLES from './styles';

const defaultAvatar = require('../../../assets/images/default-avatar.png');

export default class CharactersScreen extends Component {
  render() {
    return (
      <>
        <StatusBar
          backgroundColor={COLORS.pageBackground}
          barStyle="dark-content"
        />
        <InputText style={STYLES.inputText} />
        <FlatList
          data={[]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ index, item }) => {
            const isImageAvailable = item.thumbnail.path.indexOf('image_not_available') === -1;
            const avatar = { uri: `${item.thumbnail.path}.${item.thumbnail.extension}` };
            const source = isImageAvailable ? avatar : defaultAvatar;

            return (
              <CharacterTile
                name={item.name}
                source={source}
                style={[
                  STYLES.tile,
                  index % 2 && STYLES.tileRight,
                ]}
              />
            );
          }}
          numColumns={2}
          contentContainerStyle={STYLES.background}
        />
      </>
    );
  }
}
