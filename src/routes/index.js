import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CharactersScreen from '../screens/characters/screen';
import Header from '../components/Header';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ header: Header }}>
      <Stack.Screen name="Characters..." component={CharactersScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
