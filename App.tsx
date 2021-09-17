import React from 'react';
import { Provider } from 'react-redux';
import { Movies } from './src/screens/Movies';
import configureStore from './src/redux/store';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <Movies />
    </Provider>
  );
}
