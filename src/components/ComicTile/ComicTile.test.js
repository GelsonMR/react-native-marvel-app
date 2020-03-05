import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import ComicTile from './index';

describe('ComicTile', () => {
  it('renders correctly', () => {
    renderer.create(<ComicTile name="Comic" />);
  });

  it('renders with image correctly', () => {
    renderer.create(<ComicTile name="Comic" source={require('../../../assets/images/default-avatar.png')} />);
  });

  it('renders with onPress correctly', () => {
    renderer.create(<ComicTile name="Comic" onPress={() => {}} />);
  });
});
