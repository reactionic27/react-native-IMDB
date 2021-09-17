import React from 'react';
import { Provider } from 'react-redux';
import { Users } from './src/screens/Users';
import configureStore from './src/redux/store';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <Users />
    </Provider>
  );
}
