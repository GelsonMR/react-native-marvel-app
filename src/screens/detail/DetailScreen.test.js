import { TouchableNativeFeedback } from 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import Api from '../../api';

import DetailScreen from './screen';
const characterMock = require('../../../mocks/charactersSuccessResponse.json');
const comicsMock = require('../../../mocks/characterComicsSuccessResponse.json');

describe('DetailScreen', () => {
  const route = {
    params: {
      character: characterMock.data.data.results[0],
    },
  };

  it('renders correctly', () => {
    renderer.create(<DetailScreen route={route} />);
  });

  it('renders default avatar', () => {
    route.params.character.thumbnail.path = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available';
    renderer.create(<DetailScreen route={route} />);
  });

  it('renders "1 comic" text', () => {
    route.params.character.comics.available = 1;
    renderer.create(<DetailScreen route={route} />);
  });

  it('loads character comics', () => {
    jest.useFakeTimers();
    mount(<DetailScreen route={route} />);
    jest.runAllTimers();
  });

  it('fails loading character comics', () => {
    Api.MARVEL.getCharacterComics = () => {
      throw {};
    };
    mount(<DetailScreen route={route} />);
  });

  it('fails loading character comics', () => {
    shallow(<DetailScreen route={route} />).find('[onLayout]').simulate('layout', {
      nativeEvent: {
        layout: {
          width: 0,
          height: 0,
        },
      },
    });
  });
  
  it('opens View All URL', () => {
    const wrapper = shallow(<DetailScreen route={route} />);
    wrapper.find('Text[children="View all"]').parent().simulate('press');
  });
  
  it('opens marvel.com URL', () => {
    const wrapper = shallow(<DetailScreen route={route} />);
    wrapper.find('Text[children="marvel.com"]').parent().simulate('press');
  });
  
  it('refreshes FlatList', () => {
    const wrapper = shallow(<DetailScreen route={route} />);
    wrapper.find('FlatList').simulate('refresh');
  });
  
  it('presses ComicTile', () => {
    comicsMock.data.data.results[1].urls = [];
    Api.MARVEL.getCharacterComics = () => comicsMock;
    jest.useFakeTimers();
    const wrapper = mount(<DetailScreen route={route} />);
    jest.runAllTimers();
    wrapper.update()
    wrapper.find('ComicTile').first().prop('onPress')();
    wrapper.find('ComicTile').at(2).prop('onPress')();
  });
});
