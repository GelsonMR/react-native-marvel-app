import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  ScrollView,
  StatusBar,
  FlatList,
  Linking,
  ImageBackground,
} from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';

import Api from '../../api';
import ComicTile from '../../components/ComicTile';
import COLORS from '../../utilities/colors';
import STYLES from './styles';

const defaultAvatar = require('../../../assets/images/default-avatar.png');

const DetailScreen = ({ route }) => {
  const { character } = route.params;
  const [balloonHeight, setBalloonHeight] = useState(0);
  const [comics, setComics] = useState([]);
  const [hasError, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const isImageAvailable = character.thumbnail.path.indexOf('image_not_available') === -1;
  const avatar = { uri: `${character.thumbnail.path}.${character.thumbnail.extension}` };
  const source = isImageAvailable ? avatar : defaultAvatar;
  const comicLink = character.urls.filter((url) => url.type === 'comiclink')[0];

  async function fetchCharacterComics(id) {
    let response;
    setLoading(true);
    setComics([]);
    try {
      response = await Api.MARVEL.getCharacterComics({ id });
      setComics(response.data.data.results);
    } catch (err) {
      setComics([]);
      setError(err);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchCharacterComics(character.id);
  }, []);

  return (
    <ScrollView contentContainerStyle={STYLES.background}>
      <StatusBar
        backgroundColor={COLORS.pageBackground}
        barStyle="dark-content"
      />
      <View style={STYLES.horizontalSpacing}>
        <ImageBackground
          source={source}
          style={STYLES.avatar}
        />
        <View style={STYLES.balloonContainer}>
          <View
            style={[STYLES.balloon, { marginTop: -(balloonHeight / 2) }]}
            onLayout={(event) => {
              const { height } = event.nativeEvent.layout;
              setBalloonHeight(height);
            }}
          >
            <Text style={STYLES.text}>{character.name}</Text>
          </View>
        </View>
        <View style={STYLES.descriptionContainer}>
          <Text style={STYLES.descriptionText}>{character.description}</Text>
        </View>
        <View style={STYLES.comicsTitleContainer}>
          <Text style={STYLES.comicsTitle}>
            {`${character.comics.available} comic${character.comics.available > 1 ? 's' : ''} - `}
          </Text>
          {
            !!comicLink && (
              <TouchableNativeFeedback onPress={() => Linking.openURL(comicLink.url)}>
                <Text style={[STYLES.comicsTitle, STYLES.link]}>View all</Text>
              </TouchableNativeFeedback>
            )
          }

        </View>
      </View>
      <FlatList
        refreshing={isLoading}
        onRefresh={() => fetchCharacterComics(character.id)}
        data={comics}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        ListFooterComponent={() => {
          if (hasError) {
            return (
              <Text style={STYLES.descriptionText}>An error has ocurred, swipe to refresh</Text>
            );
          }
          return <></>;
        }}
        contentContainerStyle={STYLES.comicsListContainer}
        renderItem={({ item }) => {
          const filteredDetail = item.urls.filter((url) => url.type === 'detail')[0];
          const onPress = filteredDetail
            ? (() => Linking.openURL(filteredDetail.url))
            : null;
          return (
            <ComicTile
              name={item.title}
              source={{ uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }}
              style={STYLES.comicTile}
              onPress={onPress}
            />
          );
        }}
      />
      <View style={[STYLES.moreInfoContainer, STYLES.horizontalSpacing]}>
        <Text style={STYLES.text}>For more info visit</Text>
        <TouchableNativeFeedback
          onPress={() => {
            Linking.openURL('https://www.marvel.com/');
          }}
        >
          <Text style={[STYLES.text, STYLES.link, STYLES.marvelLink]}>marvel.com</Text>
        </TouchableNativeFeedback>
        <Text style={[STYLES.text, STYLES.copyrightText]}>© 2020 MARVEL</Text>
      </View>
    </ScrollView>
  );
};

DetailScreen.propTypes = {
  route: PropTypes.objectOf({
    character: PropTypes.object,
  }).isRequired,
};

export default DetailScreen;
