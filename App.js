import React from 'react';

import StackNavigator from './app/config/routes';

export default class App extends React.Component {
  componentDidMount() {}

  render() {
    return <StackNavigator />;
  }
}
