import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Movies } from './src/screens/Movies';
import configureStore from './src/redux/store';

const Stack = createNativeStackNavigator();
const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Movies" component={Movies} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
