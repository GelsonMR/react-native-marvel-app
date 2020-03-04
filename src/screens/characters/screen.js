import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StatusBar,
  FlatList,
} from 'react-native';

import InputText from '../../components/TextInput';
import CharacterTile from '../../components/CharacterTile';
import COLORS from '../../utilities/colors';
import STYLES from './styles';
import Api from '../../api';

const defaultAvatar = require('../../../assets/images/default-avatar.png');

const CharactersScreen = () => {
  let flatListRef;
  const [characters, setCharacters] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isAllLoaded, setAllLoaded] = useState(false);
  const [hasError, setError] = useState(null);
  const [onEndReachedCalledDuringMomentum, setEndReachedCalled] = useState(null);

  async function fetchCharacters(params = {}) {
    let response;
    setLoading(true);
    setError(null);
    if (!params.offset) {
      if (flatListRef) {
        flatListRef.scrollToOffset({ animated: false, offset: 0 });
      }
      setCharacters([]);
    }
    try {
      response = await Api.MARVEL.getCharacters(params);
      const { offset, count, total } = response.data.data;
      setAllLoaded(offset + count === total);
      setCharacters(
        params.offset
          ? [...characters, ...response.data.data.results]
          : response.data.data.results,
      );
    } catch (err) {
      setCharacters([]);
      setError(err);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <>
      <StatusBar
        backgroundColor={COLORS.pageBackground}
        barStyle="dark-content"
      />
      <InputText
        placeholder="Search by character name"
        style={STYLES.inputText}
      />
      <FlatList
        ref={(ref) => { flatListRef = ref; }}
        refreshing={isLoading}
        onRefresh={() => fetchCharacters()}
        onEndReached={async () => {
          if (
            !isLoading
            && !onEndReachedCalledDuringMomentum
            && characters.length
            && !isAllLoaded
          ) {
            await fetchCharacters({ offset: characters.length });
          }
        }}
        onEndReachedThreshold={0.5}
        onMomentumScrollBegin={() => { setEndReachedCalled(false); }}
        data={characters}
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
                !(index % 2) ? STYLES.tileLeft : null,
              ]}
            />
          );
        }}
        scrollEnabled={!isAllLoaded}
        ListFooterComponent={() => {
          if (hasError) {
            return (
              <View style={STYLES.footer}>
                <Text style={STYLES.text}>An error has ocurred</Text>
              </View>
            );
          }
          if (isLoading) {
            return (
              <View style={STYLES.footer}>
                {(
                  isLoading
                ) && (
                  [...Array(characters.length ? 2 : 3)].map((item, index) => (
                    <View style={STYLES.row} index={index.toString()}>
                      <CharacterTile
                        name="Loading"
                        style={[
                          STYLES.tile,
                          STYLES.tileLeft,
                        ]}
                      />
                      <CharacterTile
                        name="Loading"
                        style={STYLES.tile}
                      />
                    </View>
                  ))
                )}
              </View>
            );
          }
          return (
            <View style={STYLES.footer}>
              <View style={STYLES.balloon}>
                <Text style={STYLES.text}>Fim</Text>
              </View>
            </View>
          );
        }}
        numColumns={2}
        contentContainerStyle={STYLES.background}
      />
    </>
  );
};

export default CharactersScreen;
