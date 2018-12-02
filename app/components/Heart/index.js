import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LottieView from 'lottie-react-native';
import styled from 'styled-components';
import { View } from 'react-native';

import allTheActions from '../../actions/index';
import HeartAnimation from '../../static/animation/heart.json';

const LikeTouchableOpacity = styled.TouchableOpacity`
  left: 30;
  top: 20;
`;

class Heart extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    media: PropTypes.object,
    actions: PropTypes.object
  };

  state = {
    speed: 0
  };

  componentDidMount() {
    this.setState({ speed: this.props.media.isFavorite ? -1 : 1 });
    if (this.props.media.isFavorite) this.animation.play(80, 80);
  }

  componentWillUnmount() {
    if (this.timerHandle) {
      // eslint-disable-next-line no-undef
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }

  handleFavButtonPress = media => {
    this.animation.play();
    const { actions } = this.props;
    // eslint-disable-next-line no-undef
    this.timerHandle = setTimeout(() => {
      media.isFavorite
        ? this.setState({ speed: -1 })
        : this.setState({ speed: 1 });
    }, 1500);
    media.isFavorite
      ? actions.subreddit.removeFavorite(media)
      : actions.subreddit.addFavorite(media);
  };

  render() {
    const { media } = this.props;
    return (
      <View>
        <LikeTouchableOpacity onPress={() => this.handleFavButtonPress(media)}>
          <LottieView
            ref={animation => {
              this.animation = animation;
            }}
            source={HeartAnimation}
            loop={false}
            speed={this.state.speed}
            style={{
              width: 80,
              height: 80
            }}
          />
        </LikeTouchableOpacity>
      </View>
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
