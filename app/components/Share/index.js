import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import styled from 'styled-components';
import Share from 'react-native-share';

import ShareIcon from '../../static/images/share.png';

const ShareTouchableOpacity = styled.TouchableOpacity`
  left: 20;
  right: 0;
  bottom: 5;
  width: 30;
  height: 30;
`;
const shareOptions = {
  title: 'Scrolller Native',
  message: 'Check this',
  url: '',
  subject: 'Check this'
};

export default class ShareComp extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    media: PropTypes.object
  };

  handleShareButtonPress = () => {
    Share.open(shareOptions);
  };

  render() {
    shareOptions.url = this.props.media.url;
    return (
      <ShareTouchableOpacity onPress={() => this.handleShareButtonPress()}>
        <Image source={ShareIcon} style={{ width: 25, height: 25 }} />
      </ShareTouchableOpacity>
    );
  }
}
