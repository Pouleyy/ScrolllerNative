import PropTypes from 'prop-types';
import React, { Component } from 'react';
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
        <SafeAreaView>
          <ImageList />
        </SafeAreaView>
      </Background>
    );
  }
}
