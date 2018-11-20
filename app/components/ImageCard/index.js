import PropTypes from 'prop-types';
import React from 'react';
import { ImageBackground, View, Image } from 'react-native';

import styled from 'styled-components';
import Heart from '../../static/images/heart.png';

const LikeTouchableOpacity = styled.TouchableOpacity``;

export default class ImageCard extends React.PureComponent {
  static propTypes = {
    navigation: PropTypes.object,
    media: PropTypes.object
  };

  render() {
    const { media } = this.props;

    return (
      <ImageBackground
        source={{ uri: media.url }}
        style={{ width: '100%', height: 300 }}
        resizeMode={'stretch'}
      >
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 10,
            bottom: 10,
            justifyContent: 'flex-end',
            alignItems: 'flex-end'
          }}
        >
          <LikeTouchableOpacity
          //onPress={() => this.handleFavButtonPress(media)}
          >
            <Image
              source={Heart}
              style={{ width: 25, height: 25, tintColor: 'red' }}
            />
          </LikeTouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
