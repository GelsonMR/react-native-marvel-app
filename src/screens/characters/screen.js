import React, { Component } from 'react';
import {
  StatusBar,
  Text,
  FlatList,
} from 'react-native';

import InputText from '../../components/InputText';
import COLORS from '../../utilities/colors';
import STYLES from './styles';

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
          renderItem={({ index }) => (<Text>{index}</Text>)}
          contentContainerStyle={STYLES.background}
        />
      </>
    );
  }
}
