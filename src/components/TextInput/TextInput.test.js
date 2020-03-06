import { TouchableNativeFeedback } from 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import TextInput from './index';

describe('TextInput', () => {
  const onChangeText = jest.fn();

  it('renders correctly', () => {
    renderer.create(<TextInput onChangeText={() => {}} />);
  });

  it('changes inputValue state', () => {
    const wrapper = shallow(<TextInput onChangeText={onChangeText} />);
    wrapper.find('TextInput').simulate('changeText', 'Iron man');
    expect(onChangeText).toHaveBeenCalledWith('Iron man');
  });

  it('clears input value', () => {
    const wrapper = shallow(<TextInput onChangeText={onChangeText} />);
    wrapper.find('TextInput').simulate('changeText', 'Iron man');
    expect(onChangeText).toHaveBeenCalledWith('Iron man');
    wrapper.find(TouchableNativeFeedback).simulate('press');
    expect(onChangeText).toHaveBeenCalledWith('');
  });
});
