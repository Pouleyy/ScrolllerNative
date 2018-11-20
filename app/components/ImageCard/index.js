import PropTypes from 'prop-types';
import React from 'react';
import { ImageBackground, View } from 'react-native';

import Heart from '../Heart';

export default class ImageCard extends React.PureComponent {
  static propTypes = {
    navigation: PropTypes.object,
    media: PropTypes.object,
    actions: PropTypes.object
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
          <Heart media={media} />
        </View>
      </ImageBackground>
    );
  }
}
