import PropTypes from 'prop-types';
import React from 'react';
import { Image } from 'react-native';

import HeartImage from '../../static/images/heart.png';
import styled from 'styled-components';

const LikeTouchableOpacity = styled.TouchableOpacity``;

export default class Heart extends React.PureComponent {
  static propTypes = {
    navigation: PropTypes.object,
    media: PropTypes.object,
    actions: PropTypes.object
  };

  handleFavButtonPress = media => {
    //Need to update the Redux state RLY
    media.isFavorite = !media.isFavorite;
    this.forceUpdate();
  };

  render() {
    const { media } = this.props;
    return (
      <LikeTouchableOpacity onPress={() => this.handleFavButtonPress(media)}>
        <Image
          source={HeartImage}
          style={
            media.isFavorite
              ? { width: 25, height: 25, tintColor: 'red' }
              : { width: 25, height: 25, tintColor: 'white' }
          }
        />
      </LikeTouchableOpacity>
    );
  }
}
