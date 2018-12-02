import React from 'react';
import { ImageBackground, View } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Heart from '../Heart';
import Share from '../Share';

const ShareView = styled.View`
  width: 50;
  justify-content: flex-end;
  align-items: flex-start;
`;

const HeartView = styled.View`
  width: 50;
  justify-content: flex-end;
  align-items: flex-end;
`;

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
        <View style={{ flex: 8 }} />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <ShareView>
            <Share media={media} />
          </ShareView>
          <HeartView>
            <Heart media={media} />
          </HeartView>
        </View>
      </ImageBackground>
    );
  }
}
