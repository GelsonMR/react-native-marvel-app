import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Header from './index';

describe('Header', () => {
  const scene = {
    route: {
      name: 'Title',
    },
  };
  const navigation = {
    goBack: () => {},
  };

  it('renders correctly', () => {
    renderer.create(<Header scene={scene} navigation={navigation} />);
  });

  it('renders with previous route correctly', () => {
    renderer.create(<Header scene={scene} navigation={navigation} previous={scene} />);
  });
});
