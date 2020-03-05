import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import SplashScreen from './screen';

jest.useFakeTimers();

describe('SplashScreen', () => {
  const navigation = {
    reset: () => {},
  };

  it('wait 4 seconds to change screen', () => {
    jest.useFakeTimers();
    renderer.create(<SplashScreen navigation={navigation} />);
    setTimeout(() => {}, 4000);
    jest.runAllTimers();
  });
});
