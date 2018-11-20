import PropTypes from 'prop-types';
import React from 'react';
import VideoCard from '../VideoCard';

import styled from 'styled-components';
const LikeTouchableOpacity = styled.TouchableOpacity``;
import Heart from '../../static/images/heart.png';

export default class MediaCard extends React.PureComponent {
  static propTypes = {
    navigation: PropTypes.object,
    media: PropTypes.string
  };

  render() {
    const { media } = this.props;
    let element;
    if (media.url.endsWith('.webm') || media.url.endsWith('.mp4')) {
      element = <VideoCard media={media} />;
    } else {
      element = (
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
              right: 0,
              bottom: 0,
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
    return element;
  }
}
