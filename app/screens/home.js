import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-navigation';

import Background from '../components/Background';
import ImageList from '../components/ImageList';

export default class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  render() {
    return (
      <Background>
        <SafeAreaView style={{ flex: 1 }}>
          <ImageList />
        </SafeAreaView>
      </Background>
    );
  }
}
