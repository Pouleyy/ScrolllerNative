import PropTypes from 'prop-types';
import React from 'react';
import VideoCard from '../VideoCard';
import ImageCard from '../ImageCard';

export default class MediaCard extends React.PureComponent {
  static propTypes = {
    navigation: PropTypes.object,
    media: PropTypes.object
  };

  render() {
    const { media } = this.props;
    let element;
    if (media.url.endsWith('.webm') || media.url.endsWith('.mp4')) {
      element = <VideoCard media={media} />;
    } else {
      element = <ImageCard media={media} />;
    }
    return element;
  }
}
