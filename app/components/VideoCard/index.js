import React from 'react';
import Video from 'react-native-video';
import PropTypes from 'prop-types';

export default class VideoCard extends React.PureComponent {
  static propTypes = {
    navigation: PropTypes.object,
    media: PropTypes.object
  };

  render() {
    const { media } = this.props;
    return (
      <Video
        source={{ uri: media.url }} // Can be a URL or a local file.
        repeat={true}
        style={{ width: '100%', height: '100%' }}
        resizeMode={'stretch'}
      />
    );
  }
}
