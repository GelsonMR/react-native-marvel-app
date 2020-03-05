import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import CharacterTile from './index';

describe('CharacterTile', () => {
  it('renders correctly', () => {
    renderer.create(<CharacterTile name="Hero" />);
  });

  it('renders with image correctly', () => {
    renderer.create(<CharacterTile name="Hero" source={require('../../../assets/images/default-avatar.png')} />);
  });

  it('renders with onPress correctly', () => {
    renderer.create(<CharacterTile name="Hero" onPress={() => {}} />);
  });

});
