import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StatusBar,
  FlatList,
} from 'react-native';
import { useDebouncedCallback } from 'use-debounce';
import PropTypes from 'prop-types';

import InputText from '../../components/TextInput';
import CharacterTile from '../../components/CharacterTile';
import COLORS from '../../utilities/colors';
import STYLES from './styles';
import Api from '../../api';

const defaultAvatar = require('../../../assets/images/default-avatar.png');

const CharactersScreen = ({ navigation }) => {
  let flatListRef;
  const [characters, setCharacters] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isAllLoaded, setAllLoaded] = useState(false);
  const [hasError, setError] = useState(null);
  const [onEndReachedCalledDuringMomentum, setEndReachedCalled] = useState(null);

  async function fetchCharacters(params = {}) {
    let response;
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

  const [debouncedFetchCharacters] = useDebouncedCallback(
    (params) => {
      fetchCharacters(params);
    },
    500,
  );

  const prepareFetchCharacters = (params) => {
    setLoading(true);
    setError(null);
    debouncedFetchCharacters(params);
  };

  useEffect(() => {
    prepareFetchCharacters();
  }, []);

  return (
    <>
      <StatusBar
        backgroundColor={COLORS.pageBackground}
        barStyle="dark-content"
      />
      <InputText
        placeholder="Search by character name"
        onChangeText={(text) => {
          prepareFetchCharacters(text ? { nameStartsWith: text } : {});
        }}
        style={STYLES.inputText}
      />
      <FlatList
        ref={(ref) => { flatListRef = ref; }}
        refreshing={isLoading}
        onRefresh={() => prepareFetchCharacters()}
        onEndReached={async () => {
          if (
            !isLoading
            && !onEndReachedCalledDuringMomentum
            && characters.length
            && !isAllLoaded
          ) {
            await prepareFetchCharacters({ offset: characters.length });
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
              onPress={() => {
                navigation.push('Detail', {
                  character: item,
                });
              }}
              style={[
                STYLES.tile,
                !(index % 2) ? STYLES.tileLeft : null,
              ]}
            />
          );
        }}
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
                  [...Array(characters.length ? 2 : 3)].map(() => (
                    <View style={STYLES.row} key={Math.random()}>
                      {
                        [...Array(2)].map((item, index) => (
                          <CharacterTile
                            name="Loading"
                            key={Math.random()}
                            style={[
                              STYLES.tile,
                              index ? null : STYLES.tileLeft,
                            ]}
                          />
                        ))
                      }
                    </View>
                  ))
                )}
              </View>
            );
          }
          if (!characters.length) {
            return (
              <View style={STYLES.footer}>
                <Text style={STYLES.text}>No characters found</Text>
              </View>
            );
          }
          return (
            <View style={STYLES.footer}>
              <View style={STYLES.balloon}>
                <Text style={STYLES.text}>The end</Text>
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

CharactersScreen.propTypes = {
  navigation: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default CharactersScreen;
