import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { SearchBar } from 'react-native-elements';

import Background from '../components/Background';
import ImageList from '../components/ImageList';

export default class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  render() {
    return (
      <React.Fragment>
        <SearchBar
          round
          searchIcon={{ size: 24 }}
          placeholder='Type Here...' />
        <Background>
          <ImageList />
        </Background>
      </React.Fragment>
    );
  }
}
