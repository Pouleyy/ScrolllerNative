import React, { Component } from 'react';
import { Image } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import allTheActions from '../../actions/index';
import HeartImage from '../../static/images/heart.png';
import styled from 'styled-components';

const LikeTouchableOpacity = styled.TouchableOpacity``;

class Heart extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    media: PropTypes.object,
    actions: PropTypes.object
  };

  state = {
    isFavorite: false
  };

  componentDidMount() {
    this.setState({ isFavorite: this.props.media.isFavorite });
  }

  handleFavButtonPress = media => {
    media.isFavorite
      ? this.setState({ isFavorite: false })
      : this.setState({ isFavorite: true });
    const { actions } = this.props;
    media.isFavorite
      ? actions.subreddit.removeFavorite(media)
      : actions.subreddit.addFavorite(media);
  };

  render() {
    const { media } = this.props;
    return (
      <LikeTouchableOpacity onPress={() => this.handleFavButtonPress(media)}>
        <Image
          source={HeartImage}
          style={
            this.state.isFavorite
              ? { width: 25, height: 25, tintColor: 'red' }
              : { width: 25, height: 25, tintColor: 'white' }
          }
        />
      </LikeTouchableOpacity>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: {
    subreddit: bindActionCreators(allTheActions.subreddit, dispatch)
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Heart);
