import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import StackNavigator from './app/config/routes';
import { persistor, store } from './app/config/store';

import { PersistGate } from 'redux-persist/lib/integration/react';

import { Text } from 'react-native';

export default class App extends React.Component {
  render() {
    // Do a function to purge every 24 or 48h
    // persistor.purge()
    return (
      <Provider store={store}>
        <PersistGate loading={<Text>Loading</Text>} persistor={persistor}>
          <StatusBar barStyle="dark-content" />
          <StackNavigator />
        </PersistGate>
      </Provider>
    );
  }
}
