import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import Api from '../../api';

import CharactersScreen from './screen';

const characterMock = require('../../../mocks/charactersSuccessResponse.json');

describe('CharactersScreen', () => {
  const navigation = {
    push: () => {},
  };

  it('renders correctly', () => {
    renderer.create(<CharactersScreen navigation={navigation} />);
  });

  it('loads characters', () => {
    jest.useFakeTimers();
    mount(<CharactersScreen navigation={navigation} />);
    jest.runAllTimers();
  });

  it('fails loading characters', () => {
    Api.MARVEL.getCharacters = () => {
      throw {};
    };
    jest.useFakeTimers();
    const wrapper = mount(<CharactersScreen navigation={navigation} />);
    jest.runAllTimers();
  });

  it('reaches end of list with error', () => {
    Api.MARVEL.getCharacters = () => {
      throw {};
    };
    const wrapper = mount(<CharactersScreen navigation={navigation} />);
    wrapper.find('FlatList').prop('onEndReached')();
  });

  it('filters list by name', () => {
    const wrapper = shallow(<CharactersScreen navigation={navigation} />);
    wrapper.find('TextInput').simulate('changeText', 'Iron man');
    wrapper.find('TextInput').simulate('changeText', '');
  });
  
  it('refreshes FlatList', () => {
    const wrapper = shallow(<CharactersScreen navigation={navigation} />);
    wrapper.find('FlatList').simulate('refresh');
  });

  it('triggers onMomentumScrollBegin and onEndReached of FlatList', () => {
    Api.MARVEL.getCharacters = () => characterMock;
    jest.useFakeTimers();
    const wrapper = mount(<CharactersScreen navigation={navigation} />);
    jest.runAllTimers();
    wrapper.update();
    wrapper.find('FlatList').prop('onMomentumScrollBegin')();
    wrapper.find('FlatList').prop('onEndReached')();
  });

  // it('fetches characters when reaching the end of the list', () => {
  //   jest.useFakeTimers();
  //   const wrapper = mount(<CharactersScreen navigation={navigation} />);
  //   jest.runAllTimers();
  //   wrapper.update()
  //   console.log(wrapper.find('FlatList').prop('data'))
  //   console.log(wrapper.find('FlatList').prop('refreshing'))
  //   wrapper.find('FlatList').prop('onMomentumScrollBegin')();
  //   wrapper.find('FlatList').prop('onEndReached')();
  //   wrapper.update()
  //   console.log(wrapper.find('FlatList').prop('refreshing'))
  //   console.log(wrapper.find('FlatList').debug())
  // });
  
  it('presses CharacterTile', () => {
    Api.MARVEL.getCharacters = () => characterMock;
    jest.useFakeTimers();
    const wrapper = mount(<CharactersScreen navigation={navigation} />);
    jest.runAllTimers();
    wrapper.update()
    wrapper.find('CharacterTile').first().prop('onPress')();
  });
});
